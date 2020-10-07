<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in display" :key="i">
          <a :href="m.link">
            <img @load="loadImage" :src="m.image" alt="">
          </a>
          <p>{{m.title}}</p>
      </div>
      
      <div style="clear:both"></div>

      <tab-control :titles="titles" @tabControl="three"></tab-control>

      
  </div>
</template>

<script>
import Deb from "common/utils"

import TabControl from "components/content/tabControl/TabControl"

export default {
  data(){
    return {
      deb:null,
      titles:['流行','新款','精选'],
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
      console.log(n)
    }
  },
  mounted(){
    this.deb=Deb.debounce(()=>{
      this.$emit('loadImage')
    },50)
  },
  components:{
    TabControl
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