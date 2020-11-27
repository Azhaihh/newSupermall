<template>
  <div id="app">
    <router-view></router-view>
    
    
  </div>
</template>

<script>
  import MainTabBar
  export default {
    name: 'App',
  
  }
</script>

<style>
/* 注意style里引用资源的格式：@import ... */
  /* @import "./assets/css/base.css" */
  /* 由于vue.config中配置了别名，，因此这里也可以写如下形式 */
  @import "assets/css/base.css"      
</style>
