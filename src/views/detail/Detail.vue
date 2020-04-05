<template>
  <div class="detail">
    <DetailNavBar :iid="iid" @navClick="navClick"></DetailNavBar>
    <Scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll">
      <DetailSwiper :topImages="topImages" class="swiper"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="refresh"></DetailGoodsInfo>
      <DetailParamInfo :paramsInfo="paramsInfo" ref="params"></DetailParamInfo>
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
      <GoodList :goods="recommends" ref="recommends"></GoodList>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";

  import Scroll from "@/components/common/scroll/Scroll";
  import GoodList from "@/components/content/goods/GoodList";

  import {getDetail,getRecommend,Goods,Shop,GoodsParams} from "@/network/detail";

  import {debounce} from "@/common/utils.js"
  import {itemListenerMixin} from "@/common/mixin";

  export default {
    name: "Detail",
    mixins:[itemListenerMixin],
    data(){
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramsInfo:{},
        commentInfo:{},
        recommends:[],
        // itemImgListener:null,
        themeTopYs:[],
        getThemeTopY:null
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,

      Scroll,
      GoodList
    },
    created() {
      //保存传入iid
      this.iid = this.$route.params.iid

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res);
        const data= res.result;
        //1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.goods);

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)

        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }

        //获取所有分类信息的位置,会等dom渲染完再执行（但不包含图片加载完成）
        // this.$nextTick(() => {
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // })
      })

      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // console.log(this.themeTopYs);
      })
    },
    mounted(){
      // const  refresh = debounce(this.$refs.scroll.refresh,500)
      // //监听image加载事件
      // this.itemImgListener = () =>{
      //   refresh()
      // }
      // this.$bus.$on('itemImageLoad',this.itemImgListener)
    },
    deactivated(){
      // this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods: {
      refresh(){
        this.$refs.scroll.refresh()

        this.getThemeTopY()
      },
      navClick(index){
        // console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
      },
      contentScroll(position){
        const positionY = -position.y
      }
    }
  }
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    z-index: 10;
    background-color: #fff;
    bottom: 49px;
  }
</style>