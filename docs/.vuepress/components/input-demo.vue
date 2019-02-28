<template>
  <div>
    <p>通过鼠标或键盘输入字符</p>
    <h3 class="section">基础用法</h3>
    <div class="demo-wrapper">
      <m-input></m-input>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">禁用状态</h3>
    <div class="demo-wrapper">
      <m-input disabled></m-input>
      <pre><code>{{code2}}</code></pre>
    </div>
    <h3 class="section">输入值</h3>
    <div class="demo-wrapper">
      <m-input value="请输入内容" ></m-input>
      <pre><code>{{code3}}</code></pre>
    </div>
    <h3 class="section">只读</h3>
    <div class="demo-wrapper">
      <m-input :readonly="true" value="请输入内容"></m-input>
      <pre><code>{{code4}}</code></pre>
    </div>
    <h3 class="section">错误提示</h3>
    <div class="demo-wrapper">
      <m-input error="请输入正确的用户名"></m-input>
      <pre><code>{{code4}}</code></pre>
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
        <td>value</td>
        <td>绑定值</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>输入框占位文本</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>是否只读</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>
    <h3 class="section">事件 Event</h3>
    <table class="table">
      <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>input</td>
        <td>在 Input 值改变时触发</td>
        <td>(value: string | number)</td>
      </tr>
      <tr>
        <td>change</td>
        <td>Input 值改变后触发 blu r或 focus 时触发 change 事件</td>
        <td>(value: string | number)</td>
      </tr>
      <tr>
        <td>focus</td>
        <td>在 Input 获得焦点时触发</td>
        <td>(value: string | number)</td>
      </tr>
      <tr>
        <td>blur</td>
        <td>在 Input 失去焦点时触发</td>
        <td>(value: string | number)</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        name: "input-demo",
        components:{
            'm-input':Input
        },
        data(){
            return{
                code1:`<m-input></m-input>`,
                code2:`<m-input disabled></m-input>`,
                code3:`<m-input value="请输入内容" ></m-input>`,
                code4:`<m-input readonly value="请输入内容"></m-input>`,
                code5:`<m-input error="请输入正确的用户名"></m-input>`
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