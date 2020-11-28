<template>
    <div id="home">
        <!-- 导航栏 -->
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>

        <!-- 轮播图 -->
        <home-swiper ></home-swiper>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
// 导入轮播图组件
import HomeSwiper from './childComps/HomeSwiper'

// 导入自定义请求函数
import {getHomeMultiData} from '../../network/home'     

export default {
    name:"Home",
    components: {
        // 注册组件，，每次导入新的组件均需在此注册
        NavBar,
        HomeSwiper
    },
    data(){
        // 存储请求返回的数据
       return {
            banners: [],     //初始化，，轮播图数据
            recommend:[]    
       }
    },
    created(){
        // 用于组件一旦创建完成就发送请求
        // 1.请求多个数据: 调用 getHomeMultiData()，拿到数据
        getHomeMultiData().then(res => {
            this.banners = res.data.banner.list;
            this.recommend = res.data.recommend.list;
            // console.log(res)
        })
    }
}
</script>

<style>
.home-nav{
    background-color: var(--color-tint);   /*css文件里定义的 */
    color: #fff;
}
</style>