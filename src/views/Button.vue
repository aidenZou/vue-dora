<template>
  <v-demo-page class="page-button" title="Button" desc="按钮">
    <v-button type="primary">页面主操作 Normal</v-button>
    <v-button type="primary" loading>页面主操作 Loading</v-button>
    <v-button type="primary" disabled>页面主操作 Disabled</v-button>
    <v-button>页面次要操作 Normal</v-button>
    <v-button loading>页面次操作 Loading</v-button>
    <v-button disabled>页面次要操作 Disabled</v-button>
    <v-button type="warn">警告类操作 Normal</v-button>
    <v-button type="warn" loading>警告类操作 Loading</v-button>
    <v-button type="warn" disabled>警告类操作 Disabled</v-button>

    <div class="button-sp-area">
      <v-button plain>按钮</v-button>
      <v-button plain disabled>按钮</v-button>
      <v-button type="primary" plain>按钮</v-button>
      <v-button type="primary" plain disabled>按钮</v-button>
      <v-button type="primary" mini>按钮</v-button>
      <v-button mini>按钮</v-button>
      <v-button type="warn" mini>按钮</v-button>
    </div>
  </v-demo-page>
</template>

<script>
  import VDemoPage from '../components/DemoPage'
  import VButton from '@/vdora-component-button'

  export default {
    name: 'button-view',
    components: {
      VDemoPage,
      VButton
    },
    data () {
      return {
        transitionNames: ['bounce', 'pulse', 'zoomIn', 'zoomInDown', 'zoomInOut'],
        transitionName: 'zoomInOut'
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .page-button {
    .button-sp-area {
        margin: 0 auto;
        padding: 15px 0;
        width: 60%;
    }
  }
</style>
