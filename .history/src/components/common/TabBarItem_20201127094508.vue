<template>
    <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg">
         首页
        </div>
</template>

<script>
    export default {
        name:"TabBarItem"
    }
</script>

<style scoped>
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