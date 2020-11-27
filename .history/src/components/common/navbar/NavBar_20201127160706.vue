<template>
    <div class="nav-bar">
        <!-- 外包div用于布局 -->
        <div class="left"><slot name="left"></slot></div>     
        <div class="center"><slot name="center"></slot></div>     
        <div class="right"><slot name></slot></div> 
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
   
</style>