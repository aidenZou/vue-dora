const modalOpen = 'modal-open'

export default {
  props: {
    bodyClass: {
      type: String,
      default: modalOpen
    }
  },
  watch: {
    show (value) {
      this.toggleClass()
    }
  },
  created () {
    this.toggleClass()
  },
  methods: {
    toggleClass () {
      if (this.show) {
        document.body.classList.add(this.bodyClass)
      } else {
        document.body.classList.remove(this.bodyClass)
      }
    }
  }
}
