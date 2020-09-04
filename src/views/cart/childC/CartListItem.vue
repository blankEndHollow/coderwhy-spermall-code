<template>
    <div id="shop-item">
      <div class="item-selector">
        <check-button :isChecked="product.checked" @click.native="checkB(product.checked)" />
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
#shop-item{
  border-bottom: 1px solid #ccc;
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