const BODY_CLASS = 'modal-open'

const toggleBodyClass = function (className = BODY_CLASS, visible) {
  if (visible) {
    document.body.classList.add(className)
  } else {
    setTimeout(() => {
      document.body.classList.remove(className)
    }, 300)
  }
}

export default {
  props: {
    visible: {
      type: Boolean,
      // required: true,
      default: false
    },
    bodyClass: {
      type: String,
      default: BODY_CLASS
    }
  },
  watch: {
    visible (newValue) {
      toggleBodyClass(this.bodyClass, newValue)
    }
  },
  created () {
    toggleBodyClass(this.bodyClass, this.visible)
  }
}
