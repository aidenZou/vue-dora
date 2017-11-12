<template>
  <v-page :view="PAGE_VIEW">
    <v-view-dialog></v-view-dialog>

    <v-view-toast></v-view-toast>

    <v-view-button></v-view-button>

    <v-view-hoc></v-view-hoc>

    <v-view-layout></v-view-layout>

    <!--slot-->
    <div slot="nothing">自定义无数据内容</div>
  </v-page>
</template>

<script>
  import VPage from '@/vdora-container-page'
  import VViewDialog from './views/Dialog'
  import VViewButton from './views/Button'
  import VViewToast from './views/Toast'
  import VViewLayout from './views/Layout'
  import VViewHoc from './views/Hoc'

  export default {
    name: 'app',
    components: {
      VPage,
      VViewDialog,
      VViewButton,
      VViewToast,
      VViewLayout,
      VViewHoc
    },
    data () {
      return {
        PAGE_VIEW: 'MAIN' // MAIN、LOADING、NOTHING
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import '~@/vdora-style/src/index.scss';
  // @import '~bulma';

  .box {
    border: 1px solid #42b983;
    background: #f7f7f7;
  }

  .main-container {
    // padding: 15px;
  }
</style>
