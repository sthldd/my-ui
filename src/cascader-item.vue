<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div v-for="item in items" class="label" @click="onClickLabel(item)">
        {{item.name}}
      <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right">
      <div v-if="rightItems">
        <m-cascader-item :items="rightItems" :height="height" :level="level+1"
        :selected="selected" @update:selected="onUpdateSelected"
        > </m-cascader-item>
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
      },
      selected:{
        type:Array,
        default:()=>{return []}
      },
      level:{
        type:Number,
        default:0
      }
    },
    computed:{
      rightItems(){
        let currentSelected = this.selected[this.level]
        if(currentSelected  && currentSelected.children){
          return currentSelected.children
        }else{
          return null
        }
      }
    },
    methods:{
      onClickLabel(item){
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level +1)
        this.$emit('update:selected',copy)
      },
      onUpdateSelected(newSelected){
        this.$emit('update:selected',newSelected)
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
      overflow: auto;
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