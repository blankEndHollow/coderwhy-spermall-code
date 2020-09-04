<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) of collList" :product="item" :key="index" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"

import CartListItem from "./CartListItem"

import {mapGetters} from "vuex"

export default {
    computed:{
      ...mapGetters(['collList'])
    },
    components:{
      Scroll,
      CartListItem,
    },
     activated(){
       //每次进入购物车都将刷行scroll的可滚动高度
       this.$refs.scroll.refresh()
    }

}
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 47px);
  overflow: hidden;
}
.content{
  height: 100%;  
}
</style>  