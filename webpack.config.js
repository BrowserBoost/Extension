var webpack = require('webpack'),
  path = require('path'),
  fs = require('fs-extra'),
  env = require('./scripts/env'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
var ReactRefreshTypeScript = require('react-refresh-typescript')
const merge = require('merge-json')

const ASSET_PATH = process.env.ASSET_PATH || '/'
const BROWSER = process.env.BROWSER || 'chrome'

var alias = {}

// load the secrets
var secretsPath = path.join(__dirname, 'secrets.' + env.NODE_ENV + '.js')

var fileExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2',
]

// Add this function at the top of your webpack.config.js file
function combineManifests(commonConfigPath, browserSpecificConfigPath) {
  const commonConfig = JSON.parse(fs.readFileSync(commonConfigPath, 'utf8'))
  // const browserSpecificConfig = JSON.parse(
  //   fs.readFileSync(browserSpecificConfigPath, 'utf8')
  // )

  let manifestName, manifestDescription

  if (BROWSER === 'chrome') {
    manifestName = '__MSG_chromeName__'
    manifestDescription = '__MSG_chromeDesc__'
  } else if (BROWSER === 'edge') {
    manifestName = '__MSG_edgeName__'
    manifestDescription = '__MSG_edgeDesc__'
  }

  // "description": "__MSG_extDesc__",

  // } else if (BROWSER === 'firefox') {
  //   manifestName = '1VPN - Best Free VPN for Firefox'

  // const manifest = merge.merge(commonConfig, browserSpecificConfig)

  return JSON.stringify(
    merge.merge(
      {
        name: manifestName,
        description: manifestDescription,
      },
      commonConfig
    )
  )
}

if (fs.existsSync(secretsPath)) {
  alias['secrets'] = secretsPath
}

const isDevelopment = process.env.NODE_ENV !== 'production'

var options = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    popup: path.join(__dirname, 'src', 'pages', 'popup', 'index.jsx'),
    background: path.join(__dirname, 'src', 'pages', 'background', 'index.js'),
  },
  chromeExtensionBoilerplate: {
    notHotReload: ['background'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        type: 'asset/resource',
        exclude: /node_modules/,
        // loader: 'file-loader',
        // options: {
        //   name: '[name].[ext]',
        // },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean
                ),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'source-map-loader',
          },
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: alias,
    extensions: fileExtensions
      .map((extension) => '.' + extension)
      .concat(['.js', '.jsx', '.ts', '.tsx', '.css']),
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin({ overlay: false }),
    new CleanWebpackPlugin({ verbose: false }),
    new webpack.ProgressPlugin(),
    // expose and write the allowed env vars on the compiled bundle
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(process.env.BROWSER),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/manifest.json', // This path is not used but necessary for the plugin to work
          to: path.join(__dirname, 'build/manifest.json'),
          force: true,
          transform: function (content, path) {
            // Replace with combined manifests for Firefox
            return Buffer.from(combineManifests('src/manifest.json'))
          },
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/icon128.png',
          to: path.join(__dirname, 'build'),
          force: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'popup', 'index.html'),
      filename: 'popup.html',
      chunks: ['popup'],
      cache: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/_locales',
          to: path.join(__dirname, 'build/_locales'),
          force: true,
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/nonProcessed',
          to: path.join(__dirname, 'build'),
          force: true,
        },
      ],
    }),
  ].filter(Boolean),
  infrastructureLogging: {
    level: 'info',
  },
}

if (env.NODE_ENV === 'development') {
  options.devtool = 'cheap-module-source-map'
} else {
  options.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  }
}

module.exports = options
