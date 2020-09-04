<template>
  <div class="total-bar">
      <div class="check-content">
        <check-button class="check-all" />
        <span>全选</span>
      </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
   components:{
     CheckButton
   }
}
</script>

<style scoped>
.total-bar{
  box-shadow: 0 -2px 5px 1px rgba(100, 100, 100, 0.1);
  background-color: #fff;
  position: relative;
  height: 47px;
  z-index: 15;
  
}
.check-content{
  align-items: center;
  font-size: 15px;
  display: flex;
  height: 100%;
}
.check-all{
  margin: 0 8px 0 10px;
}
</style>