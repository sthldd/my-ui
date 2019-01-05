<template>
  <div class="tabs-pane"  :class="classess" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"MTabsPane",
  inject:['eventBus'],
   data(){
    return{
      active:false
    }
  },
  props:{
    name:{
      type:String|Number,
      required:true
    }
  },
  computed:{
    classess(){
      return {
        active:this.active
      }
    }
  },
  created(){
    this.eventBus && this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
        this.active = true
      }else{
        this.active = false
      }
    })
  },
}
</script>
<style lang="scss" scoped>
  .tabs-pane{

  }
</style>