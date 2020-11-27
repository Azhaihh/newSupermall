<template>
    <div class="nav-bar">
        <!-- 外包div用于布局 -->
        <div class="left"><slot name="left"></slot></div>     
        <div class="center"><slot name="center"></slot></div>     
        <div class="right"><slot name="right"></slot></div> 
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
   .nav-bar {
       display: flex;
       line-height: 44px;

   }
   .
</style>