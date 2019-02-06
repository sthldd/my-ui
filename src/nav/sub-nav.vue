<template>
  <div class="m-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="onClick">
       <slot name="title"></slot>
    </span>
    <div class="m-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import ClickOutside from '../click-outside'
    export default {
        name: "MSubNav",
        inject:['root'],
        directives: {ClickOutside},
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
    &.active{
      &::after{
          content: '';
          position: absolute;
          width:100%;
          border-bottom: 2px solid #4a90e2;
          bottom: 0;
          left:0;
      }
    }
    >span{
      padding: 10px 20px;
      display: block;
    }
    &-popover{
       position: absolute;
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
     }
  }
  .m-sub-nav .m-sub-nav .m-sub-nav-popover{
    top:0;
    left:100%;
    margin-left: 5px;
  }
</style>