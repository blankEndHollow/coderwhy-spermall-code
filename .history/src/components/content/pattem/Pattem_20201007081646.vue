<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in display" :key="i">
          <img :src="m.image" alt="">
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

}
</style>