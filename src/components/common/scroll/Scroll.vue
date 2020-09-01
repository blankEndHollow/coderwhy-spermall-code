<template>
    <div class="wrapper" ref='wrapper'>
      <div class="content">
         <slot></slot>
      </div>
    </div>
</template>

<script>
import BS from "better-scroll"

export default {
  props:{
    probeType:{
      type:Number,
      default:0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false,
    }
  },
  data(){
    return {
      scroll:null,
      message:"233"
    }
  },
  mounted(){

    //初始化scroll插件
     this.initialize();
    //监听滚动
    if(this.probeType>1) this.startScroll()
    //上拉加载更多
    if(this.pullUpLoad) this.startUpLoad();

  },
  methods:{
    backTop(x,y,del=500){
     this.scroll && this.scroll.scrollTo(x,y,del)
    },
    finishPullUp(){
     
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    initialize(){
      this.scroll =new BS(this.$refs['wrapper'], {
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true,
          })
    },
    startScroll(){
      this.scroll.on("scroll",position=>{
          this.$emit("scroll",position)
      })
    },
    startUpLoad(){
        this.scroll.on("pullingUp",()=>{

            this.$emit('pullingUp')
      
        })
    }
  }
}
</script>

<style scoped>

</style>