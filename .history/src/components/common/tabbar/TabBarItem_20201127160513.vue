<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- 图标 -->
        <!-- zz -->
        <div v-if="!isActive"><slot name="item-icon"></slot> </div>
        <div v-else><slot name="item-icon-active"></slot></div>
         <!--文本// 动态绑定样式    -->
         <div :style=" activeStyle"><slot name="item-text"></slot></div>

        <!-- 最好不要写死，，而是动态展示 -->
        <!-- <img src="../../assets/img/tabbar/home.svg">
        <div>首页</div> -->
    </div>
</template>

<script>
    export default {
        name:"TabBarItem",
        props:{
            path: String,    //以字符串的形式接收App.vue传来的path
            activeColor: {
                type: String,
                default:"red"
            }
        },
        // data(){
        //     return{
        //         isActive:true,
        //     }
        // },
        computed:{
            isActive(){
                // 判断当前活跃路由的路径是否包含所接收的App.vue传来的path
                // indexOf()返回-1意味着不包含
                return this.$route.path.indexOf(this.path) !== -1
            },

            // 动态绑定样式
            activeStyle(){
                return this.isActive ? {color:this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
                // this.$router.push()
                this.$router.replace(this.path)
            }
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