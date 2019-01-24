<template>
  <div>
    <m-slides :selected.sync="selected" class="wrapper">
      <m-slides-item name="1">
        <div class="demo">1</div>
      </m-slides-item>
      <m-slides-item name="2">
        <div class="demo">2</div>
      </m-slides-item>
      <m-slides-item name="3">
        <div class="demo">3</div>
      </m-slides-item>
    </m-slides>
  </div>
</template>
<script>
import db from "./db";
import Slides from './slides';
import SlidesItem from './slides-item';
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
    'm-slides':Slides,
    'm-slides-item':SlidesItem
  },
  data(){
    return{
        selected:undefined
    }
  },
  destroyed(){
  },
  mounted(){

  },
  methods:{
    // loadData(item,upDateSource){
    //   let {id} = item
    //   ajax(id).then((result)=>{
    //     upDateSource(result)
    //   })
    // }
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
  .wrapper{
    margin:0 40px;
  }
  .demo{
    width:100%;
    height:350px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
  }
</style>


