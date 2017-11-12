<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page__title">{{ title }}</h1>
      <p class="page__desc">{{ desc }}</p>
    </div>
    <div class="page__bd page__bd_spacing">
      <slot></slot>
    </div>
    <div class="page__ft">
      <!-- <a href="javascript:home()"><img src="./images/icon_footer_link.png" /></a> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo-page',
    props: {
      title: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      }
    },
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .page {
      // position: absolute;
      // top: 0;
      // right: 0;
      // bottom: 0;
      // left: 0;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      // opacity: 0;
      z-index: 1; // fix 滑动几次后可滚动区域会卡住的问题
      // &.js_show{
      //     opacity: 1;
      // }
  }

  .page__hd {
      padding: 40px;
  }

  .page__bd {
  }

  .page__bd_spacing {
      padding: 0 15px;
  }

  .page__ft{
      padding-top: 40px;
      padding-bottom: 10px;
      text-align: center;
      img{
          height: 19px;
      }
      &.j_bottom{
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
      }
  }

  .page__title {
      text-align: left;
      font-size: 20px;
      font-weight: 400;
  }

  .page__desc {
      margin-top: 5px;
      color: #888888;
      text-align: left;
      font-size: 14px;
  }
</style>
