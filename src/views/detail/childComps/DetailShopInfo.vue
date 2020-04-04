<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shopMiddle">
      <div class="shopMiddle-item shopMiddle-left">
        <div class="infoSells">
          <div class="sellsCount">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sellsText">总销量</div>
        </div>
        <div class="infoGoods">
          <div class="goodsCount">
            {{shop.goodsCount}}
          </div>
          <div class="goodsText">全部宝贝</div>
        </div>
      </div>
      <div class="shopMiddle-item shopMiddle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopBottom">
      <a :href="shop.shopUrl" style="display: inline-block">
        <div class="enterShop">进店逛逛</div>
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter(count){
        if(count >= 1000){
          return (count / 10000).toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style scoped>
  .shopInfo{
    border-bottom: 6px solid #f6f6f6;
  }

  .shopTop img {
    height: 48px;
    border: 2px solid #f6f6f6;
    border-radius: 50%;
    vertical-align: middle;
    margin: 24px 12px;
  }
  .shopTop .title{
    font-size: 18px;
  }

  .shopMiddle{
    display: flex;
    /*position: relative;*/
  }

  .shopMiddle .shopMiddle-item{
    flex: 1;
  }

  .shopMiddle-left{
    margin: 24px 0;
    border-right: 2px solid #f6f6f6;
  }

  .infoSells,.infoGoods{
    font-size: 16px;
    text-align: center;
    display: inline-block;
    padding: 0 16px;

  }

  .infoSells .sellsCount,
  .infoGoods .goodsCount{
    padding-bottom: 8px;
  }

  .shopMiddle-right table{
    padding-left: 16px;
  }

  .shopMiddle-right table td{
    padding: 4px;
  }

  .score{
    color: rgb(106,150,52);
  }
  .score-better{
    color: rgb(252,105,85);
  }

  .better{
    background-color: rgb(106,150,52);
    color: #fff;
    border-radius: 8px;
  }
  .better-more{
    background-color: rgb(252,105,85);
    color: #fff;
    border-radius: 8px;
  }

  .shopBottom{
    text-align: center;
  }

  .shopBottom .enterShop{
    display: inline-block;
    padding: 8px 24px;
    margin: 24px 0;
    background-color: rgba(106,150,177,.3);
    border-radius: 10px;
  }
</style>