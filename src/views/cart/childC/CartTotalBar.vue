<template>
  <div class="total-bar">
      <div class="check-content" @click="checkAll" >
        <check-button :is-checked="isSelectAll" class="check-all" />
        <span>{{ isSelectAll ?'全不选':'全选' }}</span>
      </div>

      <div class="total-price">
          合计：<span class="total-text">￥{{totalPrice}}</span>
      </div>
      <div class="calculate" @click="calcTo">
           <span> 结算({{calcLength}})</span>
      </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
import {mapGetters} from "vuex"
export default {
   components:{
     CheckButton
   },
   computed:{
     ...mapGetters(['collList']),
     totalPrice(){
       //统计商品总价
       return this.collList.filter(item=>item.checked)
              .reduce((previous,current)=>{
                return previous+current.price*current.count
              },0).toFixed(2)
     },
     calcLength(){
       //获取购物车商品的数量
       return this.collList.filter(item=>item.checked).length
     },
     isSelectAll(){
       //只要有一个没被选中就为false
       return !!this.collList.length && !this.collList.some(item=>!item.checked)
     }
   },
   methods:{
     checkAll(){
      //通过isSelectAll绝定是否全选或全不选
       if(this.isSelectAll){
          this.collList.forEach(item=>item.checked=false)
       }else{
         this.collList.forEach(item=>item.checked=true)
       }

     },
     calcTo(){
      if(!this.isSelectAll) this.$toast.show('请选择商品')
     }
   }
}
</script>

<style scoped>
.total-bar{
  box-shadow: 0 -2px 5px 1px rgba(100, 100, 100, 0.1);
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  height: 47px;
  z-index: 15;  
}
.check-content{
  align-items: center;
  font-size: 15px;
  display: flex;
  height: 100%;
  width: 90px;
}
.check-all{
  margin: 0 8px 0 10px;
}
.total-price{
  text-align: right;
  flex: 1;
  margin-right: 8px;
}
.total-text{
  color: #f60;
}
.calculate{
  background-color: #f60;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #fff;
  width: 100px;
  height: 100%;   
}
</style>