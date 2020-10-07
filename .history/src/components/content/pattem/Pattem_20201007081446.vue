<template>
  <div id="colle">
      <div class="item" v-for="(m,i) in ddisplay" :key="i">
          <img src="" alt="">
          <p></p>
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