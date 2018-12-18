<template>
 <button class="m-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <m-icon v-if="icon && !loading" :name="icon" class="icon"></m-icon>
    <m-icon name="loading" v-if="loading" class="loading icon"></m-icon>
    <div class="content">
      <slot></slot>
    </div>
 </button>
</template>
<script>
export default {
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
<style lang="scss">
  @keyframes spin {
    0%{transform: rotate(0deg)};
    100%{transform: rotate(360deg)};
  }
  .m-button{
    padding: 0 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    font-size: var( --font-size);
    height: var( --button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {border-color: var(--border-color-hover);}
    &:active {border-color: var(--button-active-bg);}
    &:focus {outline: none;}
    >.content{order: 2;}
    >.icon{order:1;margin-right:.1em;}
    &.icon-right{
      .content{order:1;}
      .icon{order:2;margin-right:0;margin-left:.1em;}
    }
    .loading{
      animation: spin 2s infinite linear;
    }

   }

</style>


