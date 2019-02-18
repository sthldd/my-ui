<template>
  <div>
    <p>当数据量过多时，使用分页分解数据。</p>
    <h3 class="section">页数较少时的效果</h3>
    <div class="demo-wrapper">
      <m-pager :total-page="6" :current-page.sync="currentPage"></m-pager>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">大于 6 页时的效果</h3>
    <div class="demo-wrapper">
      <m-pager :total-page="20" :current-page.sync="currentPage"></m-pager>
      <pre><code>{{code2}}</code></pre>
    </div>
    <h3 class="section">输入值</h3>
    <p><code>hide-if-one-page</code>只有一页时，是否展示</p>
    <div class="demo-wrapper">
      <m-pager :total-page="1" :current-page="1" :hide-if-one-page="false"></m-pager>
      <pre><code>{{code3}}</code></pre>
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
        <td>total-page</td>
        <td>总条目数</td>
        <td>number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>current-page</td>
        <td>当前页数，支持 .sync 修饰符</td>
        <td>number</td>
        <td>—</td>
        <td>1</td>
      </tr>
      <tr>
        <td>hide-if-one-page</td>
        <td>只有一页是否展示</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>true</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import Input from '../../../src/input'
    import MPager from '../../../src/pager'
    export default {
        name: "input-demo",
        components:{
            'm-input':Input,
            'm-pager':MPager,
        },
        data(){
            return{
                currentPage:3,
                code1:`<m-pager :total-page="6" :current-page.sync="currentPage"></m-pager>`,
                code2:`<m-pager :total-page="20" :current-page.sync="currentPage"></m-pager>`,
                code3:` <m-pager :total-page="1" :current-page="1" hideIfOnePage></m-pager>`,
            }
        }
    }
</script>

<style scoped lang="scss">
  *{
    box-sizing: border-box;
  }
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