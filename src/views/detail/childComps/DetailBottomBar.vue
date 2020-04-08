<template>
  <div class="bottomBar">
    <div class="barItem bar-left">
      <div>
        <i class="el-icon-s-custom"></i>
        <div class="text">客服</div>
      </div>
      <div>
        <i class="el-icon-s-shop"></i>
        <div class="text">店铺</div>
      </div>
      <div>
        <i class="el-icon-star-off"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="barItem bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addToCart(){
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .bottomBar{
    height: 49px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    display: flex;
    text-align: center;
  }

  .barItem{
    flex: 1;
    display: flex;
  }

  .barItem > div {
    flex: 1;
  }

  .barItem > div i {
    margin-top: 8px;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }

  .bar-right .cart{
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy{
    background-color: #f69;
  }

  /*.sport-ball {*/
  /*  position: absolute;*/
  /*  left: 225px;*/
  /*  bottom: 20px;*/
  /*}*/
</style>