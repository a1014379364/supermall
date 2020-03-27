<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tabBar{
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
    background-color: #f6f6f6;
  }
</style>