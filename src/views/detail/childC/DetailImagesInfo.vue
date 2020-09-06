<template>
  <div class="image-info" v-if="Object.keys(detailInfo).length !==0 ">
    
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) of detailInfo.detailImage[0].list"
           :key="index" v-lazy="item" @load="imgOver" alt="">
    </div>
  </div>
</template>

<script>
export default {
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imagesLength:0,
      }
    },
    methods:{
        imgOver(){
          //判断所有图片加载完成后发出事件
          if( ++this.counter == this.imagesLength){
            this.$emit("imgOver")
          }
        }
    },
    watch:{
      detailInfo(v){
        //保存所有图片的个数
        this.imagesLength=this.detailInfo.detailImage[0].list.length
      }
    }
}
</script>

<style scoped>
.image-info {
  border-bottom: 5px solid #f2f5f8;
  padding: 20px 0;
}
.info-desc {
  padding: 0 15px;
}
.info-desc .start,
.info-desc .end {
   background-color: #a3a3a5;
  position: relative;
  width: 90px;
  height: 1px;
}
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  background-color: #333333;
  position: absolute;
  height: 5px;
  content: "";
  width: 5px;
  bottom: 0;  
}
.info-desc .end::after {
  right: 0;
}
.info-desc .desc {
  font-size: 14px;
  padding: 15px 0;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333333;
  font-size: 15px;
}
.info-list img {
  width: 100%;
}
</style>