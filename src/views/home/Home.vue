<template>
  <div class="home">
    <NavBar class="home-nav">
      <h2 slot="navBar-middle" style="color: #fff;text-align: center">购物街</h2>
    </NavBar>
    <Scroll class="content">
      <HomeCarousel :banners="banners"></HomeCarousel>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl @getType="getType" class="tabControl" :titles="['流行','新款','精选']"></TabControl>
      <GoodList :goods="showGoods"></GoodList>
    </Scroll>
  </div>
</template>

<script>
  import HomeCarousel from "./childComps/HomeCarousel";
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/common/tabcontrol/TabControl";
  import GoodList from "@/components/content/goods/GoodList";
  import Scroll from "@/components/common/scroll/Scroll";

  import {getHomeMultidata,getHomeGoods} from  "@/network/home.js"

  export default {
    name: 'Home',
    data(){
      return {
        banners: [],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodListType:'pop'
      }
    },
    components: {
      NavBar,
      HomeCarousel,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll
    },
    created() {//生命周期函数，组件创建的时候执行
      //1.请求多个数据
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      /*
      * 事件监听的方法
      * */
      getType(type){
        this.goodListType = type;
      },

      /*
      * 网络监听的方法
      * */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)//可变形参?
          this.goods[type].page += 1
          // console.log(res);
        })
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.goodListType].list;
      }
    }
  }
</script>


<style scoped>
  .home{
    height: 100vh;
  }

  .home-nav{
    box-shadow: 0 1px 1px rgba(238,177,116,.1);
    background-color: rgb(238,177,116);
    /*z-index: 999;*/
  }

  /*.tabControl{*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  !*z-index: 990;*!*/
  /*}*/

  .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }
</style>
