<template>
    <div class="nav-bar">
        <!-- 外包div用于布局 -->
        <div class="left"><slot></slot></div>     
        <div class="center"><slot></slot></div>     
        <div class="right"><slot></slot></div> 
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
   
</style>