<template>
  <div>
    <m-nav :selected.sync="selected">
      <m-nav-item name="home">首页</m-nav-item>
      <m-sub-nav name="about">
        <template slot="title">关于</template>
        <m-nav-item name="culture">企业文化</m-nav-item>
        <m-nav-item name="developers">开发团队</m-nav-item>
        <m-sub-nav name="phone">
          <template slot="title">联系电话</template>
          <m-nav-item name="qq">QQ</m-nav-item>
          <m-nav-item name="wechat">微信</m-nav-item>
          <m-sub-nav name="concat">
            <template slot="title">电话</template>
            <m-nav-item name="yi">移动</m-nav-item>
            <m-nav-item name="lian">联通</m-nav-item>
            <m-nav-item name="dian">电信</m-nav-item>
          </m-sub-nav>
        </m-sub-nav>
      </m-sub-nav>
      <m-nav-item name="fuck">去死</m-nav-item>
    </m-nav>
  </div>
</template>
<script>
import db from "../tests/fixture/db";
import Nav from './nav/nav';
import NavItem from './nav/nav-item';
import SubNav from './nav/sub-nav';
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
    'm-nav':Nav,
    'm-nav-item':NavItem,
    'm-sub-nav':SubNav,
  },
  data(){
    return{
        selected:['culture']
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


