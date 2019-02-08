<template>
  <div class="m-nav-item" :class="{selected,vertical}" @click="onClick" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "MNavItem",
        inject:['root','vertical'],
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                selected:false
            }
        },
        created(){
          this.root.addItems(this)
        },
        methods:{
            onClick(){
                this.root.namePath = []
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../var";
  .m-nav-item{
    padding: 10px 20px;
    position: relative;
    &:not(.vertical){
      &.selected{
        &::after{
          content: '';
          bottom: 0;
          position: absolute;
          width:100%;
          border-bottom: 2px solid #4a90e2;
          left:0;
        }
      }
    }
    &.vertical {
      &.selected {
        color: #4a90e2;
      }
    }
  }
  .m-sub-nav .m-nav-item:not(.vertical){
    &.selected{
      background: $grey;
      color: $color;
      &::after{
        display: none;
      }
    }
  }
</style>