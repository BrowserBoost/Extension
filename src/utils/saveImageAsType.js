import createOffscreenDocument from './createOffscreenDocument.js'

const addSaveImageContextMenu = () => {
  chrome.contextMenus.create({
    id: 'parent',
    title: 'Save as type',
    contexts: ['image'],
  })

  chrome.contextMenus.create({
    id: 'jpg',
    title: 'JPG',
    parentId: 'parent',
    contexts: ['image'],
  })

  chrome.contextMenus.create({
    id: 'png',
    title: 'PNG',
    parentId: 'parent',
    contexts: ['image'],
  })

  chrome.contextMenus.create({
    id: 'webp',
    title: 'WebP',
    parentId: 'parent',
    contexts: ['image'],
  })
}

const removeSaveImageContextMenu = () => chrome.contextMenus.removeAll()

const fetchAndConvertImageType = async (info) => {
  const dataUrl = await fetchDataURL(info.srcUrl)

  const filename = getFilename(info.srcUrl)

  await createOffscreenDocument()

  await chrome.runtime.sendMessage({
    name: 'convertType',
    target: 'offscreen',
    dataUrl,
    filename,
    imageFormat: info.menuItemId,
  })
}

const fetchDataURL = async (src) => {
  // if (src.startsWith('data:')) {
  //   callback(null, src)
  //   return
  // }
  try {
    const response = await fetch(src)
    const blob = await response.blob()

    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = function (evt) {
        const dataUrl = evt.target.result
        resolve(dataUrl)
      }
      reader.onerror = function (error) {
        reject(error.message || error)
      }
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    return error.message || error
  }
}

const getFilename = (srcUrl) => {
  let filename = new URL(srcUrl).pathname.split('/').pop()
  filename = decodeURIComponent(filename)
  filename = filename.replace(/[^\w\-.,@ ]+/g, '')

  return filename
}

const downloadImage = (url, filename) => {
  chrome.downloads.download({
    url,
    filename,
    saveAs: true,
  })
}

export {
  addSaveImageContextMenu,
  removeSaveImageContextMenu,
  fetchAndConvertImageType,
  fetchDataURL,
  downloadImage,
}
