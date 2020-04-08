import {debounce} from "@/common/utils.js"
import {POP, NEW, SELL} from "./const";

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

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}