<template>
  <div id="app">
    <!--中间内容-->
    <router-view></router-view>
    <!--底部导航-->
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from "@/components/content/MainTabBar";

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
</style>
