<template>
  <div class="detail">
    <DetailNavBar :iid="iid" ></DetailNavBar>
    <Scroll class="content"
            ref="scroll">
      <DetailSwiper :topImages="topImages" class="swiper"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="refresh"></DetailGoodsInfo>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

  import Scroll from "@/components/common/scroll/Scroll";

  import {getDetail,Goods,Shop,GoodsParams} from "@/network/detail";

  export default {
    name: "Detail",
    data(){
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramsInfo:{}
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      Scroll
    },
    created() {
      //保存传入iid
      this.iid = this.$route.params.iid

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data= res.result;
        //1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.goods);

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
      })
    },
    methods: {
      refresh(){
        this.$refs.scroll.refresh()
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