<template>
  <a href="javascript:;" class="weui-btn"
  :class="['weui-btn_' + (plain ? 'plain-' : '') + type, {'weui-btn_mini': mini, 'weui-btn_disabled': disabled && !plain, 'weui-btn_plain-disabled': disabled && plain, 'weui-btn_loading': loading}]"><i class="weui-loading" v-if="loading"></i><slot></slot></a>
</template>

<script>
export default {
  name: 'button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/weui.scss';
</style>
