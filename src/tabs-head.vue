<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default {
  name:"MTabsHead",
  inject:['eventBus'],
  created(){
    
  }
}
</script>
<style lang="scss" scoped>
  .tabs-header{

  }
</style>