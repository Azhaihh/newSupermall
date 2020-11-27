<template>
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
</template>

<script>
    export default {
        name:"TabBarItem"
    }
</script>

<style so>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;

    }
</style>