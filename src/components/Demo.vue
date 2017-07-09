<template>
  <div class="container">
    <h2>demo</h2>

    <div>
      我是一个组件
      <p>{{ list }}</p>
      <button @click="clickHandler">点击</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: function () {
          return [1, 2, 3]
        }
      }
    },
    methods: {
      clickHandler () {
        console.log('click...')
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
