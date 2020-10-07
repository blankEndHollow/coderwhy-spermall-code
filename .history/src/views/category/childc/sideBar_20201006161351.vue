<template>
  <div class="wrap">
    <ul>
      <li v-for="(item,index) in menu" :key="index"></li>
    </ul>
  </div>
</template>

<script>
import BS from "better-scroll"
export default {
  props:{
    menu:{
      type:Array,
      default(){
        return [1,2]
      }
    }
  },
  mounted(){
   this.bs= new BS(".wrap",{
      probeType:3,
      pullUpLoad:true,
   })

  }
}
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  background: #000;
}
</style>