<template>
  <div>
    <h3 class="section">基础用法</h3>
    <p><code>position</code>来决定出现的位置<code>left,top,right,bottom</code></p>
    <div class="demo-wrapper">
      <m-popover position="bottom" trigger="click">
        <template slot="content">
          <div>这是一段文字</div>
        </template>
        <template>
          <m-button>cilck激活</m-button>
        </template>
      </m-popover>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">hover激活</h3>
    <p><code>position</code>来决定出现的位置<code>left,top,right,bottom</code></p>
    <div class="demo-wrapper">
      <m-popover position="top" trigger="hover">
        <template slot="content">
          <div>这是一段文字</div>
        </template>
        <template>
          <m-button>hover激活</m-button>
        </template>
      </m-popover>
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
        <td>trigger</td>
        <td>触发方式</td>
        <td>click/hover</td>
        <td>—</td>
        <td>click</td>
      </tr>
      <tr>
        <td>position</td>
        <td>内容出现的位置</td>
        <td>string</td>
        <td>top/left/bottom/right</td>
        <td>top</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import MPopover from '../../../src/popover';
    import MButton from '../../../src/button/button';
    export default {
        name: "popover-demo",
        components:{
            'm-popover':MPopover,
            'm-button': MButton,
        },
        data(){
            return{
                code1:`
<m-popover position="left" trigger="hover">
    <template slot="content">
        <div>这是一段文字</div>
    </template>
    <template>
        <m-button>cilck激活</m-button>
    </template>
</m-popover>
                `,
                code2:`
<m-popover position="left" trigger="hover">
    <template slot="content">
        <div>这是一段文字</div>
    </template>
    <template>
        <m-button>hover激活</m-button>
    </template>
</m-popover>
                `,
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