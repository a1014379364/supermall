<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goodsItem{
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goodsItem img{
    width: 100%;
    border-radius: 5px;
  }

  .goodsInfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goodsInfo .price{
    color:rgb(238,177,116);
    margin-right: 20px;
  }

  .goodsInfo .collect{
    position: relative;
  }

  .goodsInfo .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/shoucang.svg") 0 0/14px 14px;
    /*vertical-align: middle;*/
  }
</style>