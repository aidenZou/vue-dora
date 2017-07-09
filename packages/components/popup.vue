<template>
  <div class="popup-container">
    <div :class="{'mark': true, 'mark-show': show}" @click.stop.prevent="close"></div>
    <div v-show="show" transition="popup" :style="{height:height}" class="popup-dialog">
      <slot></slot>
    </div>
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
  }

  .popup-transiton {}

  .popup-enter {
    transform: translate3d(0, 100%, 0);
  }

  .popup-leave {
    transform: translate3d(0, 100%, 0);
  }
</style>
