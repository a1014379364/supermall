<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" :value="isSelectAll" @click.native="btnClick"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: {{totalPrice}}</span>
    <span class="buy-product">去计算({{cartCount}})</span>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    data(){
      return {
        cartList : this.$store.getters.cartList
      }
    },
    methods:{
      btnClick(){
        // console.log("!");
        if(this.isSelectAll){
          this.cartList.forEach(item => item.checked = false)
        }else{
          this.cartList.forEach(item => item.checked = true)
        }

        //会变化
        // this.cartList.forEach(item => item.checked = !this.isSelectAll)
      }
    },
    computed:{
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      cartCount(){
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
      },
      isSelectAll(){
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
        // let i = 0
        // const cartList = this.cartList
        // for(i in cartList){
        //   if(cartList[i].checked === false){
        //     return false
        //   }
        // }
        // if(i === cartList.length){
        //   return true
        // }
      }
    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    /*box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);*/
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    width: 20px;
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 12px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>