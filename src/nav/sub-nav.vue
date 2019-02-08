<template>
  <div class="m-sub-nav" :class="{active,vertical}" v-click-outside="close">
    <span class="m-sub-nav-label" @click="onClick">
       <slot name="title"></slot>
       <span class="m-sub-nav-icon" :class="{open,vertical}">
         <m-icon name="right"></m-icon>
       </span>
    </span>
    <template v-if="vertical">
      <transition @leave="leave" @enter="enter" @after-leave="afterLeave" @after-enter="afterEnter">
        <div class="m-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="m-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
    import ClickOutside from '../click-outside'
    import MIcon from  '../icon'
    export default {
        name: "MSubNav",
        inject:['root','vertical'],
        directives: {ClickOutside},
        components:{MIcon},
        data(){
            return{
                open:false,
            }
        },
        props:{
          name:{
              type:String,
              required:true,
          }
        },
        computed:{
          active(){
              return this.root.namePath.indexOf(this.name) >= 0 ? true :false
          }
        },
        methods:{
            enter(el,done){
                el.style.height = 'auto'
                let {height} = el.getBoundingClientRect()
                el.style.height = 0
                el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.addEventListener('transitionend',()=>{
                    done()
                })
            },
            afterEnter(el){
                el.style.height = 'auto'
            },
            leave(el,done){
                let {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.getBoundingClientRect()
                el.style.height = 0
                el.addEventListener('transitionend',()=>{
                    done()
                })
            },
            afterLeave(el){
              el.style.height = 'auto'
            },
            onClick(){
                this.open = !this.open
            },
            updateNamePath(){
                this.root.namePath.unshift(this.name)
                if(this.$parent.updateNamePath){
                    this.$parent.updateNamePath()
                }else{

                }
            },
            close(){
                this.open = false
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../var";
  .m-sub-nav{
    position: relative;
    &:not(.vertical) {
      &.active {
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
        }
      }
    }
    &-label{
      padding: 10px 20px;
      display: block;
    }
    >span{
      padding: 10px 20px;
      display: block;
    }
    &-icon{display: none;}
    &-popover{
       position: absolute;
       transition: height 250ms;
       white-space: nowrap;
       top:100%;
       left:0;
       background: white;
       margin-top: 1px;
       box-shadow: 0 0 3px fade_out(black,0.8);
       border-radius: 4px;
       color:$light-color;
       font-size: $font-size;
       min-width: 6em;
      &.vertical{
        position: static;
        border-radius:0;
        border:none;
        box-shadow:none;
        overflow: hidden;
      }
     }
  }
  .m-sub-nav .m-sub-nav {
    &.active{
      &::after {
        display: none;
      }
    }
    .m-sub-nav-popover{
      top:0;
      left:100%;
      margin-left: 8px;
    }
    .m-sub-nav-label{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .m-sub-nav-icon{
      display: inline-flex;
      margin-left: 1em;
      transition: all 250ms;
      svg{
        fill:$light-color;
      }
      &.vertical{
        transform: rotate(90deg);
        &.open{
          transform: rotate(270deg);
        }
      }
      &.open{
        transform: rotate(180deg);
      }
    }
  }
</style>