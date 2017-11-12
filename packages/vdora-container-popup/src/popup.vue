<template>
  <transition :name="transitionName">
    <div class="v-popup" v-show="visible">
        <div class="v-mask"></div>
        <div class="v-popup-container v-popup-center">
          <div class="v-popup-content">
            <div class="v-popup-main">
              <slot class=""></slot>
            </div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'popup',
    props: {
      visible: {
        type: Boolean,
        default: true
      },
      transitionName: {
        type: String,
        default: ''
      }
    },
    methods: {
      clickHandler (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-popup {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;

    .v-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(37,38,45,.4);
    }

    &-container {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: translate(100%,100%)
    }

    &-center &-content {
      position: absolute;
      top: -50%;
      left: -50%;
      width: auto;
      transform: translate(-50%,-50%);
    }
  }
</style>

<style lang="scss" scoped>
  @import '~vdora-style/src/animation/bounce';
  @import '~vdora-style/src/animation/pulse';
  @import '~vdora-style/src/animation/zoomIn';
  @import '~vdora-style/src/animation/zoominDown';
  @import '~vdora-style/src/animation/zoomInOut';

  .zoomIn-enter-active {
    animation: opacityIn .4s;
    .v-popup-main {
      animation: zoomIn .4s
    }
  }

  .zoomInDown-enter-active {
    animation: opacityIn .4s;
    .v-popup-main {
      animation: zoomInDown .4s
    }
  }

  .zoomInOut-enter-active {
    animation: opacityIn .4s;
    .v-popup-main {
      animation: zoomInOut .4s
    }
  }

  .bounce-enter-active {
    animation: opacityIn .4s;
    .v-popup-main {
      animation: bounce .4s;
      transform-origin: center bottom;
    }
  }

  .pulse-enter-active {
    animation: opacityIn .4s;
    .v-popup-main {
      animation: pulse .4s;
      transform-origin: center bottom;
    }
  }

  @keyframes opacityIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
