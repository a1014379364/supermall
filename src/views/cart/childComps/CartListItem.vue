<template>
  <div class="cartListItem">
    <div class="item-selector">
      <CheckButton
                   :value="product.checked"
                   @btnClick="checkBtnClick">
      </CheckButton>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  export default {
    name: "CartListItem",
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckButton
    },
    methods:{
      checkBtnClick(isActive){
        // console.log("checkBtnClick");
        this.product.checked = isActive
      }
    }
  }
</script>

<style scoped>
  .cartListItem{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector{
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title,.item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img{
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
    width: 85%;
  }

  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .item-info .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom > div{
    display: inline-block;
  }

  .info-bottom .item-price{
    color: rgb(238,177,116);
  }

  .info-bottom .right{
    float: right;
    margin-right: 10px;
  }
</style>