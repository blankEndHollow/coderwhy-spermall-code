<template>
   <div id="home" class="wrapper" >
     <!-- 导航栏 -->
     <nav-bar class="home-nav"> <div slot="center">购物街</div> </nav-bar>
    <!-- 下拉可见，占位组件 -->
      <tab-control @tabClick="tabClick" 
                       :titles="['流行','新款','精选']" 
                       ref="tabCTop" class="tab-control-top" v-show="doFixed" />
    <!-- 可滚动区域 -->
     <scroll class="content" ref="scroll" 
             :probe-type="3" @scroll="contentScroll" 
             :pull-up-load="true" @pullingUp="loadMore(currentType)">
    <!-- 主页轮播图 -->
          <home-swiper :banners="banners.list" @swiperImgOver="imgOver" />
    <!-- 推荐模块展示 -->
          <home-recommend-view :recommend="recommends.list" @imgFulfil="imgOver" />
    <!-- 简单图片 -->
          <home-feature-view @imgFulfil="imgOver" />
          <!-- 为false时展示 -->
          <tab-control @tabClick="tabClick" 
                       :titles="['流行','新款','精选']" 
                       ref="tabC"  />
    <!-- 商品列表 -->
          <goods-list :goods="showGoods" />
     </scroll>
    <!-- 回到顶部 -->
       <back-top @click.native="backTop" v-show="showBackTop" />   

   </div>  
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childC/HomeSwiper"
import HomeRecommendView from "./childC/HomeRecommendView"
import HomeFeatureView from "./childC/HomeFeatureView"

import TabControl from "components/content/tabControl/TabControl"

import {getHomeMultidata, getHomeGoods} from "network/home"
import {itemListenerMixin, backTopMixin} from "common/mixin"


export default {
  name:"home",
  components:{
    NavBar,
   HomeSwiper,
   HomeRecommendView,
   HomeFeatureView,
   TabControl,
   
  },
  data(){
    return {
     banners:[],
     recommends:[],
     goods:{
       'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
       'sell':{page:0,list:[]},
     },
     currentType:'pop',
    tabOffsetTop:0,
    doFixed:false,
    save:0,
    saveAll:[],
    desave:0,
   
    }
  },
  mixins:[itemListenerMixin, backTopMixin],
  created(){
    //再次包装
    //请求轮播图和recommend的数据
   this.getHomeMultidata()
    //请求商品数据
   this.getHomeGoods('pop')
   this.getHomeGoods('new')
   this.getHomeGoods('sell') 
   
  },
  mounted(){ 
    
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  methods:{

    getHomeMultidata(){
         //请求轮播图和recommend的数据
      getHomeMultidata().then(res=>{
        // console.log(res)
        this.banners=res.data?.banner
        this.recommends=res.data?.recommend
        })
    },

    getHomeGoods(type){
         //请求商品数据
      const page= this.goods[type].page+1;
      getHomeGoods(type,page).then((res)=>{
        let list= res?.data?.list ? res?.data?.list : [];
        this.goods[type].list.push(...list);
        this.goods[type].page++;
      //数据加载完成后刷新上拉加载
        this.$refs.scroll.finishPullUp()
      })
    },

    tabClick(n){
     //保存流行、新款、精选的scroll位置
      this.saveAll[this.desave]=this.$refs.scroll.getScrollY()
      this.desave=n;
      this.$refs.scroll.scrollTo(0,this.saveAll[this.desave],0)
      
      //接受传出的索引值，转换类型
        switch(n){
          case 0:  this.currentType='pop';  break;
          case 1:  this.currentType='new';  break;
          case 2:  this.currentType='sell'; break;
        }
        //同步两个tabcontrol
        this.$refs.tabCTop.currentIndex=n;
        this.$refs.tabC.currentIndex=n;
    },
    contentScroll(s){
      //监听tabcontrol吸顶
      this.doFixed = (-s.y) >this.tabOffsetTop;
     //监听返回顶部是否显示
       this.showBackTop =(-s.y) > 1000;
    },

    loadMore(CT){
     this.getHomeGoods(CT)
    },
    imgOver(){
     //获取tabcontrol的offsetTop
      this.tabOffsetTop=this.$refs.tabC.$el?.offsetTop
      //保存三个款式的滚轮位置
      this.saveAll[2]=this.saveAll[1]=this.saveAll[0]= -this.tabOffsetTop
    },
  },
  activated(){
    //加载离开此页面的滑动距离
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.save,0)
    this.$bus.$on("itemImageOver", this.itemImgListener)
  },
  deactivated(){
    //保存离开前的距离
   this.save = this.$refs.scroll.getScrollY()
   //取消全局事件监听,...
   this.$bus.$off('itemImageOver', this.itemImgListener)
  }
}
</script>
<style  scoped>
   #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    /* 使用浏览器原生滚动时不让导航栏随着网页一起滚动 */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  /* 原生滚动吸顶 */
  /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 20;
  } */
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control-top{
    position: relative;
    z-index: 10;
  }
 /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px; 
 } */

</style>