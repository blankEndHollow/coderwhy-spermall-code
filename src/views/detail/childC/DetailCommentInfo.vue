<template>
  <div class="comment-info" v-if="Object.keys(CI).length !==0">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="CI.user.avatar" alt="">
        <span>{{CI.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{CI.content}}</p>
        <div class="info-other">
          <span class="date">{{CI.created | showDate}}</span>
          <span>{{CI.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item,index) of CI.images" :key="index" alt="">
        </div>
      </div>
 </div>
</template>

<script>
import PU from "common/utils"

export default {
    props:{
      CI:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(v){
        let date= new Date(v*1000)
        return PU.formDate(date,'yyyy-MM-dd:hh:mm:ss')
      }
    }
}
</script>

<style scoped>
.comment-info {
  border-bottom: 5px solid #f2f5f8;
  padding: 5px 12px;
  color: #333333; 
}
.info-header {
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 50px;
  height: 50px;
}
.header-title {
  font-size: 15px;
  float: left;
}
.header-more {
  margin-right: 10px;
  font-size: 13px;
  float: right; 
}
.info-user {
  padding: 10px 0 5px;
}
.info-user img { 
  border-radius: 50%;
  height: 42px;
  width: 42px; 
}
.info-user span { 
  position: relative;
  margin-left: 10px;
  font-size: 15px;
  top: -15px;
}
.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  line-height: 1.5;
  color: #777777;
  font-size: 14px;
}
.info-detail .info-other { 
  color: #999999;
  margin-top: 10px;
  font-size: 12px;
}
.info-other .date {
  margin-right: 8px;
}
.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  margin-right: 5px;
  height: 70px;
  width: 70px;
}
</style>