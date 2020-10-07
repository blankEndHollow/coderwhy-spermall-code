<template>
  <div class="wrap">
    <ul>
      <li v-for="(item,index) in menu" :key="index" :data-index="item.maitKey">{{item.title}}</li>
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
  console.log(this.menu)
  }
}
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
}
.wrap li{
  padding-inline: 10px;
}
</style>