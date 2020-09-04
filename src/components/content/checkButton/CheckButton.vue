<template>
    <div class="check-button" :class="{nos:!isChecked,sel:isChecked}"></div>
</template>

<script>
export default {
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
}
</script>

<style scoped>
  .check-button{
    display: block;
    height: 20px; 
    width: 20px;
    
  }
 .nos{
    background:url("~assets/img/cart/nos.png");
    background-size: 20px;
 }
 .sel{
   background:url("~assets/img/cart/sel.png");
   background-size: 20px;
 }
</style>