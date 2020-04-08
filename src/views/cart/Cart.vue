<template>
  <div class="cart">
    <NavBar class="nav">
      <div slot="navBar-middle">购物车 ({{cartLength}})</div>
    </NavBar>
    <Scroll class="content" ref="scroll">
      <CartList></CartList>
    </Scroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";

  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components:{
      CartList,
      CartBottomBar,
      NavBar,
      Scroll
    },
    computed:{
      // cartLength() {
      //   // return this.$store.state.cartList.length
      //
      //   // return this.$store.getters.cartLength()//当需要多次使用这个长度的时候，
      //   // 可以在vuex的getters里面封装，但是这样并没有让代码减少多少。
      //
      //
      // }
      ...mapGetters(['cartLength'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
    position: relative;
  }

  .content{
    overflow: hidden;
    height: calc(100% - 44px - 49px - 44px);
    background-color: #fff;

  }

  .nav{
    text-align: center;
    background-color: rgb(238,177,116);
    color: #fff;
    font-size: 18px;
    line-height: 44px;
  }
</style>