<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name:"MTabsHead",
  inject:['eventBus'],
  mounted(){
    let tabsHeadLeft = this.$el.getBoundingClientRect().left
    this.eventBus.$on('update:selected',(item,vm)=>{
      let {width,height,left,top} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left-tabsHeadLeft}px`
    })
  }
}
</script>
<style lang="scss" scoped>
  $height:40px;
  .tabs-header{
    display: flex;
    justify-content: flex-start;
    height:$height;
    position: relative;
    border-bottom:1px solid #E8E8E8;
    >.actions-wrapper{
      margin-left: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    >.line{
      position: absolute;
      bottom: -1px;
      border-bottom: 1px solid #1890ff;
      transition: all 350ms;
    }
  }
</style>