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
import { getCategory,subCategory } from 'network/category'

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
      sideList:[],
      mainList:[],
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

.cateBar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>