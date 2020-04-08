<template>
  <grid-view>
<!--    <GoodListItem v-for="(item, index) in categoryDetail" :key="index" :goods="item"></GoodListItem>-->
  </grid-view>
</template>

<script>
  import GridView from "@/components/common/gridView/GridView";
  import GoodListItem from "@/components/content/goods/GoodListItem";

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
