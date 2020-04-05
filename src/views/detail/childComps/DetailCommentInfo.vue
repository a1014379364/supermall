<template>
  <div class="commentInfo" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="infoUser">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="infoDetail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
<!--      <div class="info-imgs">-->
<!--        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
  let moment = require("moment");

  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        return moment(value).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style scoped>
  .commentInfo{
    border-bottom: 6px solid #f6f6f6;
  }

  .info-header{
    padding: 12px 0;
    margin: 0 12px;
    border-bottom: 1px solid #ccc;
  }

  .header-title{
    display: inline-block;
  }

  .header-more{
    float: right;
  }

  .infoUser{
    padding: 12px;
  }

  .infoUser img{
    height: 38px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .infoUser span{
    padding-left: 8px;
  }

  .infoDetail{
    padding: 0 12px;
  }

  .infoDetail .info-other{
    padding: 8px 0 12px;
    color: #ccc;
  }

  .info-other .date{
    padding-right: 8px;
  }
</style>