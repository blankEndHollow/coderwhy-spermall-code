<template>
  <div class="wrap">
    <ul>
  
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
        return []
      }
    }
  }
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