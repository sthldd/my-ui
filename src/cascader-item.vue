<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div v-for="item in items" class="label" @click="leftSelected = item">
        {{item.name}}
      <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right">
      <div v-if="rightItems">
        <m-cascader-item :items="rightItems" :height="height"> </m-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: "MCascaderItem",
    components:{Icon},
    props: {
      items: {
        type: Array
      },
      height:{
        type: String
      }
    },
    data(){
      return{
        leftSelected:'',
      }
    },
    computed:{
      rightItems(){
        if(this.leftSelected && this.leftSelected.children){
          return this.leftSelected.children
        }else{
          return null
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height:100px;
    .left{
      height:100%;
      padding:.3em 0;

    }
    .right{
      height:100%;
      border-left: 1px solid #E8E8E8;
    }
    .label{
      padding:.3em 1em;
      display: flex;
      align-items: center;
      .icon{
        margin-left: 1em;
        transform: scale(0.8);
      }
    }
  }
</style>