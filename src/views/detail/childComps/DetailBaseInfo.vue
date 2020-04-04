<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount" :style="{backgroundColor:goods.discountBgColor}">
        {{ goods.discount }}
      </span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length-1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{ goods.services[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    border-bottom: 6px solid #f6f6f6;
  }

  .info-title{
    font-size: 16px;
    text-indent: 5px;
  }

  .info-price{
    padding: 12px 0 18px;
  }
  .info-price span{
    padding-right: 5px;
  }

  .n-price{
    color: rgb(238,177,116);
    font-size: 22px;
  }

  .o-price{
    color: #ccc;
    text-decoration: line-through;
  }

  .discount{
    color: #fff;
    border-radius: 12px;
    font-size: 14px;
    text-align: center;
  }

  .info-other{
    display: flex;
    /*padding-bottom: 10px;*/
  }
  .info-other span{
    color: #b1b1b1;
    /*padding: 0 20px 0 8px;*/
    flex: 1;
    padding: 8px 0;
    margin: 0 8px;
    border-bottom: 1px solid #f6f6f6;
  }

  .info-service{
    font-size: 14px;
    /*color: #b1b1b1;*/
    padding: 20px 0;
  }

  .info-service > span {
    padding: 0 16px 0 8px;
  }

  .info-service img{
    height: 12px;
  }
</style>