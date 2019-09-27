<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
  import Main from 'views/main.vue'
  export default {
    name: 'App',
    components :{
      Main
    }
  }
</script>

<style scoped>
  @import 'assets/common.css';
</style>
