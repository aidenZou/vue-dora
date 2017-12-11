<template>
  <div class="page-container full-page">
    <v-loading v-if="view === 'LOADING'"></v-loading>
    <v-nothing v-if="view === 'NOTHING'">
      <slot name="nothing"></slot>
    </v-nothing>

    <template v-if="view === 'MAIN'">
      <main class="main-container scroll-container">
        <slot></slot>
      </main>
      <section class="fixed-container">
        <slot name="fixed"></slot>
      </section>
    </template>
  </div>
</template>

<script>
  import loadingComponent from 'vdora-component-loading'
  import nothingComponent from 'vdora-component-nothing'

  export default {
    components: {
      'v-loading': loadingComponent,
      'v-nothing': nothingComponent
    },
    props: {
      /**
       * LOADING
       * NOTHING
       * MAIN
       */
      view: {
        type: String,
        default: 'MAIN',
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import '~vdora-style';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    height: 100%;
  }

  .full-page {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main-container {
    flex: 1;
  }

  .scroll-container {
    height: 100%;
    overflow-y: auto;
    position: relative;
    -webkit-overflow-scrolling: touch;
    > * {
      // transform: translateZ(0);
      z-index: 1;
    }
  }

  .modal-open .scroll-container {
    overflow: hidden;
  }
</style>
