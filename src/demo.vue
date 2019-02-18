<template>
  <div style="margin:200px;">
    <m-popover position="left" trigger="hover">
      <template slot="content">
        <div>左方出现的提示信息</div>
      </template>
      <template>
        <m-button>左方</m-button>
      </template>
    </m-popover>
  </div>
</template>
<script>
import db from "../tests/fixture/db";
import MPopover from './popover';
import MButton from './button/button';
//db里面的parent_id 0 是第一级别省 省的id对应的是市的parent_id
// function ajax(parentId = 0){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let id = db.filter((item)=>item.parent_id == parentId) //过滤出来所有的省
//       id.forEach(node=>{ //查看是不是叶子节点 叶子节点就是没有子元素 添加isLeaf
//         if(db.filter((item)=>item.parent_id == node.id).length > 0){
//           node.isLeaf = false    //看市的parent_id是否等于省的id filter返回数组 看有无children
//         }else{
//           node.isLeaf = true
//         }
//       })
//       resolve(id)
//     },3000)
//   })
// }

export default {
  name:'demo',
  components:{
    'm-popover':MPopover,
    'm-button': MButton,
  },
  data(){
    return{

    }
  },
  destroyed(){
  },
  mounted(){

  },
  methods:{
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


