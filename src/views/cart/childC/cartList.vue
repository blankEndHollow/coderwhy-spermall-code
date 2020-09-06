<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) of collList" :product="item" :key="index" />
      <div v-if="collList.length===0">
         <cart-empty />
      </div>
      <div class="cart-recommend">
              <img src="~assets/img/cart/recommend.jpg" alt="">
              <cart-recommend />
          </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"

import CartListItem from "./CartListItem"
import CartRecommend from "./CartRecommed"
import CartEmpty from "./CartEmpty"
import {mapGetters} from "vuex"
import PU from "guyut"

export default {
    computed:{
      ...mapGetters(['collList'])
    },
    components:{
      Scroll,
      CartEmpty,
      CartListItem,
      CartRecommend,
    },
     activated(){
       //每次进入购物车都将刷行scroll的可滚动高度
       this.$refs.scroll.refresh()
    },
     mounted(){
       let deb=PU.debounce(this.$refs.scroll.refresh,8)
       this.$bus.$on('itemImageOver',(e)=>{
         deb()
      })
  }

}
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 47px);
  overflow: hidden;
}
.content{
  height:100%;  
}

.cart-recommend{
  margin-top: 100px;
  width: 100%;
}
.cart-recommend img{
    width: 100%;
    /* height: 33px; */
}
</style>  