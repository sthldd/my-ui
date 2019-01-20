<template>
  <div>
    <p>选项卡切换组件。</p>
    <h3 class="section">基础用法</h3>
    <div class="demo-wrapper">
      <m-tabs selected="first">
        <m-tabs-head>
          <m-tabs-item name="first">Tab 1</m-tabs-item>
          <m-tabs-item name="second">Tab 2</m-tabs-item>
          <m-tabs-item name="third">Tab 3</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="first">
            <p>Tab1内容</p>
          </m-tabs-pane>
          <m-tabs-pane name="second">
            <p>Tab2内容</p>
          </m-tabs-pane>
          <m-tabs-pane name="third">
            <p>Tab3内容</p>
          </m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">禁用</h3>
    <div class="demo-wrapper">
      <m-tabs selected="first">
        <m-tabs-head>
          <m-tabs-item name="first">Tab 1</m-tabs-item>
          <m-tabs-item name="second" disabled>Tab 2</m-tabs-item>
          <m-tabs-item name="third">Tab 3</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="first">
            <p>Tab1内容</p>
          </m-tabs-pane>
          <m-tabs-pane name="second">
            <p>Tab2内容</p>
          </m-tabs-pane>
          <m-tabs-pane name="third">
            <p>Tab3内容</p>
          </m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
      <pre><code>{{code2}}</code></pre>
    </div>
  </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import Tabshead from '../../../src/tabs-head';
    import TabsBody from '../../../src/tabs-body';
    import TabsItem from '../../../src/tabs-item';
    import TabsPane from '../../../src/tabs-pane';
    export default {
        name: "tabs-demo",
        components:{
            'm-tabs':Tabs,
            'm-tabs-head': Tabshead,
            'm-tabs-body': TabsBody,
            'm-tabs-item': TabsItem,
            'm-tabs-pane': TabsPane
        },
        data(){
            return{
                code1:`
<m-tabs selected="first">
    <m-tabs-head>
        <m-tabs-item name="first">Tab 1</m-tabs-item>
        <m-tabs-item name="second">Tab 2</m-tabs-item>
        <m-tabs-item name="third">Tab 3</m-tabs-item>
    </m-tabs-head>
    <m-tabs-body>
        <m-tabs-pane name="first">
            <p>Tab1内容</p>
        </m-tabs-pane>
        <m-tabs-pane name="second">
            <p>Tab2内容</p>
        </m-tabs-pane>
        <m-tabs-pane name="third">
            <p>Tab3内容</p>
        </m-tabs-pane>
    </m-tabs-body>
</m-tabs>
                `,
                code2:`
<m-tabs selected="first">
    <m-tabs-head>
        <m-tabs-item name="first">Tab 1</m-tabs-item>
        <m-tabs-item name="second" disabled>Tab 2</m-tabs-item>
        <m-tabs-item name="third">Tab 3</m-tabs-item>
    </m-tabs-head>
    <m-tabs-body>
        <m-tabs-pane name="first">
            <p>Tab1内容</p>
        </m-tabs-pane>
        <m-tabs-pane name="second">
            <p>Tab2内容</p>
        </m-tabs-pane>
        <m-tabs-pane name="third">
            <p>Tab3内容</p>
        </m-tabs-pane>
    </m-tabs-body>
</m-tabs>
                `,
                // code3:`<m-tabs value="请输入内容" ></m-tabs>`,
                // code4:`<m-tabs readonly value="请输入内容"></m-tabs>`,
                // code5:`<m-tabs error="请输入正确的用户名"></m-tabs>`
            }
        }
    }
</script>

<style scoped lang="scss">
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