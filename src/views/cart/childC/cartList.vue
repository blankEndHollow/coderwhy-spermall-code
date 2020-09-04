<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item />
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
    }
}
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.content{
  height: 100%;
  
  
}
</style>  