<template>
  <div id="app" class="full-page">
    <Demo></Demo>
    <PopupDemo :show.sync="show" :list="list"></PopupDemo>
    <button @click="show=true">点击</button>

    <!--布局-->
    <Layout></Layout>
  </div>
</template>

<script>
  import Layout from './components/Layout'
  import Demo from './components/Demo'
  import PopupDemo from './components/PopupDemo'

  export default {
    name: 'app',
    components: {
      Layout,
      Demo,
      PopupDemo
    },
    data () {
      return {
        show: true,
        list: [1, 2, 3, 4, 5]
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/styles/index';

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
</style>
