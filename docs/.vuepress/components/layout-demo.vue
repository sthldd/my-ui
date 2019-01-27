<template>
  <div>
    <h2>组件概述</h2>
    <div>
      <p><span class="code" v-text="text1"></span>：布局容器，其下可嵌套 <span class="code" v-text="text6"></span> 时，可以放在任何父容器中。</p>
      <p><span class="code" v-text="text2"></span>：顶部布局。</p>
      <p><span class="code" v-text="text3"></span>：内容部分。</p>
      <p><span class="code" v-text="text4"></span>：侧边栏。</p>
      <p><span class="code" v-text="text5"></span>：底部布局。</p>
    </div>
    <h3 class="section">上中下布局</h3>
    <div class="demo-wrapper">
      <m-layout>
        <m-header>header</m-header>
        <m-content>content</m-content>
        <m-footer>footer</m-footer>
      </m-layout>
      <pre><code>{{code1}}</code></pre>
    </div>


    <div class="demo-wrapper">
      <m-layout>
        <m-sider>side</m-sider>
        <m-layout>
          <m-header>header</m-header>
          <m-content>content</m-content>
          <m-footer>footer</m-footer>
        </m-layout>
      </m-layout>
      <pre><code>{{code2}}</code></pre>
    </div>
    <div class="demo-wrapper">
      <m-layout>
        <m-header>header</m-header>
        <m-layout>
          <m-sider>side</m-sider>
          <m-layout>
            <m-content>content</m-content>
            <m-footer>footer</m-footer>
          </m-layout>
        </m-layout>
      </m-layout>
      <pre><code>{{code3}}</code></pre>
    </div>

    <h3 class="section">Attributes</h3>
    <p>layout组件默认没有样式，用户可以自行添加样式
    </p>
  </div>
</template>
<script>
    import Layout from "../../../src/layout/layout";
    import Header from "../../../src/layout/header";
    import Content from "../../../src/layout/content";
    import Sider from "../../../src/layout/sider";
    import Footer from "../../../src/layout/footer";
    export default {
        components: {
            'm-layout': Layout,
            'm-header': Header,
            'm-content': Content,
            'm-sider': Sider,
            'm-footer': Footer
        },
        data() {
            return {
                text1: 'm-layout',
                text2: 'm-header',
                text3: 'm-content',
                text4: 'm-sider',
                text5: 'm-footer',
                text6:  '<m-header>,<m-content>,<m-sider>,<m-footer>',
                code1:`
<m-layout>
          <m-header>header</m-header>
          <m-content>content</m-content>
          <m-footer>footer</m-footer>
</m-layout>`.replace(/^ {8}/gm, "").trim(),
                code2:`
<m-layout>
      <m-sider>side</m-sider>
      <m-layout>
                <m-header>header</m-header>
                <m-content>content</m-content>
                <m-footer>footer</m-footer>
      </m-layout>
</m-layout>`.replace(/^ {8}/gm, "").trim(),
                code3:
                    `
<m-layout>
    <m-header>header</m-header>
    <m-layout>
                <m-sider>side</m-sider>
            <m-layout>
            <m-content>content</m-content>
            <m-footer>footer</m-footer>
        </m-layout>`.replace(/^ {8}/gm, "").trim(),
            };
        },
        methods: {
        }
    };
</script>
<style lang="scss" scoped>
  .code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    color: #476582;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }
  .layout {
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background: #7dbcea;
      color: #fff;
    }
    .Content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      background: rgba(16, 142, 233, 1);
      color: #fff;
    }
    .sider {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      background: #3ba0e9;
      color: #fff;
    }
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background: #7dbcea;
      color: #fff;
    }
  }
  .section {
    margin-top: 50px;
  }
  .demo-wrapper {
    padding: 24px;
    border: 1px solid #ebebeb;
  }
  .table {
    th {
      min-width: 50px;
      text-align: left
    }
  }
</style>
