<template>
  <div>
    <m-pager :total-page="20" :current-page="20" style="margin:40px;"></m-pager>
  </div>
</template>
<script>
import db from "../tests/fixture/db";
import MPager from './pager';
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
    'm-pager':MPager,
  },
  data(){
    return{
        selected:'culture'
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


