<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="rgb(238,177,116)">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="首页">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="首页">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="rgb(238,177,116)">
      <img slot="item-icon" src="@/assets/img/tabbar/fenlei.svg" alt="分类">
      <img slot="item-icon-active" src="@/assets/img/tabbar/fenlei_active.svg" alt="分类">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="rgb(238,177,116)">
      <img slot="item-icon" src="@/assets/img/tabbar/gouwuche.svg" alt="购物车">
      <img slot="item-icon-active" src="@/assets/img/tabbar/gouwuche_active.svg" alt="购物车">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="rgb(238,177,116)">
      <img slot="item-icon" src="@/assets/img/tabbar/wode.svg" alt="我的">
      <img slot="item-icon-active" src="@/assets/img/tabbar/wode_active.svg" alt="我的">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from "@/components/common/tabbar/TabBarItem";

  //加载数据
  // import tabBarDate from '@/Date/tabBarDate.js'

  export default {
    name:'MainTabBar',
    data(){
      return{
        // tabBarDate
      }
    },
    components:{
      TabBar,TabBarItem
    }
  }
</script>

<style scoped>

</style>