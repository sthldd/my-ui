<template>
  <div style="margin:100px;">
    <p class="error-message">{{error}}</p>
    <m-uploader accept="image/*" method="POST" action="https://node-server-mlx.herokuapp.com/upload" name="file"
      :parseResponse="parseResponse" :file-list.sync="fileList" @error="error=$event" :size-limit="1024*1024">
      <m-button>
        <m-icon name="upload"></m-icon>
        上传
      </m-button>
      <template slot="tips">
        <div>只能上传300kb以内的文件</div>
      </template>
    </m-uploader>
  </div>
</template>
<script>
import db from "../tests/fixture/db";
import MUploader from './uploader';
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
import MButton from  './button/button'
import MIcon from  './icon'
export default {
  name:'demo',
  components:{
    'm-uploader':MUploader,
    'm-button':MButton,
    MIcon,
  },
  data(){
    return{
        fileList:[],
        error:''
    }
  },
  destroyed(){
  },
  mounted(){

  },
  methods:{
      parseResponse(response){
        let object = JSON.parse(response)
        let url = `https://node-server-mlx.herokuapp.com/preview/${object.key}`
        return url
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
  .error-message{
    color: red;
  }
</style>


