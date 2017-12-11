<template>
  <div class="container">
    <h2>demo</h2>

    <div>
      <h3>{{ text }}</h3>
      <p>names：{{ getNames }}</p>
      <p>{{ list }}</p>
      <v-button type="warn" mini @click.native="clickHandler">点击</v-button>
    </div>
  </div>
</template>

<script>
  import vButton from '@/vdora-component-button'

  export default {
    name: 'demo',
    components: {
      vButton
    },
    props: {
      text: {
        type: String,
        default: '我是 Demo组件'
      },
      names: {
        type: Array,
        default () {
          return []
        }
      },
      list: {
        type: Array,
        default: function () {
          return [1, 2, 3]
        }
      }
    },
    computed: {
      getNames () {
        let names = this.names
        names.push('demo')
        return names.join('-')
      }
    },
    methods: {
      clickHandler (event) {
        console.log('click for Demo...')
        this.$emit('click', event)
      }
    }
  }
</script>

<style scoped lang="scss" scoped>
  .container {
    padding: 15px;
  }

  h2 {
    text-align: center;
  }
</style>
