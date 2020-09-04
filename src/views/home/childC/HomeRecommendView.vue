<template>
  <div class="recommend">
      <div v-for="(item,index) of recommend" :key="index" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" @load="imgFulfil" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        imgLenght:0,
        counter:0,
      }
    },
    methods:{
      imgFulfil(){
        if(++this.counter === this.imgLength){
            this.$emit('imgFulfil')
        }
      }
    },
    watch:{
      recommend(){
       this.imgLength=this.recommend.length
      }
    }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>

