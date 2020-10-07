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
  data(){
    return {
      sideList:[],
    }
  },
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
  //  this.bs= new BS(".cateLeft",{
  //     probeType:3,
  //     pullUpLoad:true,
  //  })

  },
  created(){
    getCategory().then(v=>{
      let data= v?.data?.category?.list
      data= data !=null ? data : []
      console.log(data)
    })
  }
}
</script>
<style  scoped>
.category{
  height: 100vh;
/* overflow: hidden; */
}
.content{
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
.cateBar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>