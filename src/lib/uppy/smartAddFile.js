import getDroppedFiles from '@uppy/utils/lib/getDroppedFiles'
import getFileNameAndExtension from '@uppy/utils/lib/getFileNameAndExtension'
import { UIPlugin } from '@uppy/core'

class SmartAddFile extends UIPlugin {
  constructor(uppy, opts = {}) {
    super(uppy, opts)

    this.id = opts.id || 'SmartAddFile'
    this.type = 'acquirer'

    this.currentFileCount = opts.currentFileCount
    this.disableDragDrop = opts.disableDragDrop || false
    this.elToAttach = opts.dragDropArea || document.body

    this.removeDragOverClassTimeout = null
    this.draggingOverClass = 'smart-add-file--dragging-over'
    this.dragDropEventsConfig = [
      {
        events: ['dragover', 'dragleave', 'drop'],
        handler: function (e) {
          e.preventDefault()
          e.stopPropagation()
        },
      },

      {
        events: ['dragover'],
        handler: (e) => {
          clearTimeout(this.removeDragOverClassTimeout)

          e.dataTransfer.dropEffect = 'copy'

          if (!this.elToAttach.classList.contains(this.draggingOverClass)) {
            this.elToAttach.classList.add(this.draggingOverClass)
          }
        },
      },

      {
        events: ['dragleave'],
        handler: () => {
          clearTimeout(this.removeDragOverClassTimeout)

          // Avoiding a flickering: https://github.com/transloadit/uppy/blob/master/packages/%40uppy/drag-drop/src/index.js#L135
          this.removeDragOverClassTimeout = setTimeout(() => {
            this.elToAttach.classList.remove(this.draggingOverClass)
          }, 50)
        },
      },

      {
        events: ['drop'],
        handler: (e) => {
          clearTimeout(this.removeDragOverClassTimeout)

          this.elToAttach.classList.remove(this.draggingOverClass)

          getDroppedFiles(e.dataTransfer).then((files) => this.addFiles(files))
        },
      },
    ]

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  createGlobalInput() {
    const elInput = document.createElement('input')
    elInput.setAttribute('type', 'file')
    elInput.setAttribute('hidden', '')

    const { allowedFileTypes } = this.uppy.opts.restrictions
    if (allowedFileTypes) {
      elInput.setAttribute('accept', allowedFileTypes.join(','))
    }

    const { maxNumberOfFiles } = this.uppy.opts.restrictions
    if (maxNumberOfFiles !== 1) {
      elInput.setAttribute('multiple', '')
    }

    elInput.addEventListener('change', this.handleInputChange)

    this.elToAttach.appendChild(elInput)

    this.elInput = elInput
  }

  addOrRemoveDragDropListeners(action) {
    this.dragDropEventsConfig.forEach((config) => {
      config.events.forEach((eventName) => {
        this.elToAttach[action === 'add' ? 'addEventListener' : 'removeEventListener'](eventName, config.handler)
      })
    })
  }

  addFiles(files) {
    /**
     * This validation is running here because Doka can receive invalid files
     * It's created an object containing only fields required for validation on Uppy
     */
    const filesValidated = files.filter((file) => {
      const fileForVerification = {
        type: file.type,
        size: file.size,
        extension: getFileNameAndExtension(file.name).extension,
      }

      return !this.uppy.validateSingleFile(fileForVerification)
    })

    const { maxNumberOfFiles } = this.uppy.opts.restrictions
    if (maxNumberOfFiles && filesValidated.length + this.currentFileCount > maxNumberOfFiles) {
      this.uppy.emit('error', Error('max-files-exceeded'))
    }
    else if (filesValidated.length) {
      const descriptors = filesValidated.map((file) => ({
        source: this.id,
        name: file.name,
        type: file.type,
        data: file,
      }))

      try {
        this.uppy.addFiles(descriptors)
      }
      catch (err) {
        this.uppy.log(err)
      }
    }
  }

  openFileBrowserWindow() {
    this.elInput.click()
  }

  updateCurrentFileCount(count) {
    this.currentFileCount = count
  }

  handleInputChange(event) {
    this.addFiles([...event.target.files])

    event.target.value = null
  }

  install() {
    this.createGlobalInput()

    if (!this.disableDragDrop) {
      this.addOrRemoveDragDropListeners('add')
    }
  }

  uninstall() {
    this.elInput.parentNode.removeChild(this.elInput)

    if (!this.disableDragDrop) {
      this.addOrRemoveDragDropListeners('remove')
    }
  }
}

export default SmartAddFile
