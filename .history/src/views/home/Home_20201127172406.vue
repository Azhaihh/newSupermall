<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
// 发送
import {getHomeMultiData} from '../../network/home'     

export default {
    name:"Home",
    components: {
        NavBar
    },
    created(){
        // 用于组件一旦创建完成就发送请求
        // 1.请求多个数据: 调用 getHomeMultiData()，拿到数据
        getHomeMultiData().then()
    }
}
</script>

<style>
.home-nav{
    background-color: var(--color-tint);   /*css文件里定义的 */
    color: #fff;
}
</style>