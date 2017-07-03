<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
  import Layout from './components/Layout'

  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>

<style lang="scss">
  @import '~@/styles/index';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
