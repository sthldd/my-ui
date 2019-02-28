<template>
  <div>
    <p>通过折叠面板收纳内容区域</p>
    <h3 class="section">基础用法</h3>
    <p>可同时展开多个面板，面板之间不影响</p>
    <div class="demo-wrapper">
      <m-collapse :selected.sync="selectedTabTwo">
        <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
        <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
        <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
      </m-collapse>
      <pre><code>{{code2}}</code></pre>
    </div>
    <h3 class="section">手风琴效果</h3>
    <p>每次只能展开一个面板</p>
    <div class="demo-wrapper">
      <m-collapse :selected.sync="selectedTab" :single="true">
        <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
        <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
        <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
      </m-collapse>
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
        <td>single</td>
        <td>只开启单个</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>selectedTab</td>
        <td>数据存放数组</td>
        <td>Array</td>
        <td>—</td>
        <td>[]</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import MCollapse from  '../../../src/collapse/collapse'
    import MCollapseItem from  '../../../src/collapse/collapse-item'
    export default {
        name: "input-demo",
        components:{
            MCollapse,MCollapseItem
        },
        data(){
            return{
                selectedTab: ['1'],
                selectedTabTwo: ['1','2'],
                code1:`
<m-collapse :selected.sync="selectedTab" :single="true">
  <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
  <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
  <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
</m-collapse>
                `,
                code2:`
<m-collapse :selected.sync="selectedTabTwo">
  <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
  <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
  <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
</m-collapse>
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