const enableRightClick = () => {
  const createAndAppendStyle = () => {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerText = `
        * {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }`
    document.head.appendChild(style)
  }

  const updateElementUserSelect = () => {
    const elements = document.querySelectorAll('*')
    elements.forEach((element) => {
      if (element.style.userSelect === 'none') {
        element.style.userSelect = 'auto'
      }
    })
  }

  const resetEventHandlers = (element) => {
    const events = [
      'oncontextmenu',
      'onselectstart',
      'ondragstart',
      'onmousedown',
      'oncut',
      'oncopy',
      'onpaste',
    ]
    events.forEach((event) => (element[event] = null))
  }

  class MutationObserverHandler {
    constructor() {
      this.events = [
        'DOMAttrModified',
        'DOMNodeInserted',
        'DOMNodeRemoved',
        'DOMCharacterDataModified',
        'DOMSubtreeModified',
      ]
      this.bindEvents()
    }

    bindEvents() {
      this.events.forEach((event) =>
        document.addEventListener(event, this, true)
      )
    }

    handleEvent() {
      this.isCalled = true
    }

    unbindEvents() {
      this.events.forEach((event) =>
        document.removeEventListener(event, this, true)
      )
    }
  }

  class CustomEvent {
    constructor(originalEvent) {
      this.originalEvent = originalEvent
      this.contextmenuEvent = this.createEvent(originalEvent.type)
    }

    createEvent(type) {
      const {
        target,
        bubbles,
        cancelable,
        view,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        button,
        relatedTarget,
      } = this.originalEvent
      const customEvent = new MouseEvent(type, {
        target,
        bubbles,
        cancelable,
        view,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        button,
        relatedTarget,
      })
      return customEvent
    }

    fire() {
      const target = this.originalEvent.target
      target.dispatchEvent(this.contextmenuEvent)
      this.isCanceled = this.contextmenuEvent.defaultPrevented
    }
  }

  createAndAppendStyle()
  updateElementUserSelect()
  resetEventHandlers(document)
  resetEventHandlers(document.body)

  setTimeout(() => resetEventHandlers(document), 2000)
  ;['copy', 'cut', 'paste', 'select', 'selectstart'].forEach((event) => {
    document.addEventListener(event, (e) => e.stopPropagation(), true)
  })

  window.addEventListener(
    'contextmenu',
    function handler(e) {
      e.stopPropagation()
      e.stopImmediatePropagation()
      const customEvent = new CustomEvent(e)
      window.removeEventListener(e.type, handler, true)
      const observer = new MutationObserverHandler()
      customEvent.fire()
      window.addEventListener(e.type, handler, true)
      if (customEvent.isCanceled && observer.isCalled) {
        e.preventDefault()
      }
    },
    true
  )
}

const enableAdvancedMode = () => {
  // Create and append a style element to the document head
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerText = `
    * {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
    }`
  document.head.appendChild(style)

  // List of events to stop propagation
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

  // Add event listeners to the document for each event
  events.forEach((event) => {
    document.addEventListener(event, (e) => e.stopPropagation(), true)
  })
}

export { enableRightClick, enableAdvancedMode }
