<template>
  <div id="app">
    <tab-bar>
       <tab-bar-item>
         <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
         <div slot="item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item>
         <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
         <div slot="item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item>
         <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
         <div slot="item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item>
         <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
         <div slot="item-text">首页</div>
       </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/TabBar.vue'
import TabBarItem from './components/common/TabBarItem.vue'

  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
      }
  }
</script>

<style>
/* 注意style里引用资源的格式：@import ... */
  /* @import "./assets/css/base.css" */
  /* 由于vue.config中配置了别名，，因此这里也可以写如下形式 */
  @import "assets/css/base.css"      
</style>
