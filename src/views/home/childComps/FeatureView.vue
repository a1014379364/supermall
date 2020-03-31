<template>
  <div class="featureView">
    <div class="text">本周流行</div>
    <a href="https://act.mogujie.com/zzlx67">
      <img src="@/assets/img/home/recommend_bg.jpg" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView"
  }
</script>

<style scoped>
  .featureView .text{
    text-align: center;
    font-size: 16px;
    color: #555555;
    line-height: 48px;
  }

  .featureView img{
    width: 100%;
  }
</style>