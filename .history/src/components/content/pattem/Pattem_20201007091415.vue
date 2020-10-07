<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in display" :key="i">
          <a :href="m.link">
            <img @load="loadImage" v-lazy="m.image" alt="">
          </a>
          <p>{{m.title}}</p>
      </div>
      
  </div>
</template>

<script>
import Deb from "common/utils"
export default {
  data(){
    return {
      deb:null
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
    }
  },
  mounted(){
    this.deb=Deb.debounce(()=>{
      this.$emit('loadImage')
    },50)
  }


}
</script>

<style>
#colle{
  justify-content: space-around;
}
#colle::after{
  content: "";
  display: block;
  clear: both;
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