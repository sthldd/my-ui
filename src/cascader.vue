<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item
      :items="source" :height="popoverHeight" :selected="selected"
      @update:selected="onUpdateChange"
      > </cascader-item>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-item'
  export default {
    name: 'MCascader',
    components: {CascaderItem},
    data(){
      return{
        popoverVisible:false,
      }
    },
    props: {
      source: {
        type: Array
      },
      popoverHeight:{
        type: String
      },
      selected:{
        type:Array,
        default:()=>{return []}
      }
    },
    methods:{
      onUpdateChange(newSelected){
        this.$emit('update:selected',newSelected)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "var";
  .cascader{
    position: relative;
    .trigger{
      border:1px solid #D9D9D9;
      height:30px;
      width:100px;
    }
    .popover{
      position: absolute;
      display: flex;
      top:100%;
      left: 0;
      background-color: white;
      @extend .box-shadow;
      .label{
        border:1px solid;
        white-space: nowrap;
      }
    }
  }
</style>


