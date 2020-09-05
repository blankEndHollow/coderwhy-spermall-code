<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) of collList" :product="item" :key="index" />
      <div v-if="collList.length===0">
          <div class="cart-empty">
              <div class="empty-img">
                <img src="~assets/img/cart/empty.png" alt="">
              </div>
              <p class="cart-title-p">购物车快饿瘪了T.T</p>
              <p class="cart-title-p-as">主人快给我挑点宝贝吧</p>
              <a href="/" ><div class="cart-home" >去逛逛</div></a>
          </div>
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

import {mapGetters} from "vuex"
import PU from "guyut"

export default {
    computed:{
      ...mapGetters(['collList'])
    },
    components:{
      Scroll,
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
.cart-empty{
  padding-top: 2.13333rem;;
  text-align: center;
  height: 230px;
  width: 100%;
}
.cart-empty .empty-img{
  background-color: #eee;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 auto;
  height: 140px;
  display: flex;
  width: 140px;
  
  
}
.empty-img img{
  width: 80px;
 
}

.cart-title-p{
  margin-top: 8px;
  font-size: 15px;

}
.cart-title-p-as{
  color: #999999;
  margin-top: 8px;
  font-size: 12px;
}
.cart-home{
  border: 1px solid #999;
  text-decoration: none;
  margin: 20px auto 0;
  border-radius: 5px;
  line-height: 30px;
  height: 30px;
  width: 80px;
}
.cart-recommend{
  margin-top: 100px;
  width: 100%;
}
.cart-recommend img{
    height: 33px;
}
</style>  