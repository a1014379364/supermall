<template>
  <div class="navBar">
    <div class="navBar-left"><slot name="navBar-left"></slot></div>
    <div class="navBar-middle"><slot name="navBar-middle"></slot></div>
    <div class="navBar-right"><slot name="navBar-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navBar{
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;

    line-height: 44px;
  }

  .navBar > .navBar-left,
  .navBar > .navBar-right{
    width: 12%;
    /*background-color: red;*/
  }

  .navBar > .navBar-middle{
    flex: 1;
  }
</style>