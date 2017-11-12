<template>
  <!-- <v-page-component :view="PAGE_VIEW"> -->
  <v-demo-page title="Hoc" desc="高阶事例">
    <v-demo @on-click="handlerClick"></v-demo>
    <v-demo-box :list="[1,2,3,4]" @on-click="handlerClick"></v-demo-box>

    <v-button type="primary" mini @click.native="togglePosition">toggle Position {{ popupPosition }}</v-button>
    <v-button type="warn" mini @click.native="showDemoPopup=true">点击展示用 popup包装过的 Dome组件</v-button>
    <v-button type="warn" mini @click.native="showLayoutPopup=true">点击展示用 popup包装过的 Layout组件</v-button>

    <v-layout-popup :show.sync="showLayoutPopup" :height="'80%'" :position="popupPosition"></v-layout-popup>
    <v-demo-popup :show.sync="showDemoPopup" :position="popupPosition" :list="list" @on-click="handlerClick"></v-demo-popup>
  </v-demo-page>
    <!-- <template slot="fixed">
       <v-layout-popup :show.sync="showLayoutPopup" :height="'80%'" :position="popupPosition"></v-layout-popup>
       <v-demo-popup :show.sync="showDemoPopup" :position="popupPosition" :list="list" @on-click="handlerClick"></v-demo-popup>
    </template> -->
  <!-- </v-page-component> -->
</template>

<script>
  import VPage from '@/vdora-container-page'
  import VButton from '@/vdora-component-button'

  import VDemo from '../components/Demo'
  import VLayoutDemo from './Layout'
  import BoxContainer from '../components/BoxContainer'
  import PopupContainer from '../components/PopupContainer'

  import VDemoPage from '../components/DemoPage'

  let DemoBox = BoxContainer(VDemo)

  let DemoPopup = PopupContainer(VDemo)
  let LayoutPopup = PopupContainer(VLayoutDemo)
  let DemoBoxPopup = PopupContainer(DemoBox)

  export default {
    name: 'hoc-view',
    components: {
      VPage,
      VButton,
      VDemoPage,
      VDemo,
      VLayoutDemo,
      'v-demo-box': DemoBox,
      'v-demo-popup': DemoPopup,
      'v-layout-popup': LayoutPopup,
      'v-demo-box-popup': DemoBoxPopup
    },
    data () {
      return {
        name: 'app',
        PAGE_VIEW: 'MAIN', // MAIN、LOADING、NOTHING
        showDemoPopup: false,
        showLayoutPopup: false,
        popupPosition: 'bottom',
        list: [1, 2, 3, 4, 5]
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
        console.log(`on-click for ${this.name}`, event)
        this.showDemoPopup = false
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
