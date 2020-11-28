<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
// 导入自定义请求函数
import {getHomeMultiData} from '../../network/home'     

export default {
    name:"Home",
    components: {
        NavBar
    },
    data(){
        // 存储请求返回的数据
        result: null     //初始化
    },
    created(){
        // 用于组件一旦创建完成就发送请求
        // 1.请求多个数据: 调用 getHomeMultiData()，拿到数据
        getHomeMultiData().then(res => {
            this.result = 
            console.log(res)
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