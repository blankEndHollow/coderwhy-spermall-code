<template>
  <div class="category">
    <nav-bar> <div slot="center">200</div></nav-bar>
    <side-bar />

  
  </div>      
   

</template>

<script>
import BS from "better-scroll"
import { getCategory } from 'network/category'

import NavBar from "components/common/navbar/NavBar"
import SideBar from "./childc/SideBar"

export default {
  name:"category",
  components:{
    SideBar,
    NavBar
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