<template>
  <div class="detailSwiper">
    <el-carousel height="258px" direction="vertical" class="swiper-item">
      <el-carousel-item v-for="item in topImages">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "DetailSwiper",
    data(){
      return {
        isLoad : false
      }
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-item{
    overflow: hidden;
  }
</style>