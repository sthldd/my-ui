<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MCol',
  props:{
    span:{
      type:[String,Number]
    }
  },
}
</script>
<style lang="scss" scoped>
.col{
  width: 50%;
  border:1px solid red;
  height: 100px;
  background: gray;
  $class-prefix:col-;
  @for $n  from 1 through 24{
    &.#{$class-prefix}#{$n}{
      width: ($n / 24 ) * 100%;
    }
  }
}
</style>


