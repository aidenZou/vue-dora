<template>
  <transition name="toast-bounce">
    <div class="toast" v-show="visible">
      <p class="toast-msg">{{ msg }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    msg: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      visible: false,
      timer: null
    }
  },
  watch: {
    msg (value) {
      this.show()
    }
  },
  methods: {
    show () {
      this.visible = true
      this.clearTimer()
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide()
          }, this.time)
        }
      })
    },
    hide () {
      this.visible = false
      this.clearTimer()
    },
    clearTimer () {
      clearTimeout(this.timer)
      this.timer = null
    }
  },
  created () {
    this.show()
  }
}
</script>

<style lang="scss" scoped>
  // 添加动画
  .toast-bounce-enter, .toast-bounce-leave {
    opacity: 0;
  }
  .toast {
    position: fixed;
    max-width: 80%;
    left: 50%;
    top: 50%;
    padding: 20px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    transition: all .3s ease;
    transform: translate(-50%, -50%);
    .toast-msg {
      text-align: center;
    }
  }
</style>
