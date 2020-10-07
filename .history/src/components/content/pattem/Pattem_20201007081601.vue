<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in display" :key="i">
          <img src="" alt="">
          <p>{{m.image}}</p>
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