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
      <tab-control ref="upTab" v-show="doFoc" class="upTap" @click.native="toge" :titles="['流行','新款','精选']" />
        <scroll class="content" :probe-type="3" @scroll="slide"  ref="scrollTo">
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
      scrollBy:0,
      doFoc:false,
      offsetY:858,
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
      this.$refs['pattem'].defa()
      this.$refs['scrollTo'].scrollTo(0,0,0)
    },
    send(){
      this.$emit('menuLoad',this.currentKey)
    },
    scrollRefresh(s){
      this.offsetY= s
      this.$refs['scrollTo'].refresh()
      
    },
    slide(x){
      this.doFoc= -(x.y)>=this.offsetY
    },
    toge(){
      console.log(200)
    } 
  },
  components:{
    Scroll,
    Pattem,
    TabControl
  },
  activated(){
    this.scrollRefresh()
    this.$refs['scrollTo'].scrollTo(0,this.scrollBy,0)
  },
  deactivated(){
      this.scrollBy=this.$refs['scrollTo'].getScrollY()
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
  height: 100%;
  overflow: hidden;
  /* padding-top: 15px; */
  padding-bottom: 34px;
}
.upTap{
  z-index: 20;
  position: fixed;
  left: 27%;
  right: 0;
}
</style>