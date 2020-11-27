<template>
    <div class="tab-bar-item">
        <!-- <slot name="item-icon"></slot>
        <slot name="item-text"></slot> -->

        <!-- 最好不要写死，，而是动态展示 -->
        <img src="../../assets/img/tabbar/home.svg">
        <div>首页</div>
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
        font-size: 14;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-a
    }
</style>