<template>
<div class="miansids">
    <div class="cateLeft">
      <div class="side">
      <scroll class="content" ref="scroll">
        <li  v-for="(item,index) in menu" :key="index" 
            :data-index="item.maitKey"
            @click="toogle(index,item.maitKey)" :class="{activ:index===current}">{{item.title}}</li>
      </scroll>
    </div>
      </div>
      <div class="cateRight">
        
      </div>
    </div>
  
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
export default {
  data(){
    return {
      current:0,
      currentKey:3627,
    }
  },
  props:{
    menu:{
      type:Array,
      default(){return []}
    },
    main:{
      type:Array,
      default(){return[]}
    }
  },
  mounted(){
    this.$refs['scroll'].refresh()
    this.send()
  },
  methods:{
    toogle(i,k){
      this.current=i
      this.currentKey=k
    },
    send(){
      this.$emit('menuLoad',this.currentKey)
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
.miansids{
  display: flex;
  height: calc(100% - 93px);
}
.cateLeft{
  width: 27%;
  height: 100%;
  overflow: hidden;
}
.cateRight{
  background: #555;
  flex:auto;
}
</style>