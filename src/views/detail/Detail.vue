<template>
  <div id="detail">
     <detail-nav-bar class="detail-nav" />
     <scroll class="content" ref="S-D">
       <detail-swiper :top-images="topImages" />
       <detail-base-info :goods="goods" />
       <detail-shop-info :shop="shop" />
       <detail-images-info :detail-info="detailInfo" @imgOver="imgOver" />
       <detail-param-info :param-info="paramInfo" />
     </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childC/DetailNavBar"
import DetailSwiper from "./childC/DetailSwiper"
import DetailBaseInfo from "./childC/DetailBaseInfo"
import DetailShopInfo from "./childC/DetailShopInfo"
import DetailImagesInfo from "./childC/DetailImagesInfo"
import DetailParamInfo from "./childC/DetailParamInfo"

import Scroll from "components/common/scroll/Scroll"

import {
  getDetail, 
  Goods, 
  Shop,
  GoodsParams
  } from "network/Detail"

export default {
    name:"detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImagesInfo,
      DetailParamInfo,
      Scroll,
    },
    data(){
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
      }
    },
    created(){
      //保存商品id
      this.iid= this.$route.params.id
    //根据商品id获取详细数据
      getDetail(this.iid).then(({result:data})=>{
       console.log(data)
       //baoc商品的轮播图
        this.topImages=data.itemInfo.topImages
        
        //保存商品信息
        this.goods= new Goods(data.itemInfo, data.columns, data.shopInfo.services)
       
       //保存店铺信息
        this.shop= new Shop(data.shopInfo)

        //保存商品的更详细数据
        this.detailInfo=data.detailInfo

        //保存商品尺码等参数信息
        this.paramInfo= new GoodsParams(data.itemParams.info, data.itemParams.rule)
      })
    },
    methods:{
      imgOver(){
        //接受展示图片的加载完成并刷行
        this.$refs['S-D'].refresh()
      }
    }
  
}
</script>

<style scoped>
#detail{
  background-color: #fff;
  position:relative;
  overflow: hidden;
  height: 100vh;
  z-index: 15;
}

.detail-nav{
  background-color: #fff;
  position: relative;
  z-index: 15;
}

.content{
  height: calc(100% - 44px);
}

</style>