<template>
    <div id="tab-bar">
     <slot>
       
     </slot>
    </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style scoped>
  #tab-bar{
    box-shadow: 0px -2px 8px 1px rgba(100,100,100,0.2);
    background-color: #f6f6f6;
    position: fixed;
    display: flex;
    bottom: 0;
    right: 0;
    left: 0; 
   }    
</style>