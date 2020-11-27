<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- 图标 -->
        <div v-if="!isActive"><slot name="item-icon"></slot> </div>
        <div v-else><slot name="item-icon-active"></slot></div>
         <!--文本  -->
         <div :class="{active: isActive}"><slot name="item-text"></slot></div>

        <!-- 最好不要写死，，而是动态展示 -->
        <!-- <img src="../../assets/img/tabbar/home.svg">
        <div>首页</div> -->
    </div>
</template>

<script>
    export default {
        name:"TabBarItem",
        data(){
            return{
                isActive:true
            }
        },
        methods:{
            itemClick(){}
        }
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
        vertical-align:middle;
        margin-bottom: 2px;
    }

    .active {
        color: salmon;
    }
</style>