<template>
<div class="miansids">
    <div class="cateLeft">
      <div class="side">
      <scroll class="content" ref="scroll">
        <li  v-for="(item,index) in menu" :key="index" 
            :data-index="item.maitKey"
            @click="toogle(index,item.maitKey,item.miniWallkey)" :class="{activ:index===current}">{{item.title}}</li>
      </scroll>
    </div>
      </div>
      <div class="cateRight">
        
        <scroll class="content" ref="scrollTo">
          <pattem @loadImage="scrollRefresh" :display="main" ref="pattem" />
        </scroll>
      </div>
    </div>
  
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import Pattem from "components/content/pattem/Pattem"
import TabControl from "components/content/tabControl/TabControl"

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
    toogle(i,k,m){
      this.current=i
      this.currentKey=k
      this.send()
      this.$store.commit('updateCate',m)
      this.$refs['pattem'].getDe()
    },
    send(){
      this.$emit('menuLoad',this.currentKey)
    },
    scrollRefresh(){
      this.$refs['scrollTo'].refresh()
    }
  },
  components:{
    Scroll,
    Pattem,
    TabControl
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
  color: deeppink;
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
  width: 73%;
  overflow: hidden;
  padding-top: 15px;
}

</style>