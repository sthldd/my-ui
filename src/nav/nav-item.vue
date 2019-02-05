<template>
  <div class="m-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "MNavItem",
        inject:['root'],
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
                this.$emit('add:selected',this.name)
                this.$parent.x && this.$parent.x()
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../var";
  .m-nav-item{
    padding: 10px 20px;
    position: relative;
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
  .m-sub-nav .m-nav-item{

    &.selected{
      background: $grey;
      color: $color;
      &::after{
        display: none;
      }
    }
  }
</style>