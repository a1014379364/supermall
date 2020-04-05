<template>
  <div class="home">
    <NavBar class="home-nav">
      <h2 slot="navBar-middle">购物街</h2>
    </NavBar>
    <TabControl @getType="getType"
                class="tabControl"
                v-show="isTabFixed"
                :titles="['流行','新款','精选']"
                ref="fixedTabControl"></TabControl>
    <Scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            :probeType="3"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <HomeCarousel :banners="banners" @swiperImageLoad.once="swiperImageLoad"></HomeCarousel>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl @getType="getType"
                  :titles="['流行','新款','精选']"
                  ref="tabControl"></TabControl>
      <GoodList :goods="showGoods"></GoodList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
  import HomeCarousel from "./childComps/HomeCarousel";
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/tabcontrol/TabControl";
  import GoodList from "@/components/content/goods/GoodList";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from  "@/network/home.js"
  // import {debounce} from "@/common/utils.js"
  import {itemListenerMixin} from "@/common/mixin";

  export default {
    name: 'Home',
    mixins:[itemListenerMixin],
    data(){
      return {
        banners: [],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodListType:'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed:false,
        saveY:0,
        // itemImgListener:null
      }
    },
    components: {
      NavBar,
      HomeCarousel,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    created() {//生命周期函数，组件创建的时候执行
      //1.请求多个数据
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
      // const  refresh = debounce(this.$refs.scroll.refresh,500)
      // //监听image加载事件
      // this.itemImgListener = () =>{
      //   refresh()
      // }
      // this.$bus.$on('itemImageLoad',this.itemImgListener)
    },
    methods:{
      /*
      * 事件监听的方法
      * */
      getType(index){
        switch (index) {
          case 0:this.goodListType = 'pop';
            break
          case 1:this.goodListType = 'new';
            break
          case 2:this.goodListType = 'sell';
        }

        //让两个tab的活跃状态同步
        this.$refs.fixedTabControl.activeIndex = index
        this.$refs.tabControl.activeIndex = index
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
        // console.log(position);
        this.isShowBackTop = (-position.y) > 1000

        //控制tabControl显示
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.goodListType)
      },
      swiperImageLoad(){
        //获取tabControl的offsetTop
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        // console.log(this.$refs.tabControl.$el.offsetTop);
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

          this.$refs.scroll.finishPullUp()
        })
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.goodListType].list;
      }
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getY()

      // this.$bus.$off('itemImageLoad',this.itemImgListener)
    }
  }
</script>


<style scoped>
  .home{
    height: 100vh;
    position: relative;
  }

  .home-nav{
    box-shadow: 0 1px 1px rgba(238,177,116,.1);
    background-color: rgb(238,177,116);
    /*z-index: 9;*/
  }
  .home-nav h2{
    color: #fff;
    text-align: center;
  }

  .tabControl{
    position: relative;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position: absolute;
    /*padding-bottom: 49px;*/
    top: 44px;
    bottom: 49px;
  }

  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
</style>
