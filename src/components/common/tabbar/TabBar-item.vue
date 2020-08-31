<template>
  <div v-on:click="clickAc" class="tab-bar-item">
   <div v-if="!light">
      <slot  name="item-icon"></slot>
   </div>
   <div  v-else >
     <slot name="item-icon-active"></slot>
   </div>
    
    <div  :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>
<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'deeppink'
    }
  },
  data(){
    return {
      // light:false,
      spath:"",
    }
  },
  computed:{
    light(){
      return this.$route.path.includes(this.path)
    },
    activeStyle(){
      return this.light ? {color: this.activeColor} :{};
    }
    
  },
  methods:{
    clickAc(){
      if(this.$route.path!=this.path){
        this.$router.push(this.path)
        this.spath=this.path
      }
      
    }
  }
}
</script>

<style scoped>
 
    .tab-bar-item{
      flex: 1;
      text-align: center;
      height: 49px;
      font-size: 14px;
    }
    .tab-bar-item img{
        width: 29px;
        height: 29px;
        margin-top: 1px;
        /* margin-bottom: 2px; */
        vertical-align: middle;
    }
</style>