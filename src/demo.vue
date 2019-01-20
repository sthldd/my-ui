<template>
  <div style="padding-top:20px;padding-left:100px;">
    <m-tabs>
      <m-tabs-head>
        <m-tabs-item name="tech">科技</m-tabs-item>
        <m-tabs-item name="finance">财经</m-tabs-item>
        <m-tabs-item name="sport">体育</m-tabs-item>
      </m-tabs-head>
      <m-tabs-body>
        <m-tabs-pane name="tech">
          <p>科技板块内容</p>
        </m-tabs-pane>
        <m-tabs-pane name="finance">
          <p>财经板块内容</p>
        </m-tabs-pane>
        <m-tabs-pane name="sport">
          <p>体育板块内容</p>
        </m-tabs-pane>
      </m-tabs-body>
    </m-tabs>
  </div>
</template>
<script>
import Cascader from './cascader';
import Button from "./button";
import Input from "./input";
import db from "./db";
import Tabs from './tabs'
import Tabshead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';
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
    "m-cascader":Cascader,
    "m-input":Input,
    'm-tabs':Tabs,
    'm-tabs-head': Tabshead,
    'm-tabs-body': TabsBody,
    'm-tabs-item': TabsItem,
    'm-tabs-pane': TabsPane
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
    font-size:14px;
  }
  body{
    font-size: 14px;
  }
</style>


