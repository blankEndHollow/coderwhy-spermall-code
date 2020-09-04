<template>
    <div class="bottom-bar">
      <div class="bar-item bar-left">
        <div>
          <i class="icon service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div @click="collect">
          <i class="icon" :class="{selected:isS}"></i>
          <span class="text">
              {{isS ?'已收藏':'收藏'}}
          </span>
        </div>
      </div>
      <div class="bar-item bar-right">
        <div class="cart" @click="addCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      isS:false,
    }
  },
  methods:{
    addCart(){
      this.$emit("addCart")
    },
    collect(){
      if(this.isS){
         this.isS=false;
      }else{
        this.isS=true
      }
    }
  }
}
</script>

<style scoped>
 .bottom-bar{
    background-color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    height: 49px;
    /* bottom: 49px;  */
  }
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item >div{
  flex: 1;
}
.bar-left .text{
  font-size: 11px;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 2px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service{
  background-position: 0 -54px;
}
.bar-left .shop{
  background-position: 0 -98px;
}
.bar-left .selected{
  background-position: 0 -26px;
}
.bar-right{
  font-size: 14px;
  color: #fff;
  line-height: 49px;
}
.bar-right .cart{
  background-color: #FF9500;
  padding: 0 6px;
  color: #fff;
}
 .bar-right .buy{
   background-color: #f69;
 }
</style>