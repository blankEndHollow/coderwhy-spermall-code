<template>
  <div id="colle">
      <!-- <div class="item" v-for="(m,i) in display" :key="i">
          <img :src="m.image" alt="">
          <p>{{m.title}}</p>
      </div> -->
      200
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
  
}
.item{
  width:30%;
  float: left;
}
#colle img{
  width: 100%;
}
</style>