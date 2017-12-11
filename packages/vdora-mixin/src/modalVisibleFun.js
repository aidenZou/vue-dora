export default function (config) {
  let _config = Object.assign({ emitShow: 'show', emitHide: 'hide' }, config)

  return {
    data () {
      return {
        isVisible: false
      }
    },
    methods: {
      show () {
        this.isVisible = true
        this.$emit(_config.emitShow)
        return this
      },
      hide () {
        this.isVisible = false
        this.$emit(_config.emitHide)
        return this
      }
    }
  }
}
