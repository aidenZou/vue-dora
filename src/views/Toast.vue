<template>
  <v-demo-page title="Toast" desc="弹出式提示">
    <v-button @click.native="showToast(false)">Toast</v-button>
    <v-button type="primary" @click.native="showToast(true)">Toast</v-button>
  </v-demo-page>
</template>

<script>
  import VDemoPage from '../components/DemoPage'
  import VButton from '@/vdora-component-button'
  import '@/vdora-component-toast'

  export default {
    name: 'toast-view',
    components: {
      VDemoPage,
      VButton
    },
    data () {
      return {
        toastMsg: 1
      }
    },
    methods: {
      showToast (long = false) {
        this.$createToast({
          msg: long ? '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内' : '我知道了' + this.toastMsg
        })
        this.toastMsg++
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
