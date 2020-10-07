<template>
  <div class="tab-control">
      <div  v-for="(item,index) of titles" 
           class="tab-control-item" 
           :class="{active:index==currentIndex}"
           @click="tabControlClick(index)">
          <span >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
      tabControlClick(n){
         this.currentIndex=n;
         this.$emit("tabClick",n)
      },
  }
}
</script>

<style  scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  transition: all .3s; 
  }

  .active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>