<template>
  <v-demo-page title="Hoc" desc="高阶事例">
    <h3>demo：</h3>
    <v-demo @click="handlerClick"></v-demo>
    <h3>demo + box：</h3>
    <v-demo-box :names="['hocView']" :list="[1,2,3,4]" @click="handlerClick"></v-demo-box>

    <div>
      <h3>设置：</h3>
      <v-button type="primary" mini @click.native="togglePosition">toggle Position {{ popupPosition }}</v-button>
    </div>

    <v-button type="warn" mini @click.native="handlerShow">show DemoBoxPopup</v-button>
    <v-button type="warn" mini @click.native="handlerShowLayoutPopup">show LayoutPopup</v-button>

    <!--
    <v-button type="warn" mini @click.native="showDemoPopup=true">点击展示用 popup包装过的 Dome组件</v-button>
    <v-button type="warn" mini @click.native="showLayoutPopup=true">点击展示用 popup包装过的 Layout组件</v-button>

    <v-layout-popup :visible.sync="showLayoutPopup" :height="'80%'" :position="popupPosition"></v-layout-popup>
    <v-demo-box-popup :visible.sync="showDemoPopup" :position="popupPosition" :names="['hocView']" :list="[1,2,3,4,5]" @click="handlerClick"></v-demo-box-popup>
    -->
  </v-demo-page>
</template>

<script>
  import Vue from 'vue'
  import { createAPI } from '@/vdora-helper'
  import VButton from '@/vdora-component-button'

  import VDemo from '../components/Demo'
  import VLayoutDemo from './Layout'
  import BoxContainer from '../components/BoxContainer'
  import PopupContainer from '../components/PopupContainer'

  import VDemoPage from '../components/DemoPage'

  const VDemoBox = BoxContainer(VDemo)

  const VDemoPopup = PopupContainer(VDemo)
  const VLayoutPopup = PopupContainer(VLayoutDemo)
  const VDemoBoxPopup = PopupContainer(VDemoBox)

  VLayoutPopup.name = 'layout-popup'
  createAPI(Vue, VLayoutPopup, ['click'], true)

  VDemoBoxPopup.name = 'demo-box-popup'
  createAPI(Vue, VDemoBoxPopup, ['click'], true)

  export default {
    name: 'hoc-view',
    components: {
      VButton,
      VDemoPage,
      VDemo,
      VLayoutDemo,
      VDemoBox,
      VDemoPopup,
      VLayoutPopup,
      VDemoBoxPopup
    },
    data () {
      return {
        name: 'hoc-view',
        showDemoPopup: false,
        showLayoutPopup: false,
        popupPosition: 'bottom'
      }
    },
    methods: {
      togglePosition: (() => {
        const positions = ['bottom', 'top', 'left', 'right']
        let count = 1
        return function () {
          this.popupPosition = positions[count % 4]
          count++
        }
      })(),
      handlerClick (event) {
        console.log(`click for hocView`, event)
        this.showDemoPopup = false
      },
      handlerShowLayoutPopup () {
        this.$createLayoutPopup({
          position: this.popupPosition,
          height: '80%'
        }).show()
      },
      handlerShow () {
        let self = this
        const component = this.$createDemoBoxPopup({
          // visible: this.showDemoPopup,
          position: this.popupPosition,
          names: ['hocView'],
          text: 'hocView',
          list: [1, 2, 3, 4, 5],
          confirmBtn: '主操作',
          cancelBtn: '辅助操作',
          onClick (e) {
            console.log(`click for hocView`, event, self)
            component.hide()
          }
        }).show()
        console.log(component)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
