<template>
    <div>
        <h3 class="section">基础用法</h3>
        <p>基础的按钮用法。</p>
        <div class="demo-wrapper">
            <m-button>默认按钮</m-button>
            <pre><code>{{code1}}</code></pre>
        </div>
        <h3 class="section">禁用状态</h3>
        <p>按钮不可用状态。</p>
        <div class="demo-wrapper">
            <m-button disabled>设置</m-button>
            <pre><code>{{code2}}</code></pre>
        </div>

        <h3 class="section">加载状态</h3>
        <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
        <div class="demo-wrapper">
            <m-button :loading="true">设置</m-button>
            <pre><code>{{code3}}</code></pre>
        </div>

        <h3 class="section">图标按钮</h3>
        <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
        <div class="demo-wrapper">
            <m-button icon="setting">设置</m-button>
            <m-button icon="download">下载</m-button>
            <m-button icon="left">上一页</m-button>
            <m-button icon="right">下一页</m-button>
            <m-button icon="setting" iconPosition="right">设置</m-button>
            <pre><code>{{code4}}</code></pre>
        </div>
        <h3 class="section">按钮组</h3>
        <p>以按钮组的方式出现，常用于多项类似操作。</p>
        <div class="demo-wrapper">
            <m-button-group>
                <m-button icon="left">上一页</m-button>
                <m-button icon="download">下载</m-button>
                <m-button icon="right">下一页</m-button>
            </m-button-group>
            <pre><code>{{code5}}</code></pre>
        </div>
        <h3 class="section">Attributes</h3>
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
                <td>icon</td>
                <td>图标</td>
                <td>string</td>
                <td>setting / download / left / right</td>
                <td>—</td>
            </tr>
            <tr>
                <td>iconPosition</td>
                <td>图标位置</td>
                <td>string</td>
                <td>left / right</td>
                <td>left</td>
            </tr>
            <tr>
                <td>loading</td>
                <td>是否显示加载状态</td>
                <td>boolean</td>
                <td>true / false</td>
                <td>false</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'
    import ButtonGroup from "../../../src/button/button-group";
    export default {
        components:{
            'm-button':Button,
            'm-button-group':ButtonGroup
        },
        data(){
            return{
                code1:`<m-button>默认按钮</m-button>`,
                code2: `<m-button disabled>设置</m-button>`.trim(),
                code3:`<m-button :loading="true">设置</m-button>`,
                code4:`
<m-button icon="settings">设置</m-button>
<m-button icon="download">下载</m-button>
<m-button icon="left">上一页</m-button>
<m-button icon="right">下一页</m-button>
<m-button icon="settings" iconPosition="right">设置</m-button>
                `.trim(),
                code5:`
<m-button-group>
    <m-button icon="left">上一页</m-button>
    <m-button icon="download">下载</m-button>
    <m-button icon="right">下一页</m-button>
</m-button-group>
                `.trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .m-button {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .m-button-group {
        .m-button {
            margin-right: 0;
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