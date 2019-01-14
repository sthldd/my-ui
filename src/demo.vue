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

function ajax(parentId = 0){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let id = db.filter((item)=>item.parent_id == parentId)
      resolve(id)
    },0)
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


