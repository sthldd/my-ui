<template>
  <div class="m-sub-nav">
    <span @click="onClick">
       <slot name="title"></slot>
    </span>
    <div class="m-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MSubNav",
        data(){
            return{
                open:false
            }
        },
        methods:{
            onClick(){
                this.open = !this.open
            }
        }
    }
</script>

<style scoped lang="scss">
  .m-sub-nav{
    position: relative;
    padding: 10px 20px;
    >span{
      padding: 10px 20px;
      vertical-align: top;
    }
    &-popover{
       position: absolute;
       white-space: nowrap;
       top:100%;
       left:0;
       border:1px solid red;
     }
  }
</style>