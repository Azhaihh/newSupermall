<template>
    <div class="nav-bar">
        <!-- 外包div用于布局 -->
        <div class=""><slot></slot></div>     
        <div ><slot></slot></div>     
        <div ><slot></slot></div> 
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
   
</style>