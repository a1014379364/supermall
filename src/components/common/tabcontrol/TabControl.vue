<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" :key="item"
         class="tabControl-item"
         :class="{active:activeIndex === index}"
         @click="isActive(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        activeIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      isActive(index){
        this.activeIndex = index;
        switch (index) {
          case 0:this.$emit('getType','pop')
            break
          case 1:this.$emit('getType','new')
            break
          case 2:this.$emit('getType','sell')
        }
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    display: flex;
    background-color: #fff;
  }

  .tabControl > .tabControl-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
  }

  .tabControl > .active span{
    color: rgb(238,177,116);
    border-bottom: 2px solid rgb(238,177,116);
    padding: 0 3px 3px 3px;
  }
</style>