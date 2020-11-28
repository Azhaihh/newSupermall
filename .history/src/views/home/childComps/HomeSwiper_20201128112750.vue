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


export default {
    name: "HomeSwiper",
    components: {

    }
}
</script>

<style scoped>

</style>