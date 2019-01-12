<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item :items="source"></cascader-item>
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cascader{
    .trigger{
      border:1px solid red;
      height:30px;
      width:100px;
    }
    .popover{
      border:1px solid green ;
      height:200px;
      display: flex;
      .label{
         border:1px solid;
        white-space: nowrap;
      }
    }
  }
</style>


