<template>
  <div>
    <p>为网站提供导航功能的菜单。</p>
    <h3 class="section">基础用法</h3>
    <div class="demo-wrapper">
      <m-nav :selected.sync="selected">
        <m-nav-item name="head">首页</m-nav-item>
        <m-sub-nav name="tel">
          <template slot="title">联系方式</template>
          <m-nav-item name="qq">QQ</m-nav-item>
          <m-nav-item name="phone">Phone</m-nav-item>
          <m-sub-nav name="whichWechat">
            <template slot="title">WeChat</template>
            <m-nav-item name="selfwechat">个人WeChat</m-nav-item>
            <m-nav-item name="companywechat">企业WeChat</m-nav-item>
          </m-sub-nav>
        </m-sub-nav>
        <m-nav-item name="detail">个人详情</m-nav-item>
      </m-nav>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">垂直菜单</h3>
    <p><code>vertical</code>改变nav方向</p>
    <div class="demo-wrapper">
      <m-nav :selected.sync="selected" vertical>
        <m-nav-item name="head">首页</m-nav-item>
        <m-sub-nav name="tel">
          <template slot="title">联系方式</template>
          <m-nav-item name="qq">QQ</m-nav-item>
          <m-nav-item name="phone">Phone</m-nav-item>
          <m-sub-nav name="whichWechat">
            <template slot="title">WeChat</template>
            <m-nav-item name="selfwechat">个人WeChat</m-nav-item>
            <m-nav-item name="companywechat">企业WeChat</m-nav-item>
          </m-sub-nav>
        </m-sub-nav>
        <m-nav-item name="detail">个人详情</m-nav-item>
      </m-nav>
      <pre><code>{{code2}}</code></pre>
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
  </div>
</template>

<script>
    import MNav from '../../../src/nav/nav';
    import MNavItem from '../../../src/nav/nav-item';
    import MSubNav from '../../../src/nav/sub-nav';
    export default {
        name: "input-demo",
        components:{
            'm-nav':MNav,
            'm-nav-item':MNavItem,
            'm-sub-nav':MSubNav,
        },
        data(){
            return{
                selected:'head',
                code1:`
<m-nav :selected.sync="selected">
  <m-nav-item name="head">首页</m-nav-item>
  <m-sub-nav name="tel">
    <template slot="title">联系方式</template>
    <m-nav-item name="qq">QQ</m-nav-item>
    <m-nav-item name="phone">Phone</m-nav-item>
    <m-sub-nav name="whichWechat">
      <template slot="title">WeChat</template>
      <m-nav-item name="selfwechat">个人WeChat</m-nav-item>
      <m-nav-item name="companywechat">企业WeChat</m-nav-item>
    </m-sub-nav>
  </m-sub-nav>
  <m-nav-item name="detail">个人详情</m-nav-item>
</m-nav>
<script>
  export default {
    data(){
      return{
        selected:'head',
      }
    }
  }
<\\/script>
                `,
                code2:`
<m-nav :selected.sync="selected" vertical>
  <m-nav-item name="head">首页</m-nav-item>
  <m-sub-nav name="tel">
    <template slot="title">联系方式</template>
    <m-nav-item name="qq">QQ</m-nav-item>
    <m-nav-item name="phone">Phone</m-nav-item>
    <m-sub-nav name="whichWechat">
      <template slot="title">WeChat</template>
      <m-nav-item name="selfwechat">个人WeChat</m-nav-item>
      <m-nav-item name="companywechat">企业WeChat</m-nav-item>
    </m-sub-nav>
  </m-sub-nav>
  <m-nav-item name="detail">个人详情</m-nav-item>
</m-nav>
<script>
  export default {
    data(){
      return{
        selected:'head',
      }
    }
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