import createOffscreenDocument from './createOffscreenDocument.js'

const captureTab = async (tabId, value) => {
  await createOffscreenDocument()

  const capturedTabs = await chrome.tabCapture.getCapturedTabs()

  if (!capturedTabs.some((tab) => tab.tabId === tabId)) {
    const streamId = await chrome.tabCapture.getMediaStreamId({
      targetTabId: tabId,
    })
    await chrome.runtime.sendMessage({
      name: 'startRecording',
      target: 'offscreen',
      streamId,
      tabId,
      value,
    })
  } else {
    chrome.runtime.sendMessage({
      name: 'setVolume',
      target: 'offscreen',
      tabId,
      value,
    })
  }
}

const disposeTab = (tabId) => {
  chrome.runtime.sendMessage({
    name: 'disposeTab',
    target: 'offscreen',
    tabId,
  })
}

export { captureTab, disposeTab }
