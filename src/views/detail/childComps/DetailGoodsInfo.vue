<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goodsInfo">
    <div class="infoDesc clearFix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="infoKey">{{detailInfo.detailImage[0].key}}</div>
    <div class="infoList">
      <img v-for="(item,index) in detailInfo.detailImage[0].list"
           :key="index"
           :src="item"
           @load="imgLoad"
           width="100%"
           alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    data(){
      return {
        counter:0,
        imagesLength:0
      }
    },
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        if(++this.counter === this.imagesLength){
          this.$emit('imageLoad')
        }
      }
    },
    watch:{
      detailInfo(){
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goodsInfo{
    border-bottom: 6px solid #f6f6f6;
  }
</style>