<template>
  <div class="wrap">
    <ul>
      <li @click="toogle(index)" :class="{activ:index===current}" v-for="(item,index) in menu" :key="index" :data-index="item.maitKey">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import BS from "better-scroll"
export default {
  data(){
    return {
      current:1,
    }
  },
  props:{
    menu:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted(){
   this.bs= new BS(".wrap",{
      probeType:3,
      pullUpLoad:true,
   })
  },
  methods:{
    toogle(i){
      this.current=i
    }
  },
  watch:{
    menu(){
      console.log(200)
    }
  }
}
</script>

<style scoped>

.wrap{
  width: 100%;
  height: 100%;
  background: rgba(200, 200, 200, .2);
}
.wrap li{
  font-size: 17px;
  padding: 14px;
}
.activ{
  border-left: 4px solid deeppink;
  background: rgba(255,255, 255);

}
</style>