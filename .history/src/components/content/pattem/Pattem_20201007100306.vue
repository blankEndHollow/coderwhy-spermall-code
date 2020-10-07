<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in display" :key="i">
          <a :href="m.link">
            <img @load="loadImage" :src="m.image" alt="">
          </a>
          <p>{{m.title}}</p>
      </div>
      
      <div style="clear:both"></div>

      <tab-control :titles="['流行','新款','精选']" @tabClick="three"></tab-control>

      <div> {{kind}} </div>

      
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
      switch(n){
        case 0: this.current='pop'; break
        case 1: this.current='new'; break
        case 2: this.current='sell'; break
      }
    }
  },
  mounted(){
    this.deb=Deb.debounce(()=>{
      this.$emit('loadImage')
    },50)
  },
  components:{
    TabControl,
    GoodsList
  },
  computed:{
    mapGetters(['getWallKey']),
    kind(){
      console.log(this.$store.getters.getWallKey)
        // return getSubCategoryDetail(this.current,)
    }
  }


}
</script>

<style>
#colle{
  justify-content: space-around;
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