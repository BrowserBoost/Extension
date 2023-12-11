const executeScript = (tabId, script) => {
  chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    world: 'MAIN',
    injectImmediately: true,
    func: script,
  })
}

export { executeScript }
