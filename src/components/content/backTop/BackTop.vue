<template>
  <div class="backTop">
    <img src="~@/assets/img/common/top.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:'App',
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  .backTop{
    position: fixed;
    right: 8px;
    bottom: 59px;
    z-index: 10;
  }

  .backTop img{
    width: 43px;
    background: #fff;
    border-radius: 50%;
  }
</style>