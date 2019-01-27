<template>
  <div class="tabs-item" @click="clickItem" :class="classess" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MTabsItems',
  inject:['eventBus'],
  data(){
    return{
      active:false
    }
  },
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name:{
      type:String|Number,
      required:true
    }
  },
  computed:{
    classess(){
      return {
        active:this.active,
        disabled:this.disabled
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
  methods:{
    clickItem(){
      if(this.disabled){return}
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabs-item{
    flex-shrink: 0;
    padding: 0 3em;
    cursor: pointer;
    display: flex;
    height:100%;
    align-items: center;
    &.active{
      color:#1890ff;
      font-weight: 500;
    }
    &.disabled{
      color:gray;
      cursor: not-allowed;
    }
  }
</style>