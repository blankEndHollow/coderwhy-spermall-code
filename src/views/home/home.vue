<template>
   <div id="home">
     <nav-bar class="home-nav">
       <div slot="center">购物街</div>
     </nav-bar>

      <div class="wrapper">
        <div>
          <home-swiper :banners="banners.list" />
          <home-recommend-view :recommend="recommends.list" />
          <home-feature-view />
          <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" class="tab-control" />
          <goods-list :goods="showGoods" />

        </div>
      </div>

   </div>  
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childC/HomeSwiper"
import HomeRecommendView from "./childC/HomeRecommendView"
import HomeFeatureView from "./childC/HomeFeatureView"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"

import BS from "better-scroll"

import {getHomeMultidata, getHomeGoods} from "network/home"



export default {
  name:"home",
  components:{
    NavBar,
   HomeSwiper,
   HomeRecommendView,
   HomeFeatureView,
   TabControl,
   GoodsList,
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
     bs:null,
    }
  },
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
      this.bs=new BS(".wrapper",{
        probeType:3,
        pullUpLoad:true,
      })
      this.bs.on("scroll",e=>{
        console.log(e)
      })
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
        this.banners=res.data.banner
        this.recommends=res.data.recommend
        })
    },
    getHomeGoods(type){
         //请求商品数据
      const page= this.goods[type].page+1;
      getHomeGoods(type,page).then(({data:{list}})=>{
        this.goods[type].list.push(...list);
        this.goods[type].page++;
      })
    },
    tabClick(n){
      //接受传出的索引值，转换类型
        switch(n){
          case 0: return this.currentType='pop';
          case 1: return this.currentType='new';
          case 2: return this.currentType='sell';
        }
    }
  }
}
</script>
<style  scoped>
   #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 3;
  }
  .wrapper{
    background-color: slateblue;
    height: 465px;
    overflow: hidden;
  }
</style>