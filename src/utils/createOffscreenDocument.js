const createOffscreenDocument = async () => {
  const existingContexts = await chrome.runtime.getContexts({})

  const offscreenDocument = existingContexts.find(
    (c) => c.contextType === 'OFFSCREEN_DOCUMENT'
  )

  if (!offscreenDocument) {
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['USER_MEDIA'],
      justification:
        'Recording from chrome.tabCapture API and accessing the HTML Canvas',
    })
  }
}

export default createOffscreenDocument
