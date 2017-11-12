<template>
  <v-demo-page class="page-layout" title="Layout" desc="布局">
    <h3>水平</h3>
    <div class="l-h box">
      <div class="block w_50 h_50">1</div>
      <div class="block w_50 h_50">2</div>
      <div class="block w_50 h_50">3</div>
    </div>

    <h3>垂直</h3>
    <div class="l-v box">
      <div class="block h_50">1</div>
      <div class="block h_50">2</div>
      <div class="block h_50">3</div>
    </div>

    <h3>平分</h3>
    <div class="l-h_a box">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
    </div>

    <div class="l-h_a box">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
      <div class="block">4</div>
      <div class="block">5</div>
      <div class="block">6</div>
      <div class="block">7</div>
    </div>

    <h3>主轴为水平方向，起点在左端</h3>
    <div class="l-h box">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
    </div>

    <h3>主轴为水平方向，起点在右端</h3>
    <div class="l-h_r box">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
    </div>

    <h3>1行2列两边对齐</h3>
    <div class="l-h_lr box">
      <div class="block">1</div>
      <div class="block">2</div>
    </div>

    <h3>左边占满</h3>
    <div class="l-h box">
      <div class="l_auto block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
    </div>

    <h3>右边占满</h3>
    <div class="l-h box">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="l_auto block">3</div>
    </div>

    <h3>中间占满</h3>
    <div class="l-h box">
      <div class="block">1</div>
      <div class="l_auto block">2</div>
      <div class="block">3</div>
    </div>

    <h3>嵌套</h3>
    <div class="l-h box">
      <div class="l-cc base-block">1</div>
      <div class="l-h l_auto box">
        <div class="l_auto box">
          <div class="l-h box">
            <div class="block">3</div>
            <div class="l_auto block">4</div>
            <div class="block">5</div>
          </div>
        </div>
        <div class="l-cc base-block">2</div>
      </div>
    </div>

    <h3>垂直居中</h3>
    <div class="l-v_c box h-200">
      <div>垂直居中</div>
    </div>

    <h3>水平居中</h3>
    <div class="l-h_c box h-200">
      <div>水平居中</div>
    </div>

    <h3>垂直水平居中</h3>
    <div class="l-vh_c box h-200">
      <div>垂直水平居中</div>
    </div>

    <p>
      布局相关 class 要写在 class 最前面
    </p>
  </v-demo-page>
</template>

<script>
  import VDemoPage from '../components/DemoPage'

  export default {
    name: 'layout-view',
    components: {
      VDemoPage
    }
  }
</script>

<style lang="scss" scoped>
  .page-layout {
    .container {
      padding: 15px;
    }
    h2 {
      text-align: center;
    }

    h3 {
      margin-top: 36px;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #333;
    }

    .h-200 {
      height: 200px;
    }

    .box {
      // height: 100px;
      padding: 10px;
      border: 1px solid #42b983;
      background: #f7f7f7;
    }

    .h_50 {
      height: 50px;
    }

    .w_50 {
      width: 50px;
    }

    .base-block {
      border: 1px solid #42b983;
      width: 50px;
    }

    .block {
      width: 50px;
      height: 50px;
      // height: 100%;
      line-height: 50px;
      text-align: center;
      border: 1px solid #42b983;
    }
  }
</style>
