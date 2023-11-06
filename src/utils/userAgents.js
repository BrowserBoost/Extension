const userAgents = [
  {
    title: 'Android',
    values: [
      {
        title: 'Android (4.0.2) Browser \u2014 Galaxy Nexus',
        value:
          'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Android',
          platformVersion: '4.0.2',
          architecture: '',
          model: 'Galaxy Nexus',
          mobile: true,
        },
      },
      {
        title: 'Android (2.3) Browser \u2014 Nexus S',
        value:
          'Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Android',
          platformVersion: '2.3.6',
          architecture: '',
          model: 'Nexus S',
          mobile: true,
        },
      },
    ],
  },
  {
    title: 'BlackBerry',
    values: [
      {
        title: 'BlackBerry \u2014 BB10',
        value:
          'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+',
        metadata: null,
      },
      {
        title: 'BlackBerry \u2014 PlayBook 2.1',
        value:
          'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+',
        metadata: null,
      },
      {
        title: 'BlackBerry \u2014 9900',
        value:
          'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11+',
        metadata: null,
      },
    ],
  },
  {
    title: 'Chrome',
    values: [
      {
        title: 'Chrome \u2014 Android Mobile',
        value:
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Android',
          platformVersion: '6.0',
          architecture: '',
          model: 'Nexus 5',
          mobile: true,
        },
      },
      {
        title: 'Chrome \u2014 Android Mobile (high-end)',
        value:
          'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Android',
          platformVersion: '10',
          architecture: '',
          model: 'Pixel 4',
          mobile: true,
        },
      },
      {
        title: 'Chrome \u2014 Android Tablet',
        value:
          'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Android',
          platformVersion: '4.3',
          architecture: '',
          model: 'Nexus 7',
          mobile: true,
        },
      },
      {
        title: 'Chrome \u2014 iPhone',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/%s Mobile/15E148 Safari/604.1',
        metadata: null,
      },
      {
        title: 'Chrome \u2014 iPad',
        value:
          'Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/%s Mobile/15E148 Safari/604.1',
        metadata: null,
      },
      {
        title: 'Chrome \u2014 Chrome OS',
        value:
          'Mozilla/5.0 (X11; CrOS x86_64 10066.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Chrome OS',
          platformVersion: '10066.0.0',
          architecture: 'x86',
          model: '',
          mobile: false,
        },
      },
      {
        title: 'Chrome \u2014 Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'macOS',
          platformVersion: '10_14_6',
          architecture: 'x86',
          model: '',
          mobile: false,
        },
      },
      {
        title: 'Chrome \u2014 Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Google Chrome', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Windows',
          platformVersion: '10.0',
          architecture: 'x86',
          model: '',
          mobile: false,
        },
      },
    ],
  },
  {
    title: 'Firefox',
    values: [
      {
        title: 'Firefox \u2014 Android Mobile',
        value:
          'Mozilla/5.0 (Android 4.4; Mobile; rv:70.0) Gecko/70.0 Firefox/70.0',
        metadata: null,
      },
      {
        title: 'Firefox \u2014 Android Tablet',
        value:
          'Mozilla/5.0 (Android 4.4; Tablet; rv:70.0) Gecko/70.0 Firefox/70.0',
        metadata: null,
      },
      {
        title: 'Firefox \u2014 iPhone',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4',
        metadata: null,
      },
      {
        title: 'Firefox \u2014 iPad',
        value:
          'Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4',
        metadata: null,
      },
      {
        title: 'Firefox \u2014 Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0',
        metadata: null,
      },
      {
        title: 'Firefox \u2014 Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0',
        metadata: null,
      },
    ],
  },
  {
    title: 'Googlebot',
    values: [
      {
        title: 'Googlebot',
        value:
          'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        metadata: null,
      },
      {
        title: 'Googlebot Desktop',
        value:
          'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/%s Safari/537.36',
        metadata: null,
      },
      {
        title: 'Googlebot Smartphone',
        value:
          'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        metadata: null,
      },
    ],
  },
  {
    title: 'Internet Explorer',
    values: [
      {
        title: 'Internet Explorer 11',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
        metadata: null,
      },
      {
        title: 'Internet Explorer 10',
        value:
          'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
        metadata: null,
      },
      {
        title: 'Internet Explorer 9',
        value:
          'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
        metadata: null,
      },
      {
        title: 'Internet Explorer 8',
        value:
          'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
        metadata: null,
      },
      {
        title: 'Internet Explorer 7',
        value: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
        metadata: null,
      },
    ],
  },
  {
    title: 'Microsoft Edge',
    values: [
      {
        title: 'Microsoft Edge (Chromium) \u2014 Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36 Edg/%s',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Microsoft Edge', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Windows',
          platformVersion: '10.0',
          architecture: 'x86',
          model: '',
          mobile: false,
        },
      },
      {
        title: 'Microsoft Edge (Chromium) \u2014 Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/%s Safari/604.1 Edg/%s',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Microsoft Edge', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'macOS',
          platformVersion: '10_14_6',
          architecture: 'x86',
          model: '',
          mobile: false,
        },
      },
      {
        title: 'Microsoft Edge \u2014 iPhone',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 EdgiOS/44.5.0.10 Mobile/15E148 Safari/604.1',
        metadata: null,
      },
      {
        title: 'Microsoft Edge \u2014 iPad',
        value:
          'Mozilla/5.0 (iPad; CPU OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 EdgiOS/44.5.2 Mobile/15E148 Safari/605.1.15',
        metadata: null,
      },
      {
        title: 'Microsoft Edge \u2014 Android Mobile',
        value:
          'Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.D1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36 EdgA/42.0.0.2057',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Microsoft Edge', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Android',
          platformVersion: '8.1.0',
          architecture: '',
          model: 'Pixel',
          mobile: true,
        },
      },
      {
        title: 'Microsoft Edge \u2014 Android Tablet',
        value:
          'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 EdgA/42.0.0.2057',
        metadata: {
          brands: [
            { brand: 'Not A;Brand', version: '99' },
            { brand: 'Chromium', version: '%s' },
            { brand: 'Microsoft Edge', version: '%s' },
          ],
          fullVersion: '%s',
          platform: 'Android',
          platformVersion: '6.0.1',
          architecture: '',
          model: 'Nexus 7',
          mobile: true,
        },
      },
      {
        title: 'Microsoft Edge (EdgeHTML) \u2014 Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19042',
        metadata: null,
      },
      {
        title: 'Microsoft Edge (EdgeHTML) \u2014 XBox',
        value:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041',
        metadata: null,
      },
    ],
  },
  {
    title: 'Opera',
    values: [
      {
        title: 'Opera \u2014 Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48',
        metadata: null,
      },
      {
        title: 'Opera \u2014 Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48',
        metadata: null,
      },
      {
        title: 'Opera (Presto) \u2014 Mac',
        value:
          'Opera/9.80 (Macintosh; Intel Mac OS X 10.9.1) Presto/2.12.388 Version/12.16',
        metadata: null,
      },
      {
        title: 'Opera (Presto) \u2014 Windows',
        value: 'Opera/9.80 (Windows NT 6.1) Presto/2.12.388 Version/12.16',
        metadata: null,
      },
      {
        title: 'Opera Mobile \u2014 Android Mobile',
        value:
          'Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02',
        metadata: null,
      },
      {
        title: 'Opera Mini \u2014 iOS',
        value:
          'Opera/9.80 (iPhone; Opera Mini/8.0.0/34.2336; U; en) Presto/2.8.119 Version/11.10',
        metadata: null,
      },
    ],
  },
  {
    title: 'Safari',
    values: [
      {
        title: 'Safari \u2014 iPad iOS 13.2',
        value:
          'Mozilla/5.0 (iPad; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        metadata: null,
      },
      {
        title: 'Safari \u2014 iPhone iOS 13.2',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        metadata: null,
      },
      {
        title: 'Safari \u2014 Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15',
        metadata: null,
      },
    ],
  },
  {
    title: 'UC Browser',
    values: [
      {
        title: 'UC Browser \u2014 Android Mobile',
        value:
          'Mozilla/5.0 (Linux; U; Android 8.1.0; en-US; Nexus 6P Build/OPM7.181205.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.11.1.1197 Mobile Safari/537.36',
        metadata: null,
      },
      {
        title: 'UC Browser \u2014 iOS',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16B92 UCBrowser/12.1.7.1109 Mobile AliApp(TUnionSDK/0.1.20.3)',
        metadata: null,
      },
      {
        title: 'UC Browser \u2014 Windows Phone',
        value:
          'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920) UCBrowser/10.1.0.563 Mobile',
        metadata: null,
      },
    ],
  },
]

export default userAgents
