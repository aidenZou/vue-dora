<template>
  <v-popup :visible="isVisible" :transition-name="transitionName">
    <div class="weui-dialog">
      <div class="weui-dialog__hd"><strong class="weui-dialog__title"><slot name="title">{{ title }}</slot></strong></div>
      <div class="weui-dialog__bd"><slot>{{ content }}</slot></div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-if="isConfirm" @click="cancelHandler">{{ cancelBtn }}</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="confirmHandler">{{ confirmBtn }}</a>
      </div>
    </div>
  </v-popup>
</template>

<script>
  import { modalVisible } from 'vdora-mixin'
  import VPopup from 'vdora-container-popup/src/popup'

  export default {
    name: 'dialog',
    mixins: [modalVisible],
    props: {
      type: {
        type: String,
        default: 'alert' // alert:提示框; confirm:确认框
      },
      title: {
        type: String,
        default: '' // 弹窗标题
      },
      content: {
        type: String,
        default: '' // 弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
      },
      confirmBtn: {
        type: String,
        default: '确定' // 主操作
      },
      cancelBtn: {
        type: String,
        default: '取消' // 辅助操作
      },
      transitionName: {
        type: String,
        default: 'zoomInOut'
      }
    },
    components: {
      VPopup
    },
    computed: {
      isConfirm () {
        return this.type === 'confirm'
      }
    },
    methods: {
      confirmHandler (e) {
        this.$emit('confirm', e)
        // 销毁实例
        this.remove()
      },
      cancelHandler (e) {
        this.$emit('cancel', e)
        this.remove()
      }
    }
  }
</script>

<style lang="scss" scoped>
  // color
  $weuiColorPrimary: #1AAD19;
  $weuiColorWarn: #E64340;

  // link
  $weuiLinkColorDefault: #586C94;

  // background
  $weuiBgColorDefault: #EFEFF4;
  $weuiBgColorActive: #ECECEC;

  // line
  $weuiLineColorLight: #E5E5E5;
  $weuiLineColorDark: #BCBAB6;

  // text
  $weuiTextColorTitle: #000000;
  $weuiTextColorTips: #B2B2B2;
  $weuiTextColorWarn: $weuiColorWarn;
  $weuiTextColorGray: #999999;

  $weuiDialogBackgroundColor: #FFFFFF;
  $weuiDialogLineColor: #D5D5D6;
  $weuiDialogLinkColor: #3CC51F;
  $weuiDialogLinkActiveBc: #EEEEEE;
  $weuiDialogGapWidth: 1.6em;

  @mixin setTapColor($c:rgba(0,0,0,0)) {
    -webkit-tap-highlight-color: $c;
  }

  @mixin setTopLine($c: #C7C7C7) {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid $c;
    color: $c;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }

  @mixin setBottomLine($c: #C7C7C7) {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid $c;
      color: $c;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
  }

  @mixin setLeftLine($c: #C7C7C7) {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-left: 1px solid $c;
      color: $c;
      transform-origin: 0 0;
      transform: scaleX(0.5);
  }

  @mixin setRightLine($c: #C7C7C7) {
      content: " ";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-right: 1px solid $c;
      color: $c;
      transform-origin: 100% 0;
      transform: scaleX(0.5);
  }

  .weui-dialog {
      // position: fixed;
      z-index: 5000;
      // width: 80%;
      max-width: 300px;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);

      background-color: $weuiDialogBackgroundColor;
      text-align: center;
      border-radius: 3px;
      overflow: hidden;
  }
  .weui-dialog__hd {
      padding: 1.3em $weuiDialogGapWidth .5em;
  }
  .weui-dialog__title {
      font-weight: 400;
      font-size: 18px;
  }
  .weui-dialog__bd {
      padding: 0 $weuiDialogGapWidth .8em;
      min-height: 40px;
      font-size: 15px;
      line-height: 1.3;
      word-wrap: break-word;
      word-break: break-all;
      color: $weuiTextColorGray;
      &:first-child{
          padding:2.7em 20px 1.7em;
          color:#353535;
      }
  }
  .weui-dialog__ft {
      position: relative;
      line-height: 48px;
      font-size: 18px;
      display: flex;
      &:after {
          content: " ";
          @include setTopLine($weuiDialogLineColor);
      }
  }
  .weui-dialog__btn {
      display: block;
      flex: 1;
      color: $weuiDialogLinkColor;
      text-decoration: none;
      @include setTapColor();
      &:active {
          background-color: $weuiDialogLinkActiveBc;
      }

      position: relative;
      &:after {
          content: " ";
          @include setLeftLine($weuiDialogLineColor);
      }
      &:first-child {
          &:after {
              display: none;
          }
      }
  }
  .weui-dialog__btn_default {
      color: #353535;
  }
  .weui-dialog__btn_primary {
      color: #0BB20C;
  }

  .weui-skin_android{
      .weui-dialog {
          text-align: left;
          box-shadow: 0 6px 30px 0 rgba(0, 0, 0, .1);
      }
      .weui-dialog__title{
          font-size: 21px;
      }
      .weui-dialog__hd{
          text-align: left;
      }
      .weui-dialog__bd{
          color:$weuiTextColorGray;
          padding:.25em $weuiDialogGapWidth 2em;
          font-size: 17px;
          text-align: left;
          &:first-child{
              padding:1.6em $weuiDialogGapWidth 2em;
              color:#353535;
          }
      }
      .weui-dialog__ft{
          display: block;
          text-align: right;
          line-height: 42px;
          font-size: 16px;
          padding:0 $weuiDialogGapWidth .7em;
          &:after{
              display: none;
          }
      }
      .weui-dialog__btn{
          display: inline-block;
          vertical-align: top;
          padding:0 .8em;
          &:after{
              display: none;
          }

          &:active{
              background-color: rgba(0,0,0,.06);
          }
          &:visited{
              background-color: rgba(0,0,0,.06);
          }
          &:last-child{
              margin-right: -.8em;
          }
      }
      .weui-dialog__btn_default {
          color: #808080;
      }
  }

  @media screen and (min-width: 1024px) {
      .weui-dialog {
          width: 35%;
      }
  }
</style>
