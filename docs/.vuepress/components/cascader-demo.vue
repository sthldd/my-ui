<template>
  <div>
    <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
    <h3 class="section">基础用法</h3>
    <div class="demo-wrapper">
      <m-cascader :source.sync="source" popover-height="200px" :selected.sync="selected" :load-data="loadData">
      </m-cascader>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">属性 Attributes</h3>
    <table class="table">
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>source</td>
        <td>传给选择器的数据</td>
        <td>Array</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>popoverHeight</td>
        <td>选择器的高度</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>selected</td>
        <td>选择的数组</td>
        <td>Array</td>
        <td>—</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>loadData</td>
        <td>回调数据</td>
        <td>Function</td>
        <td>—</td>
        <td>—</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import db from "../../../tests/fixture/db";
    import MCascader from '../../../src/cascader/cascader';
    import MCascaderItem from '../../../src/cascader/cascader-item';
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
        name: "cascader-demo",
        components:{
            MCascader,MCascaderItem
        },
        created () {
            ajax(0).then(result => {
                this.source = result
            })
        },
        methods: {
            loadData({id}, updateSource) {
                ajax(id).then(result => {
                    console.log(result)
                    updateSource(result) // 回调:把别人传给我的函数调用一下
                })

            }
        },
        data(){
            return{
                selected: [],
                source: [],
                code1:`
<m-cascader :source.sync="source" popover-height="200px" :selected.sync="selected" :load-data="loadData">
</m-cascader>
<script>
  function ajax(parentId = 0){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let id = db.filter((item)=>item.parent_id == parentId)
        id.forEach(node=>{
          if(db.filter((item)=>item.parent_id == node.id).length > 0){
            node.isLeaf = false
          }else{
            node.isLeaf = true
          }
        })
        resolve(id)
      },3000)
    })
  }
  export default {
    data(){
      return{
        selected: [],
        source: [],
      }
    },
    methods: {
        loadData({id}, updateSource) {
            ajax(id).then(result => {
                console.log(result)
                updateSource(result)
            })
        }
    },
     created () {
        ajax(0).then(result => {
            console.log(result)
            this.source = result
        })
     },
  }
<\\/script>
                `,
            }
        }
    }
</script>

<style scoped lang="scss">
  *{box-sizing: border-box}
  .section {
    margin-top: 50px;
  }
  .demo-wrapper {
    padding: 24px;
    border: 1px solid #ebebeb;
  }
  .table {
    width:100%;
    th {
      min-width: 50px;
      text-align: left
    }
  }
</style>