<template>
  <div class="tabBar-item" @click="tabBarClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? { color: this.activeColor } : {}
      }
    },
    props:{
      path:String,
      activeColor:String
    },
    methods:{
      tabBarClick(){
        if(this.$route.path  === this.path){
          return ;
        }
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tabBar > .tabBar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    margin-bottom: 2px;

    /*position: absolute;*/
  }

  .tabBar > .tabBar-item img{
    width: 28px;
    height: 28px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>