<template>
  <transition name="slide">
    <div class="m-slide-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "MSlideItem",
        data(){
            return{
                selected:undefined,
                reverse: false,
            }
        },
        props:{
            name:{
                type:String,
                required:true
            }
        },
        computed:{
            visible(){
                return this.selected === this.name
            }
        }
    }
</script>

<style scoped lang="scss">
  .slide-leave-active{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all 1s;
  }
  .slide-enter{
    transform: translateX(100%);
  }
  .slide-leave-to{
    transform: translateX(-100%);
  }
  .slide-enter .reverse{
    transform: translateX(-100%);
  }
  .slide-leave-to .reverse{
    transform: translateX(100%);
  }
</style>