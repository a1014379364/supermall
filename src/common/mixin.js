import {debounce} from "@/common/utils.js"

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null
    }
  },
  mounted(){
    const  refresh = debounce(this.$refs.scroll.refresh,500)
    //监听image加载事件
    this.itemImgListener = () =>{
      refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
  deactivated() {
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  }
}

