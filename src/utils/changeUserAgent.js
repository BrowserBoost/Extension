const injectUserAgent = (userAgentValue) => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: userAgentValue,
    configurable: true,
  })
  Object.defineProperty(window.navigator, 'appVersion', {
    value: userAgentValue,
    configurable: true,
  })
  Object.defineProperty(window.navigator, 'userAgentData', {
    value: undefined,
    configurable: true,
  })
}

const getUserAgentHeaderRule = (userAgentValue) => {
  return {
    id: 1,
    priority: 1,
    condition: {
      resourceTypes: [
        'main_frame',
        'sub_frame',
        'stylesheet',
        'script',
        'image',
        'font',
        'object',
        'xmlhttprequest',
        'ping',
        'csp_report',
        'media',
        'websocket',
        'webtransport',
        'webbundle',
        'other',
      ],
      urlFilter: '*',
    },
    action: {
      type: 'modifyHeaders',
      requestHeaders: [
        {
          header: 'User-Agent',
          operation: 'set',
          value: userAgentValue,
        },
      ],
    },
  }
}

export { injectUserAgent, getUserAgentHeaderRule }
