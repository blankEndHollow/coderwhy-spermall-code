<template>
  <div id="colle">
      
      <div class="item" v-for="(m,i) in display" :key="i">
          <a :href="m.link">
            <img @load="loadImage" :src="m.image" alt="">
          </a>
          <p>{{m.title}}</p>
      </div>
      
      <div style="clear:both"></div>

      <tab-control ref="downTab" :titles="['流行','新款','精选']" @tabClick="three" />

      <goods-list :goods="detaList" />     
      
  </div>
</template>

<script>
import Deb from "common/utils"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import {getSubCategoryDetail} from 'network/category'

import {mapGetters} from "vuex"
export default {
  data(){
    return {
      deb:null,
      current:'pop',
      detaList:[],
    }
  },
  props:{
    display:{
      type:Array,
      default(){return []}
    }
  },
  methods:{
    loadImage(){
      this.deb()
    },
    three(n){
      this.$refs['downTab'].currentIndex=n
      this.$emit('together',n)
      switch(n){
        case 0: this.current='pop'; break
        case 1: this.current='new'; break
        case 2: this.current='sell'; break
      }
    },
    getDe(...args){
     getSubCategoryDetail(this.getWallKey,this.current).then(v=>{
       this.detaList= Array.from(v)
     })
     
    },
    defa(){
      this.current='pop'
      this.$refs['downTab'].currentIndex=0 
    }
  },
  mounted(){
    this.deb=Deb.debounce(()=>{
      let offsetY= this.$refs['downTab'].$el.offsetTop
      this.$emit('loadImage', offsetY)
      
    },50)
    this.getDe()

    this.$bus.$on('itemImageOver',()=>{
      this.deb()
    })
  },
  components:{
    TabControl,
    GoodsList
  },
  computed:{
    ...mapGetters(['getWallKey']),
  },
  watch:{
    current(...n){
      this.getDe()
    }
  },
  activated(){
    this.deb()
  }


}
</script>

<style>
#colle{
  
}

.item{
  width:30%;
  margin-left: 5px;
  padding: 10px;
  float: left;
}
#colle img{
  width: 90%;
}
#colle p{
  font-size: 13px;
  width: 100%;
  padding: 2px;
  /* overflow: hidden; */
  text-align: center;
  white-space: nowrap;
}

</style>