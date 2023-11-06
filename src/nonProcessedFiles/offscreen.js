const tabs = {}

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.target !== 'offscreen') return

  if (message.name === 'convertType') {
    convertImageAsType(message.dataUrl, message.filename, message.imageFormat)
  } else {
    const streamId = message.streamId
    const tabId = message.tabId
    const value = message.value

    if (message.name === 'startRecording') {
      await captureTab(streamId, tabId)
    }

    if (message.name === 'setVolume' || message.name === 'startRecording') {
      tabs[tabId].gainNode.gain.value = value
      chrome.runtime.sendMessage({
        name: 'updateVolume',
        target: 'background',
        tabId,
        value,
      })
    } else if (message.name === 'disposeTab') {
      tabs[tabId].audioContext.close()
      delete tabs[tabId]
      chrome.runtime.sendMessage({
        name: 'disposeTab',
        target: 'background',
        tabId,
      })
    }
  }
})

const captureTab = async (streamId, tabId) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: streamId,
      },
    },
  })

  const audioContext = new AudioContext()
  const streamSource = audioContext.createMediaStreamSource(media)
  const gainNode = audioContext.createGain()

  streamSource.connect(gainNode)
  gainNode.connect(audioContext.destination)

  tabs[tabId] = { audioContext, gainNode }
}

const convertImageToDataURL = (img, type) => {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const context = canvas.getContext('2d')
  const mimeType = `image/${type === 'jpg' ? 'jpeg' : type}`
  context.drawImage(img, 0, 0)
  return canvas.toDataURL(mimeType)
}

const imageLoad = (src, type) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(convertImageToDataURL(img, type))
    }
    img.onerror = () => {
      reject(new Error('Image load error'))
    }
    img.src = src
  })
}

const convertImageAsType = (src, filename, type) => {
  imageLoad(src, type)
    .then((dataUrl) => {
      chrome.runtime.sendMessage({
        name: 'downloadImage',
        target: 'background',
        filename,
        dataUrl,
      })
    })
    .catch((error) => {
      console.error(error)
    })
}
