<template>
  <div class="toast" v-show="isShow">
     <div> {{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
    return {
      isShow:false,
      message:''
    }
  },
  methods:{
    show(s='默认文字',duration=1500){
      this.isShow=true
      this.message=s
      setTimeout(()=>{
        this.isShow=false
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    background-color: rgba(0, 0, 0, 0.65);
    transform: translate(-50%,-50%);
    border-radius: 5px;
    padding: 10px 10px;
    position: fixed;
    color: #fff;
    z-index: 100;
    top: 50%;
    left: 50%;
  }
</style>