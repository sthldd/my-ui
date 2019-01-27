<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{result || '&nbsp;'}}
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item
      :items="source" :height="popoverHeight" :selected="selected"
      @update:selected="onUpdateChange"
      :loadData="loadData" :loading-item = "loadingItem"
      > </cascader-item>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-item'
  import ClickOutside from '../click-outside'

  export default {
    name: 'MCascader',
    components: {CascaderItem},
    directives: {ClickOutside},
    data(){
      return{
        popoverVisible:false,
        loadingItem:{},
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
      },
      loadData:{
        type:Function
      }
    },
    methods:{
      close(){
        this.popoverVisible = false
      },
      open(){
        this.popoverVisible = true
      },
      toggle(){
        if(this.popoverVisible === true){
          this.close()
        }else{
          this.open()
        }
      },
      onUpdateChange(newSelected){
        this.$emit('update:selected',newSelected) //告诉父亲 更新了
        let lastItem = newSelected[newSelected.length  - 1] //点击的当前项
        let simplest = (children,id)=>{ //看看有无children
          return children.filter(item =>
                  item.id === id)[0]
        }
        let complex =  (children,id)=>{
          let noChildren = []
          let hasChildren = []
          children.forEach(item=>{ //遍历当前项有无children
            if(item.children){
              hasChildren.push(item)
            }else{
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren,id) //看item有没有children

          if(found){ //如果没有children就返回
            return found
          }else{ //有children就用复杂的complex来找
            found = simplest(hasChildren,id)
            if(found){
              return found
            }else{
              for(var i = 0;i<hasChildren.length;i++){
                found = complex(hasChildren[i].children,id)
                if(found){
                  return found
                }
              }
              return undefined
            }
          }
        }

        let upDateSource = (result)=>{
          this.loadingItem = {}
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copy,lastItem.id) //copy是所有的数据
          toUpdate.children=result
          this.$emit('update:source',copy)
        }
        if(!lastItem.isLeaf && this.loadData){
          this.loadData(lastItem,upDateSource) //不是叶子才加载数据
          this.loadingItem = lastItem
        }
      }
    },
    computed:{
      result(){
        return this.selected.map((item)=>{
          return item.name
        }).join('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../var";
  .cascader{
    position: relative;
    border:1px solid red;
    display: inline-block;
    .trigger{
      border:1px solid #D9D9D9;
      height:$input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 7em;
      border:1px solid $border-color;
      border-radius: $border-radius;
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


