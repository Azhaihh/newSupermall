import Vue from "vue"
import VueRouter from "vue-router"

// import home from "../views/home/Home.vue"       应该用懒加载方式
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 安装插件
Vue.use(VueRouter)

// 创建路由对象
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    }
]
const router = new VueRouter({
    routes
})

// 导出
export default router