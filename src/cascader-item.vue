<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div v-for="item in items" class="label" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
          <span class="icons">
            <template v-if="item.name === loadingItem.name">
              <icon class="loading" name="loading"></icon>
            </template>
            <template v-else>
              <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
            </template>
          </span>
      </div>
    </div>
    <div class="right">
      <div v-if="rightItems">
        <m-cascader-item :items="rightItems" :height="height" :level="level+1"
        :selected="selected" @update:selected="onUpdateSelected" :loading-item = "loadingItem"
                         :load-data="loadData"
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
      loadingItem:{
          type:Object,
          default:()=>({})
      },
      level:{
        type:Number,
        default:0
      },
      loadData:{
        type:Function
      }
    },
    computed:{  //点击两次才出现 因为computed计算的selected和level没有变 所以要从items更新
      rightItems(){ //点击的对象和数据做对比
        if(this.selected[this.level]){
          let selected = this.items.filter((item)=>{
            return item.name === this.selected[this.level].name
          })
          if(selected && selected[0].children && selected[0].children.length > 0){
            return selected[0].children
          }
        }
      },

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
      },
      rightArrowVisible(item){
        return this.loadData ? !item.isLeaf :item.children
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height:100px;
    overflow: hidden;
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
      padding:.5em 1em;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      &:hover{
        background: #eee;
      }
      >.name{
        margin-right: 1em;
        user-select: none;
      }
      .icons{
        margin-left: auto;
        >.next{
          transform: scale(0.8);
        }
        >.loading{
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style>