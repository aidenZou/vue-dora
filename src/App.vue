<template>
  <v-page class="main-container" :view="PAGE_VIEW">
    <h2>HOC</h2>
    <v-demo @on-click="handlerClick"></v-demo>
    <v-demo-box :list="[1,2,3,4]" @on-click="handlerClick"></v-demo-box>

    <button @click="togglePosition">toggle Position {{ popupPosition }}</button>
    <button @click="showDemoPopup=true">点击展示用 popup包装过的 Dome组件</button>
    <button @click="showLayoutPopup=true">点击展示用 popup包装过的 Layout组件</button>

    <!-- <v-layout-box></v-layout-box> -->

    <h2>Layout</h2>

    <!--布局-->
    <!-- <v-layout></v-layout> -->

    <!--slot-->
    <div slot="nothing">自定义无数据内容</div>

    <template slot="fixed">
       <v-layout-popup :show.sync="showLayoutPopup" :height="'80%'" :position="popupPosition"></v-layout-popup>
       <v-demo-popup :show.sync="showDemoPopup" :position="popupPosition" :list="list" @on-click="handlerClick"></v-demo-popup>
       <!-- <v-demo-box-popup :show.sync="showDemoPopup"></v-demo-box-popup> -->
    </template>
  </v-page>
</template>

<script>
  import pageComponent from '@/vdora-container-page'
  import Layout from './components/Layout'
  import Demo from './components/Demo'
  import BoxContainer from './components/BoxContainer'
  import PopupContainer from './components/PopupContainer'

  let DemoBox = BoxContainer(Demo)
  let LayoutBox = BoxContainer(Layout)

  let DemoPopup = PopupContainer(Demo)
  let LayoutPopup = PopupContainer(Layout)
  let DemoBoxPopup = PopupContainer(DemoBox)

  export default {
    name: 'app',
    components: {
      'v-page': pageComponent,
      'v-layout': Layout,
      'v-demo': Demo,
      'v-demo-box': DemoBox,
      'v-layout-box': LayoutBox,
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
        console.log('on-click for App...')
        console.log(`name: ${this.name}`, event)
        this.showDemoPopup = false
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/vdora-style/src/index.scss';

  .box {
    border: 1px solid #42b983;
    background: #f7f7f7;
  }

  .main-container {
    padding: 15px;
  }
</style>
