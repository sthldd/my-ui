<template>
  <div class="m-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "MNav",
        provide(){
          return{
              root:this,
              vertical:this.vertical
          }
        },
        data(){
            return{
                items:[],
                namePath:[]
            }
        },
        props:{
            selected:{
                type:String
            },
            vertical:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            this. updateChildren()
            this.listenToChildren()
        },
        updated(){
            this. updateChildren()
        },
        methods:{
          addItems(vm){
            this.items.push(vm)
          },
          updateChildren(){
              this.items.forEach((vm)=>{
                  if(this.selected === vm.name){
                      vm.selected = true
                  }else{
                      vm.selected = false
                  }
              })
          },
          listenToChildren(){
              this.items.forEach((vm)=>{
                  vm.$on('update:selected',(name)=>{
                      this.$emit('update:selected', name)
                  })
              })
          }
        },
    }
</script>

<style scoped lang="scss">
  @import "../var";
  .m-nav{
    display: flex;
    border-bottom: 1px solid #eee;
    color: $color;
    cursor: default;
    user-select: none;
    &.vertical{
      flex-direction: column;
    }
  }
</style>