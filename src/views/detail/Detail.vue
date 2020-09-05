<template>
  <div id="detail">
    <!-- 导航 -->
     <detail-nav-bar class="detail-nav" ref="navbar" @titleClick="titleClick" />
     <!-- 内容滚动 -->
     <scroll class="content" ref="scroll" :probe-type="3" @scroll="scrollListener">
       <!-- 轮播图 -->
       <detail-swiper :top-images="topImages" />
       <!-- 商品的基本信息 -->
       <detail-base-info :goods="goods" />
       <!-- 店铺信息 -->
       <detail-shop-info :shop="shop" />
       <!-- 商品的图片展示 -->
       <detail-images-info :detail-info="detailInfo" @imgOver="imgOver" />
       <!-- 尺码等参数 -->
       <detail-param-info :param-info="paramInfo" ref="param" />
       <!-- 用户评论 -->
       <detail-comment-info :c-i="commentInfo" ref="comment" />
       <!-- 推荐列表 -->
       <goods-list :goods="recommends" ref="recommend" />
     </scroll>
     <!-- 回到顶部 -->
     <back-top @click.native="backTop" v-show="showBackTop" />
     <!-- 底部导航栏 -->
     <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childC/DetailNavBar"
import DetailSwiper from "./childC/DetailSwiper"
import DetailBaseInfo from "./childC/DetailBaseInfo"
import DetailShopInfo from "./childC/DetailShopInfo"
import DetailImagesInfo from "./childC/DetailImagesInfo"
import DetailParamInfo from "./childC/DetailParamInfo"
import DetailCommentInfo from "./childC/DetailCommentInfo"
import DetailBottomBar from "./childC/DetailBottomBar"

import PU from "guyut"
import {itemListenerMixin, backTopMixin} from "common/mixin"

import {
  getDetail, 
  Goods, 
  Shop,
  GoodsParams,
  getRecommend
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
      DetailCommentInfo,
      DetailBottomBar,  
    },
    mixins:[itemListenerMixin, backTopMixin],
    data(){
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0,
       
      }
    },
    created(){
      //保存商品id
      this.iid= this.$route.params.id
    //根据商品id获取详细数据
      getDetail(this.iid).then(({result:data})=>{
      //  console.log(data)
       //baoc商品的轮播图
        this.topImages=data.itemInfo.topImages
        
        //保存商品信息
        this.goods= new Goods(data.itemInfo, data.columns, data.shopInfo.services,data.detailInfo)
       
       //保存店铺信息
        this.shop= new Shop(data.shopInfo)

        //保存商品的更详细数据
        this.detailInfo=data.detailInfo

        //保存商品尺码等参数信息
        this.paramInfo= new GoodsParams(data.itemParams.info, data.itemParams.rule)
        
        //保存评论信息
        this.commentInfo= data.rate.cRate !== 0 ? data.rate.list[0] : {} ;

        // this.$nextTick((e)=>{
        //    console.log('dom加载完成')
        // })

      })

      //请求推荐数据
      getRecommend().then(({data})=>{
        // console.log(data)
        //保存推荐数据
        this.recommends.push(...data.list)
      }).catch((e)=>{
        console.log('有个数据未成功请求！')
      })
    //创建navBar跳转位置的防抖函数
    this.getThemeTopY=PU.debounce(()=>{
      this.themeTopYs=[]
           this.themeTopYs.push(0)
           this.themeTopYs.push(-(this.$refs.param.$el.offsetTop - 44)) 
           this.themeTopYs.push(-(this.$refs.comment.$el.offsetTop - 44))
           this.themeTopYs.push(-(this.$refs.recommend.$el.offsetTop - 44))
           this.themeTopYs.push(-(Number.MAX_VALUE))
    },15)

    },
    mounted(){
      // console.log('my source is detail')
    },
    methods:{
      imgOver(){
        //接受展示图片的加载完成并刷行
       this.$refs['scroll'].refresh && this.$refs['scroll'].refresh()
        //执行navBar包含图片的跳转位置
       this.getThemeTopY()

      },

      titleClick(i){
        //点击滚到指定信息的位置
       this.$refs.scroll.scrollTo(0,this.themeTopYs[i],120)
      },

      scrollListener({y}){
        //判断是否该显示
        this.showBackTop= (-y)>1000;

        //计算联动效果
        let mey=this.themeTopYs,
            long=mey.length-1;
          for(let i=0; i<long; i++){
               if(this.currentIndex !== i && (-y >= -mey[i] && -y < -mey[i + 1])){
                this.currentIndex= i
                this.$refs.navbar.currentIndex= +i
            }
          }
      },

      addToCart(){
        //提取购物车展示需要的数据
        const product={
          price:this.goods.realPrice,
          image:this.topImages[0],
          title:this.goods.title,
          desc:this.goods.desc, 
          shopN:this.shop.name,
          iid:this.iid,
        }
        //添加到vuex
        this.$store.dispatch('addCart',product)
      }
    },
    destroyed(){
      //为了不和Home的一起被调用，需要离开此页面销毁。似乎多余
      this.$bus.$off("itemImageOver", this.itemImgListener)
     
    },
  
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
  height: calc(100% - 44px - 49px);
}

</style>