<template>
  <div class="checkButton" :class="{checked:value}" @click="btnClick">
    <img src="~@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    data(){
      return {
        isActive:this.value
      }
    },
    props:{
      value:{
        type:Boolean,
        default:true
      }
    },
    methods:{
      btnClick(){
        this.isActive = !this.isActive
        this.$emit('btnClick',this.isActive)
      }
    }
  }
</script>

<style scoped>
  .checkButton{
    border-radius: 50%;
    border: 1px solid #ccc;
  }

  .checked{
    background-color: rgb(238,177,116);
    border: none;
  }

  .checkButton img{
    width: 100%;
  }
</style>