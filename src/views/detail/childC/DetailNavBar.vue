<template>
  <div>
     <nav-bar>

       <div slot="left" class="back" @click="backClick">
         <img src="~assets/img/common/back.svg" alt="back">
       </div>

       <div slot="center" class="title">
          <div v-for="(item,index) of titles" 
               class="title-item" @click="titleClick(index)"
               :class="{active:index == currentIndex}" :key="index" >{{item}}</div>
       </div>
       </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
      }
    },
    components:{
      NavBar,
    },
    methods:{
      titleClick(index){
        //修改切换款式类型
        this.currentIndex=index
        //发出点击事件
        this.$emit('titleClick', index)
      },
      backClick(){
        this.$router.back()
      }
    }
}
</script>

<style scoped>
    .title{
      display: flex;
      font-size: 13px;
    }
    .title-item{
      flex: 1;
    }
    .active{
      color: var(--color-high-text);
    }
    .back img{
      margin-top: 12px;
    }
</style>