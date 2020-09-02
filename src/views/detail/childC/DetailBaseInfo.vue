<template>
    <div class="base-info" v-if=" Object.keys(goods).length !== 0">
    
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>

    </div>
</template>

<script>
export default {
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
}
</script>

<style scoped>
.base-info {
  border-bottom: 5px solid #f2f5f8;
  color: #999999;
  margin-top: 15px;
  padding: 0 10px;
  width: 100%; 
}

.info-title {
  text-align: justify;
  color: #222222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  color: #ff5777;
  font-size: 24px; 
}

.info-price .o-price {
  text-decoration: line-through;
  margin-left: 5px;
  font-size: 13px;
}

.info-price .discount {
  background-color: #ff5777;
  border-radius: 8px;
  position: relative;
  margin-left: 5px;
  padding: 3px 6px;
  color: #ffffff;
  font-size: 12px;
  top: -4px; 
}

.info-other {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
  line-height: 30px;
  margin-top: 15px;
  font-size: 13px;
  display: flex;
}

.info-service {
  justify-content: space-between;
  line-height: 60px;
  display: flex; 
}

.info-service-item img {
  position: relative;
  height: 14px;
  width: 14px;
  top: 2px;
}

.info-service-item span {
  margin-left: 5px;
  color: #333333;
  font-size: 13px;
}
</style>