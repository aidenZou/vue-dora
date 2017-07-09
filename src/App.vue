<template>
  <v-page class="div-class" :view="PAGE_VIEW">
    <v-demo></v-demo>
    <button @click="togglePosition">toggle Position {{ popupPosition }}</button>

    <button @click="show=true">点击展示用 popup包装过的组件</button>
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
  import pageComponent from '@/containers/page'
  import Layout from './components/Layout'
  import Demo from './components/Demo'
  import PopupDemo from './components/PopupDemo'

  export default {
    name: 'app',
    components: {
      'v-page': pageComponent,
      'v-layout': Layout,
      'v-demo': Demo,
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
  @import '~@/styles/index';
</style>
