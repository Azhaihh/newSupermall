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

   .left .right {
       width: 60px;
       background-color: red;
   }

   .center {
       flex: 1;        /*因为左边和右边的宽度已定，，若将剩余部分给中间块可以设置flex=1 */
       background-color:;
   }

</style>