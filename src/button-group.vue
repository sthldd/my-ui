<template>
  <div class="m-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted(){
    for(let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if(name !== 'button'){
        console.warn(`g-button=group的孩子应该是g-button,但是你写的是${name}`);
      }
    }
  }
}
</script>
<style lang="scss">
  .m-button-group{
    display: inline-flex;
    vertical-align: middle;
    >.m-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>


