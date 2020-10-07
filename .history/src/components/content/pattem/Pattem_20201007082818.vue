<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in display" :key="i">
          <img :src="m.image" alt="">
          <p>{{m.title}}</p>
      </div>
      
  </div>
</template>

<script>
export default {
  props:{
    display:{
      type:Array,
      default(){return []}
    }
  }
}
</script>

<style>
#colle{
  /* justify-content: space-around; */
}
#colle::after{
  content: "";
  display: block;
  clear: both;
}
.item{
  width:30%;
  margin-left: 5px;
  padding: 10px;
  float: left;
}
#colle img{
  width: 90%;
}
#colle p{
  font-size: 15px;
}
</style>