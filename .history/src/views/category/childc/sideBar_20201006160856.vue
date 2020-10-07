<template>
  <div class="wrap">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      
    </ul>
  </div>
</template>

<script>
import BS from "better-scroll"
export default {
  mounted(){
   this.bs= new BS(".wrap",{
      probeType:3,
      pullUpLoad:true,
   })

  }
}
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  background: #000;
}
</style>