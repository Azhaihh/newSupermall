<template>
  <div id="app">
   
  </div>
</template>

<script>
import TabBar from './components/common/TabBar.vue'

  export default {
    name: 'App',
    components:TabBar
  }
</script>

<style>
/* 注意style里引用资源的格式：@import ... */
  /* @import "./assets/css/base.css" */
  /* 由于vue.config中配置了别名，，因此这里也可以写如下形式 */
  @import "assets/css/base.css"      
</style>
