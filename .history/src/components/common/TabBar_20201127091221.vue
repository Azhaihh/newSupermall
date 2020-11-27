<template>
    <div id="tab-bar">
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
   </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -1px 1px rgba(100, 100 100, 0.2);
    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    .tab-bar-item img {
        width: ;
    }
</style>