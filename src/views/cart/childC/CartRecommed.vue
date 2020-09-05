<template>
  <goods-list :goods="recommend" />
</template>

<script>
import GoodsList from "components/content/goods/GoodsList"

import {getRecommend} from "network/Detail.js"
export default {
    data(){
      return {
        recommend:[],
      }
    },
    components:{
      GoodsList,
    },
    created(){
      getRecommend().then(({data})=>{
        this.recommend.push(...data.list)
      }).catch((e)=>{})
    }
}
</script>

<style scoped>

</style>