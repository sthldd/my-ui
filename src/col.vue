<template>
  <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
  :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
  >
  <div style="border:1px solid ;height:100px;">
    <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'MCol',
  data(){
    return{
      gutter:0,
    }
  },
  props:{
    span:{
      type:[String,Number]
    },
    offset:{
      type:[String,Number]
    }
  },
  mounted(){
    console.log(this.gutter)
  }
}
</script>
<style lang="scss" scoped>
.col{
  width: 50%;
  height: 100px;
  padding: 0 10px;
  $class-prefix:col-;
  @for $n  from 1 through 24{
    &.#{$class-prefix}#{$n}{
      width: ($n / 24 ) * 100%;
    }
  }
  $class-prefix:offset-;
  @for $n  from 1 through 24{
    &.#{$class-prefix}#{$n}{
      margin-left: ($n / 24 ) * 100%;
    }
  }
}
</style>


