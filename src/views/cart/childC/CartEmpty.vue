<template>
   <div class="cart-empty">
              <div class="empty-img">
                <img src="~assets/img/cart/empty.png" alt="">
              </div>
              <p class="cart-title-p">购物车快饿瘪了T.T</p>
              <p class="cart-title-p-as">主人快给我挑点宝贝吧</p>
              <a href="/" ><div class="cart-home" >去逛逛</div></a>
          </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>