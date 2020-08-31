<template>
   <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-ac.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item  path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/menu.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/menu-ac.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item  path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart-ac.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item  path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/nickname.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/nickname-ac.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item> 
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBar-item"

export default {
   components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>

</style>