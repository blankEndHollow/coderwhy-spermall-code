<template>
    <div class="show-content">
      <div class="shop-head">
        <span class="shop-icon">
            <div class="shop-click">
              <!-- <check-button :isChecked="product.checked" @click.native="checkB(product.checked)" /> -->
            </div>
            <div class="icon-mg">
                  
            </div>
        </span>
        <div class="shop-name"><span>{{product.shopN}}</span><div class="gt"></div></div>
      </div>
      <div id="shop-item">
      <div class="item-selector">
        <check-button :is-checked="product.checked" @click.native="checkB(product.checked)" />
      </div>
      <div class="item-img">
        <img :src="product.image" alt="商品图">
      </div>
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">&yen;{{product.price}}</div>
          <div class="item-count right">x{{product.count}}</div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

export default {
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      },

    },
   components:{
     CheckButton
   },
   methods:{
     checkB(c){
       this.product.checked = !c 
     }
   }
}
</script>

<style scoped>
.show-content{
  border-top: 10px solid rgb(238, 238, 238,0.5);
}
.show-content .shop-head{
  border-bottom: 1px solid rgb(238, 238, 238,0.8);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 30px; 
  font-size: 13px;
  display: flex;
  height: 30px;
}
.show-content .shop-icon{ 
  align-items: center; 
  display: flex;
  height: 100%;
  width: 50px;
}
.show-content .shop-click{
  padding: 0 0 0 9px;
  width: 10px;
}
.show-content .icon-mg{
  background: url("~assets/img/cart/mg.png") no-repeat;
  background-position:center;
  background-size: 16px;
  margin:0 10px 0;
  height: 20px;
  width: 20px;
}
.show-content .shop-name{
  display: flex;
  width: 150px;
}
.show-content .shop-name .gt{
  background: url('~assets/img/common/arrow-left.svg') no-repeat;
  background-position: right center;
  background-size: 15px;
  margin-left: 8px;
  width: 20px;
}
#shop-item{
  display: flex;
  font-size: 0;
  padding: 5px;
  width: 100%;
}
.item-selector{
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  display: flex;
  width: 30px;  
}
.item-title,
.item-desc{
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
}

.item-img{
  padding: 5px;
}
.item-img img{
  border-radius: 5px;
  display: block;
  height: 100px;
  width: 80px; 
}
.item-info{
  position: relative;
  padding: 5px 10px;
  overflow: hidden;
  font-size: 17px;
  color: #333; 
}
.item-info .item-desc{
  margin-top: 15px;
  font-size: 14px;
  color: 14px; 
}
.info-bottom{
  position: absolute;
  margin-top: 10px;
  bottom: 10px;
  right: 10px;
  left: 10px;
  
}

.info-bottom .item-price{
  color: orangered;
}
</style>