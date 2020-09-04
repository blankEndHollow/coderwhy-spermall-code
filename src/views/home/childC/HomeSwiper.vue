<template>
  <swiper>
        <swiper-item v-for="(item,index) of banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgOver">
          </a>
        </swiper-item>
   </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
export default {
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      doLoad:false,
    }
  },
  components:{
    Swiper, 
    SwiperItem
  },
  methods:{
    imgOver(){
        if(!this.doLoad){
          this.$emit("swiperImgOver")
          this.doLoad= !this.doLoad;
        }
    }
  }
}
</script>

<style scoped>

</style>