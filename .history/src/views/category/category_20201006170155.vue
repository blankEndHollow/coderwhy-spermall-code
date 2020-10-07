<template>
  <div class="category">
    <nav-bar class="cateBar"> 
      <div slot="center">商品分类</div>
    </nav-bar>
    
    <!-- <div class="content">
      <div class="cateLeft">
        
      </div>
      <div class="cateRight"></div>
    </div> -->
  <side-bar :menu="sideList" />
  
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
      sideList:[]
    }
  },
  mounted(){

  },
  created(){
    getCategory().then(v=>{
      let data= v?.data?.category?.list
      data= data !=null ? data : []
      this.sideList.push(...data)
    })
  },
  methods:{
    
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