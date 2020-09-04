import BackTop from "components/content/backTop/BackTop"
import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import PU from "guyut"

export const itemListenerMixin={
  data(){
    return {
      itemImgListener:null,
    }
  },
  mounted(){
    //防抖函数
    let deb= PU.debounce(this.$refs.scroll.refresh,50)
    this.itemImgListener=()=>{ 
      deb()
    }
    this.$bus.$on("itemImageOver", this.itemImgListener)
  }
}

export const backTopMixin={
  components:{
    BackTop,
    Scroll,
    GoodsList,
  },
  data(){
    return {
      showBackTop:false,
    }
  },
  methods:{
      backTop(){
          this.$refs.scroll.scrollTo(0,0,300)
      }
  }
}