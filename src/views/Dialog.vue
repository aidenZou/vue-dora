<template>
  <v-demo-page title="Dialog" desc="对话框">
    <div v-for="(name, index) in transitionNames" :key="index">
      <input type="radio" :id="name" :value="name" v-model="transitionName">
      <label :for="name">{{ name }}</label>
      <br>
    </div>
    <div>动画: {{ transitionName }}</div>

    <v-button type="primary" @click.native="showDialog1">Dialog Alert</v-button>
    <v-button type="primary" @click.native="showDialog2">Dialog Confirm</v-button>
  </v-demo-page>
</template>

<script>
  import VDemoPage from '../components/DemoPage'
  import VButton from '@/vdora-component-button'
  import '@/vdora-component-dialog'

  export default {
    name: 'dialog-view',
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
      showDialog1 () {
        this.$createDialog({
          transitionName: this.transitionName,
          title: '弹窗标题',
          content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
          confirmBtn: '我知道了'
        }).show()
      },
      showDialog2 () {
        this.$createDialog({
          transitionName: this.transitionName,
          type: 'confirm',
          title: '弹窗标题',
          // content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
          confirmBtn: '主操作',
          cancelBtn: '辅助操作',
          onConfirm (e) {
            console.log('confirm clicked.')
          },
          onCancel (e) {
            console.log('cancel clicked.')
          }
        }, (createElement) => {
          return [
            createElement('div', {
              // slot: 'content'
            }, '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'),
            createElement('div', {
              slot: 'title'
            }, '温馨提示')
          ]
        }).show()
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
