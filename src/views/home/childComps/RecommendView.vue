<template>
  <div class="recommends">
    <div class="recommends-item"  v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" height="70px">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommends{
    display: flex;
    margin-top: 8px;
  }

  .recommends > .recommends-item{
    display: inline-block;
    flex: 1;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommends > .recommends-item img{
    margin-bottom: 4px;
  }

</style>