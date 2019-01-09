<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name:'MCollapse',
  data(){
    return{
      eventBus:new Vue()
    }
  },
  props:{
    single:{
      type:Boolean,
      default:false
    },
    selected:{
      type:String,
    }
  },
  provide(){
      return {
        eventBus:this.eventBus
      }
  },
  methods:{

  },
  mounted(){
    this.eventBus.$on('update:selected',this.selected)
  }
}
</script>

<style lang="scss" scoped>
  .collapse{
    border:1px solid #ddd;
    border-radius: 4px;
  }
</style>

