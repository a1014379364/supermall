<template>
  <div class="paramsInfo" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table,index) in paramsInfo.sizes"
           class="infoSize"
           :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indeZ) in tr" :key="indeZ"
            :class="[{'key':indeZ === 0},{'value':indeZ !== 0}]">
          {{ td }}
        </td>
      </tr>
    </table>
    <table class="infoParam">
      <tr v-for="item in paramsInfo.info" :key="item.key">
        <td class="infoParam-key">{{ item.key }}</td>
        <td class="paramValue">{{ item.value }}</td>
      </tr>
    </table>
    <div class="infoImg" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramsInfo: {
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .paramsInfo{
    border-bottom: 6px solid #f6f6f6;
  }

  table > tr {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
  }

  .infoSize{
    width: 100%;
    padding: 12px 8px;
  }

  .infoSize td{
    display: inline-block;
    width: 10%;
  }

  .infoSize .key{
    /*padding-right: 120px;*/
    display: inline-block;
    width: 40%;
  }

  .infoParam{
    width: 100%;
    padding: 0 8px;
    /*margin-top: -12px;*/
  }

  .infoParam .infoParam-key {
    display: inline-block;
    width: 25%;
  }

  .infoParam .paramValue{
    display: inline-block;
    color: rgb(224,159,149);
    width: 75%
  }

</style>