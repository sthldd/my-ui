<template>
  <div style="padding-top:20px;padding-left:100px;">
    <m-cascader :source.sync="source" popover-height="200px"
    :selected.sync="selected" :load-data="loadData"></m-cascader>
  </div>
</template>
<script>
import Cascader from './cascader';
import Button from "./button";
import db from "./db";
import {removeEventListener} from './click-outside'
//db里面的parent_id 0 是第一级别省 省的id对应的是市的parent_id
function ajax(parentId = 0){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let id = db.filter((item)=>item.parent_id == parentId) //过滤出来所有的省
      id.forEach(node=>{ //查看是不是叶子节点 叶子节点就是没有子元素 添加isLeaf
        if(db.filter((item)=>item.parent_id == node.id).length > 0){
          node.isLeaf = false    //看市的parent_id是否等于省的id filter返回数组 看有无children
        }else{
          node.isLeaf = true
        }
      })
      resolve(id)
    },3000)
  })
}

export default {
  name:'demo',
  components:{
    "m-button":Button,
    "m-cascader":Cascader
  },
  data(){
    return{
      selected:[],
      source:[]
    }
  },
  created() {
    ajax(0).then((data)=>{
      this.source = data
    })
  },
  destroyed(){
    removeEventListener()
  },
  methods:{
    loadData(item,upDateSource){
      let {id} = item
      ajax(id).then((result)=>{
        upDateSource(result)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    --font-size:14px;
  }
  body{
    font-size: var( --font-size);
  }
</style>


