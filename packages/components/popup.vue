<template>
  <div class="popup-container">
    <div :class="{'mark': true, 'mark-show': show}" @click.stop.prevent="close"></div>
    <div v-show="show" transition="popup" :style="{height:height}" class="popup-dialog">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const BODY_CLASS = 'modal-open'
  const bodyClass = function (show) {
    if (show) {
      document.body.classList.add(BODY_CLASS)
    } else {
      setTimeout(() => {
        document.body.classList.remove(BODY_CLASS)
      }, 300)
    }
  }

  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      height: {
        type: String,
        default: 'auto'
      }
    },
    watch: {
      show (newValue) {
        bodyClass(newValue)
      }
    },
    created () {
      bodyClass(this.show)
    },
    methods: {
      close () {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popup-container {
    position: relative;
    z-index: 100;
    height: 0;
  }

  .popup-dialog {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 101;
    transition-property: transform;
    transition-duration: .3s;
  }

  .popup-transiton {}

  .popup-enter {
    transform: translate3d(0, 100%, 0);
  }

  .popup-leave {
    transform: translate3d(0, 100%, 0);
  }
</style>
