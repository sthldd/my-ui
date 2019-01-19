<template>
  <div class="Content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"MContent",
}
</script>
<style lang="scss" scoped>
 .content{
   flex-grow: 1;
 }
</style>
