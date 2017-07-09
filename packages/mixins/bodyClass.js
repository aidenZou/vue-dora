const BODY_CLASS = 'modal-open'

const toggleBodyClass = function (className = BODY_CLASS, show) {
  if (show) {
    document.body.classList.add(className)
  } else {
    setTimeout(() => {
      document.body.classList.remove(className)
    }, 300)
  }
}

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    bodyClass: {
      type: String,
      default: BODY_CLASS
    }
  },
  watch: {
    show (newValue) {
      toggleBodyClass(this.bodyClass, newValue)
    }
  },
  created () {
    toggleBodyClass(this.bodyClass, this.show)
  }
}
