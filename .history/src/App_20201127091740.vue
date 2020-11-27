<template>
  <div id="app">
    <tab-bar>
       <div class="tab-bar-item">
         <img src="../../assets/img/tabbar/home.svg">
         首页
     </div>

     <div class="tab-bar-item">
         <img src="../../assets/img/tabbar/category.svg">
         分类
     </div>

     <div class="tab-bar-item">
         <img src="../../assets/img/tabbar/shopcart.svg">
         购物车
     </div>
     <img src="../../assets/img/tabbar/profile.svg">
     <div class="tab-bar-item">
         我的
     </div>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/TabBar.vue'

  export default {
    name: 'App',
    components:{
      TabBar
      }
  }
</script>

<style>
/* 注意style里引用资源的格式：@import ... */
  /* @import "./assets/css/base.css" */
  /* 由于vue.config中配置了别名，，因此这里也可以写如下形式 */
  @import "assets/css/base.css"      

  
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24p;

    }
</style>
