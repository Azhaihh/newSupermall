<template>
    <!-- 轮播图 -->
        <swiper>
            <swiper-item v-for="item in banners">
                <!-- banners数据中有个属性是link -->
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
</template>

<script>
// 导入轮播图组件
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'

    export default {
        name: "HomeSwiper",
        props:{},
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>

</style>