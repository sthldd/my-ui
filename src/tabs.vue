<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name:'MTabs',
  data(){
    return {
      eventBus:new Vue()
    }
  },
  props:{
    selected:{
      type:String,
      required:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].includes(value)
      }
    }
  },
  provide(){
    return{
      eventBus:this.eventBus
    }
  },
  created(){

  }
}
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>


