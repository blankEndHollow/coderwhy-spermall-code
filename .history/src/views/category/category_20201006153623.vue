<template>
  <div class="wrapper">
    
<div class="content">
    
  

  
  </div>      
   
  </div>
</template>

<script>
import BS from "better-scroll"
import { getCategory } from 'network/category'
import SideBar from "./childc/SideBar"
export default {
  name:"category",
  components:{
    SideBar
  },
  data(){
    return {
      bs:null,
    }
  },
  mounted(){
  //  this.bs= new BS(".content",{
  //     probeType:3,
  //     pullUpLoad:true,
  //  })

  },
  created(){
    getCategory().then(v=>{
      console.log(v)
    })
  }
}
</script>
<style  scoped>

</style>