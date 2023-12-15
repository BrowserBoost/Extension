export const isFirefox = process.env.BROWSER === 'firefox'
export const isEdge = process.env.BROWSER === 'edge'

export const reviewUrl = isFirefox
  ? ''
  : isEdge
  ? 'https://microsoftedge.microsoft.com/addons/detail/jehejlgggbhdemlekhoicodollcjnjig'
  : 'https://chrome.google.com/webstore/detail/akknpgblpchaoebdoiojonnahhnfgnem/reviews'

export const supportUrl = isFirefox
  ? 'https://github.com/BrowserBoost/Extension/issues'
  : isEdge
  ? 'https://github.com/BrowserBoost/Extension/issues'
  : 'https://chromewebstore.google.com/detail/akknpgblpchaoebdoiojonnahhnfgnem/support'
