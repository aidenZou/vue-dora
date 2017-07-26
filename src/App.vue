<template>
  <v-page class="div-class" :view="PAGE_VIEW">
    <h2>HOC</h2>
    <v-demo></v-demo>
    <v-simpledemo :list="[1,2,3,4]"></v-simpledemo>
    <button @click="togglePosition">toggle Position {{ popupPosition }}</button>
    <button @click="show=true">点击展示用 popup包装过的组件</button>

    <h2>Layout</h2>

    <!--布局-->
    <v-layout></v-layout>

    <!--slot-->
    <div slot="nothing">自定义无数据内容</div>

    <template slot="fixed">
       <v-popupdemo :show.sync="show" :position="popupPosition" :list="list"></v-popupdemo>
    </template>
  </v-page>
</template>

<script>
  import pageComponent from '@/vdora-container-page'
  import Layout from './components/Layout'
  import Demo from './components/Demo'
  import PopupDemo from './components/PopupDemo'
  import SimpleDemo from './components/SimpleDemo'

  export default {
    name: 'app',
    components: {
      'v-page': pageComponent,
      'v-layout': Layout,
      'v-demo': Demo,
      'v-simpledemo': SimpleDemo,
      'v-popupdemo': PopupDemo
    },
    data () {
      return {
        PAGE_VIEW: 'MAIN',      // MAIN、LOADING、NOTHING
        show: false,
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
      })()
    }
  }
</script>

<style lang="scss">
  @import '~@/vdora-style/src/index.scss';

  .box {
    border: 1px solid #42b983;
  }
</style>
