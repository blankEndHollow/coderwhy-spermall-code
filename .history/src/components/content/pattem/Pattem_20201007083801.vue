<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in display" :key="i">
          <a :href="m.link">
            <img :src="m.image" alt="">
          </a>
          <p>{{m.title}}</p>
      </div>
      
  </div>
</template>

<script>
export default {
  props:{
    display:{
      type:Array,
      default(){return []}
    }
  }
}
</script>

<style>
#colle{
  justify-content: space-around;
}
#colle::after{
  content: "";
  display: block;
  clear: both;
}
.item{
  width:30%;
  margin-left: 5px;
  padding: 10px;
  float: left;
  /* align-items: center; */
}
#colle img{
  width: 90%;
}
#colle p{
  font-size: 13px;
  width: 100%;
  padding: 2px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
}
</style>