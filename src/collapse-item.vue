<template>
  <div class="collapseItem">
    <div class="title" @click="openContent">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'MCollapseItem',
  data(){
    return{
      open:false
    }
  },
  props:{
    title:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    }
  },
  inject:['eventBus'],
  // mounted(){
  //   this.eventBus && this.eventBus.$on('update:selected',(name)=>{
  //     if(name !== this.name){
  //       this.close()
  //     }else{
  //       this.show()
  //     }
  //   })
  // },
  methods:{
    openContent(){
      if(this.open){
        this.open =false
      }else{
        this.eventBus && this.eventBus.$emit('update:selected',this.name)
      }
    },
    close(){
      this.open =false
    },
    show(){
      this.open = true
    }
  },

}
</script>

<style lang="scss" scoped>
  .collapseItem{
    >.title{
      border:1px solid #ddd;
      border-radius: 4px;
      margin:-1px -1px 0 -1px;
      min-height: 30px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    >.content{
      padding: 0 8px;
    }
    &:first-child{
      >.title{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
  }
</style>