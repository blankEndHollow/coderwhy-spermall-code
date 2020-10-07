<template>
  <div class="side">
      <scroll class="content" ref="scroll">
        <li  v-for="(item,index) in menu" :key="index" 
            :data-index="item.maitKey"
            @click="toogle(index,this)" :class="{activ:index===current}">{{item.title}}</li>
      </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
export default {
  data(){
    return {
      current:0,
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
    this.$refs['scroll'].refresh()
  },
  methods:{
    toogle(i,k){
      this.current=i
      console.log(item.maitKey)
    }
  },
  components:{
    Scroll
  }
}
</script>

<style scoped>

.side{
  width: 100%;
  height: 100%;
  background: rgba(200, 200, 200, .2);
}
.side li{
  font-size: 17px;
  padding: 14px;
  list-style: none;
}
.activ{
  border-left: 4px solid deeppink;
  background: rgba(255,255, 255);

}
.content{
  height: 100%;
}
</style>