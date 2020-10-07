<template>
  <div class="wrap">
      <scroll>12</scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
export default {
  data(){
    return {
      current:1,
    }
  },
  props:{
    menu:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted(){

  },
  methods:{
    toogle(i){
      this.current=i
    }
  },
  watch:{
    menu(){
      this.$emit('sideOver')
    }
  },
  components:{
    Scroll
  }
}
</script>

<style scoped>

.wrap{
  width: 100%;
  height: 100%;
  background: rgba(200, 200, 200, .2);
}
.wrap li{
  font-size: 17px;
  padding: 14px;
}
.activ{
  border-left: 4px solid deeppink;
  background: rgba(255,255, 255);

}
</style>