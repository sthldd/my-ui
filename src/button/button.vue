<template>
 <button class="m-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <m-icon v-if="icon && !loading" :name="icon" class="icon"></m-icon>
    <m-icon name="loading" v-if="loading" class="loading icon"></m-icon>
    <div class="Content">
      <slot></slot>
    </div>
 </button>
</template>
<script>
import Icon from "../icon";
export default {
  components:{
    'm-icon':Icon
  },
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default:false
    },
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value !== 'left' && value !== 'right' ? false : true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
   @import "../var";
  .m-button{
    padding: 0 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    font-size: $font-size;
    height: $input-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    &:hover {border-color: $border-color-hover;}
    &:active {background-color: $button-active-bg;}
    &:focus {outline: none;}
    &[disabled] {
      >.icon{
        fill: #808080;
      }
      cursor: not-allowed;
    }
    &[disabled]:hover {
      border-color: $border-color;
    }
    &[disabled]:active {
      background-color:$button-bg;
    }
    >.Content{order: 2;}
    >.icon{order:1;margin-right:.1em;}
    &.icon-right{
      .Content{order:1;}
      .icon{order:2;margin-right:0;margin-left:.1em;}
    }
    .loading{
      animation: spin 2s infinite linear;
    }

   }

</style>


