<template>
  <div class="popup-container">
    <div :class="{'mark': true, 'mark-show': show}" @click.stop.prevent="close"></div>
    <transition :name="`popup-animate-${position}`">
      <div v-show="show" class="popup-dialog" :class="[`popup-${position}`]" :style="{height:height}">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import bodyClass from '../mixins/bodyClass'

  export default {
    mixins: [bodyClass],
    props: {
      // show: {
      //   type: Boolean,
      //   default: false
      // },
      height: {
        type: String,
        default: 'auto'
      },
      // 出现的位置：bottom、top、left、right
      position: {
        type: String,
        default: 'bottom'
      }
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
    max-height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &.popup-left {
      width: auto;
      height: 100%;
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
    }
    &.popup-right {
      width: auto;
      height: 100%;
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
    }
    &.popup-top {
      width: 100%;
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
    }
  }

  .popup-animate-bottom-enter,
  .popup-animate-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
  }

  .popup-animate-left-enter,
  .popup-animate-left-leave-active {
    transform: translate3d(-100%, 0, 0);
  }

  .popup-animate-right-enter,
  .popup-animate-right-leave-active {
    transform: translate3d(100%, 0, 0);
  }

  .popup-animate-top-enter,
  .popup-animate-top-leave-active {
    transform: translate3d(0, -100%, 0);
  }
</style>
