<template>
  <div class="container">
    <h2>demo</h2>

    <div>
      <h3>{{ text }}</h3>
      <p>{{ list }}</p>
      <button @click="clickHandler">点击</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: '我是 Demo组件'
      },
      list: {
        type: Array,
        default: function () {
          return [1, 2, 3]
        }
      }
    },
    methods: {
      clickHandler (event) {
        console.log('on-click for Demo...')
        this.$emit('on-click', event)
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
