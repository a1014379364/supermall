<template>
  <div id="app">
    <!--中间内容-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!--底部导航-->
    <MainTabBar class="mainTabBar"></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

  export default {
    name:'App',
    data(){
      return{
      }
    },
    components:{
      MainTabBar
    }
  }
</script>

<style>
  @import "./assets/base.css";

  #app{
    position: relative;
  }
</style>
