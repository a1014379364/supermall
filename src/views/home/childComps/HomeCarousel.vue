<template>
  <el-carousel height="185px" style="margin-top: 44px">
    <el-carousel-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" height="185px" width="100%">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: 'HomeCarousel',
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>