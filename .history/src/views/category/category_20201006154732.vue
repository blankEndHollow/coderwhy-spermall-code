<template>
  <div class="category">
    <nav-bar class="cateBar"> 
      <div slot="center">商品分类</div>
    </nav-bar>
    
    <div class="content">
      <div class="cateLeft">
        <side-bar />
      </div>
      <div class="cateRight"></div>
    </div>

  
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
   this.bs= new BS(".cateLeft",{
      probeType:3,
      pullUpLoad:true,
   })

  },
  created(){
    getCategory().then(v=>{
      console.log(v)
    })
  }
}
</script>
<style  scoped>
.content{
  display: flex;

}
.cateLeft{
  width: 27%;
}

.cateBar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>