<template>
  <div class="cartList">
    <CartListItem v-for="(item,index) in cartList" :product="item" :key="index"></CartListItem>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";

  import { mapGetters } from 'vuex'

  export default {
    name: "CartList",
    components:{
      CartListItem
    },
    computed:{
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>

</style>