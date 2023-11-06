const enableRightClickScript = () => {
  // Create a style element to allow text selection
  let styleElement = document.createElement('style')
  document.head.appendChild(styleElement)
  styleElement.type = 'text/css'
  styleElement.innerText = `
        * {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
    `

  // List of events to stop their propagation
  const events = [
    'contextmenu',
    'copy',
    'cut',
    'paste',
    'mouseup',
    'mousedown',
    'keyup',
    'keydown',
    'drag',
    'dragstart',
    'select',
    'selectstart',
  ]

  // Add event listeners to each event to stop their propagation
  events.forEach((event) => {
    document.addEventListener(
      event,
      (e) => {
        e.stopPropagation()
      },
      true
    )
  })

  // Function to disable user's ability to select content and context menu interactions
  function disableUserSelectionAndContext() {
    let styleElement = document.createElement('style')
    document.head.appendChild(styleElement)
    styleElement.type = 'text/css'
    styleElement.innerText = `
            * {
                -webkit-user-select: text !important;
                -moz-user-select: text !important;
                -ms-user-select: text !important;
                user-select: text !important;
            }
        `

    let allElements = document.querySelectorAll('*')
    for (let i = 0; i < allElements.length; i++) {
      if (allElements[i].style.userSelect === 'none') {
        allElements[i].style.userSelect = 'auto'
      }
    }

    // Nullify context menu and related events for the document and body
    ;[document, document.body].forEach((elem) => {
      ;[
        'oncontextmenu',
        'onselectstart',
        'ondragstart',
        'onmousedown',
        'oncut',
        'oncopy',
        'onpaste',
      ].forEach((event) => {
        elem[event] = null
      })
    })
  }

  function MutationEvents() {
    this.events = [
      'DOMAttrModified',
      'DOMNodeInserted',
      'DOMNodeRemoved',
      'DOMCharacterDataModified',
      'DOMSubtreeModified',
    ]
    this.bind()
  }

  function CustomEvent(event) {
    this.event = event
    this.contextmenuEvent = this.createEvent(this.event.type)
  }

  // Ensure context menu is nullified after 2 seconds
  setTimeout(() => {
    document.oncontextmenu = null
  }, 2000)

  // Stop propagation of some events on the document
  ;['copy', 'cut', 'paste', 'select', 'selectstart'].forEach((event) => {
    document.addEventListener(
      event,
      (e) => {
        e.stopPropagation()
      },
      true
    )
  })

  // Stop propagation of the contextmenu event on the window
  window.addEventListener(
    'contextmenu',
    function contextMenuHandler(e) {
      e.stopPropagation()
      e.stopImmediatePropagation()

      let customEvent = new CustomEvent(e)
      window.removeEventListener(e.type, contextMenuHandler, true)

      let mutationEvent = new MutationEvents()
      customEvent.fire()
      window.addEventListener(e.type, contextMenuHandler, true)

      if (customEvent.isCanceled && mutationEvent.isCalled) {
        e.preventDefault()
      }
    },
    true
  )

  MutationEvents.prototype.bind = function () {
    this.events.forEach((event) => {
      document.addEventListener(event, this, true)
    })
  }

  MutationEvents.prototype.handleEvent = function () {
    this.isCalled = true
  }

  CustomEvent.prototype.createEvent = function (type) {
    let targetElement = this.event.target
    let newEvent = targetElement.ownerDocument.createEvent('MouseEvents')
    newEvent.initMouseEvent(
      type,
      this.event.bubbles,
      this.event.cancelable,
      targetElement.ownerDocument.defaultView,
      this.event.detail,
      this.event.screenX,
      this.event.screenY,
      this.event.clientX,
      this.event.clientY,
      this.event.ctrlKey,
      this.event.altKey,
      this.event.shiftKey,
      this.event.metaKey,
      this.event.button,
      this.event.relatedTarget
    )
    return newEvent
  }

  CustomEvent.prototype.fire = function () {
    let targetElement = this.event.target
    targetElement.dispatchEvent(this.contextmenuEvent)
    this.isCanceled = this.contextmenuEvent.defaultPrevented
  }

  // Invoke the function to disable user selection and context menu interactions
  disableUserSelectionAndContext()
}

const enableRightClick = (tabId) => {
  chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    func: enableRightClickScript,
  })
}

export default enableRightClick
