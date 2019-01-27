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
  mounted(){
    if(this.$children.length === 0){
      console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-body，你写的却不是')
    }
    this.$children.forEach((vm)=>{
      if(vm.$options.name == 'MTabsHead'){
        vm.$children.forEach((item)=>{
          if(item.$options.name == 'MTabsItems' && item.name == this.selected){
             this.eventBus.$emit('update:selected',this.selected,item)
          }
        })
      }
    })

  }
}
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>


