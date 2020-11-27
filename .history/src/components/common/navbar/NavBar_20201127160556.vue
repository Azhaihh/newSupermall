<template>
    <div class="nav-bar">
        <!-- 外包div用于布局 -->
        <div><slot></slot></div>     
        <slot></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
   
</style>