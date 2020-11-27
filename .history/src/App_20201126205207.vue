<template>
  <div id="app">
   <div id="tab-bar">
     <div class="tab-bar-item">首页</div>
   </div>
  </div>
</template>

<script>

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
