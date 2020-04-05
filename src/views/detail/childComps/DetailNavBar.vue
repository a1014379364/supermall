<template>
  <NavBar class="detail-nav">
    <div slot="navBar-left" class="back" @click="back">
      <img src="~@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="navBar-middle" class="title">
      <div v-for="(item,index) in titles"
           class="title-item"
           @click="itemClick(index)"
           :class="{active:activeIndex === index}">
        {{ item }}
      </div>
    </div>
  </NavBar>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        activeIndex:0
      }
    },
    props:{
      iid:{
        type:String
      }
    },
    components:{
      NavBar
    },
    methods:{
      itemClick(index){
        this.activeIndex = index
        this.$emit('navClick',index)
      },
      back(){
        this.$router.back()
      }
    }

  }
</script>

<style scoped>
  .detail-nav{
    border-bottom: 1px solid #f6f6f6;
  }

  .title{
    display: flex;
    font-size: 14px;
    text-align: right;
  }

  .title .title-item{
    flex: 1;
  }

  .back img{
    height: 24px;
    margin: 9px 0 0 26px;
  }

  .active{
    color: rgb(238,177,116);
  }
</style>