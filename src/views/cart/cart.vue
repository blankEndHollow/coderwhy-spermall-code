<template>
  <div class="cart">
    <!-- 导航 -->
   <nav-bar class="nav-bar">
     <div slot="center">购物车({{collects}})</div>
   </nav-bar>

   <!-- 购物车里的商品列表 -->
    <cart-list />

    <!-- 汇总 -->
    <cart-total-bar></cart-total-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childC/cartList"
import CartTotalBar from "./childC/CartTotalBar"
//导入vuex里的getters属性
import {mapGetters} from "vuex"

export default {
  name:"cart",
  computed:{
      ...mapGetters(['collects'])
  },
  components:{
      NavBar,
      CartList,
      CartTotalBar,
  }
}
</script>
<style  scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>