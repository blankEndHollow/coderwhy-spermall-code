<template>
  <div id="colle">
    {{display}}
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