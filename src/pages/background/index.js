import { executeScript } from '../../utils/common.js'
import { captureTab, disposeTab } from '../../utils/boostVolume.js'
import { injectUserAgent } from '../../utils/changeUserAgent.js'
import {
  enableRightClick,
  enableAdvancedMode,
} from '../../utils/enableRightClick.js'
import {
  addSaveImageContextMenu,
  fetchAndConvertImageType,
  downloadImage,
} from '../../utils/saveImageAsType.js'

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.target !== 'background') return

  if (message.name === 'setTabVolume') {
    await captureTab(message.tabId, message.value)
  } else if (message.name === 'updateVolume') {
    chrome.storage.local.set({
      [String(message.tabId)]: message.value,
    })
  } else if (message.name === 'disposeTab') {
    chrome.storage.local.remove(String(message.tabId))
  } else if (message.name === 'downloadImage') {
    downloadImage(message.dataUrl, message.filename)
  }
})

chrome.tabs.onRemoved.addListener(disposeTab)

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['saveImageAsType'], (storage) => {
    if (storage.saveImageAsType) {
      addSaveImageContextMenu()
    }
  })
})

chrome.contextMenus.onClicked.addListener(fetchAndConvertImageType)

const webNavigationHandler = (details) => {
  chrome.storage.local.get(
    ['userAgentValue', 'enableRightClick', 'enableAdvancedMode'],
    (storage) => {
      if (storage.userAgentValue) {
        injectUserAgent(details.tabId, storage.userAgentValue)
      }
      if (storage.enableRightClick) {
        executeScript(details.tabId, enableRightClick)
        if (storage.enableAdvancedMode) {
          executeScript(details.tabId, enableAdvancedMode)
        }
      }
    }
  )
}

chrome.webNavigation.onCommitted.addListener(webNavigationHandler)

chrome.webNavigation.onHistoryStateUpdated.addListener(webNavigationHandler)
