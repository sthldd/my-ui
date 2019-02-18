<template>
    <div>
        <h3 class="section">基础用法</h3>
        <p>使用单一分栏创建基础的栅格布局。</p>
        <div class="demo-wrapper">
            <m-row>
                <m-col span="24"><div class="grid-content bg-purple-dark"></div></m-col>
            </m-row>
            <m-row>
                <m-col span="12"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="12"><div class="grid-content bg-purple-light"></div></m-col>
            </m-row>
            <m-row>
                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="8"><div class="grid-content bg-purple-light"></div></m-col>
                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
            <m-row>
                <m-col span="6"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="6"><div class="grid-content bg-purple-light"></div></m-col>
                <m-col span="6"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="6"><div class="grid-content bg-purple-light"></div></m-col>
            </m-row>
            <m-row>
                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>
            </m-row>
            <pre><code>{{code1}}</code></pre>
        </div>
        <h3 class="section">分栏间隔</h3>
        <p>分栏之间存在间隔。</p>
        <div class="demo-wrapper">
            <m-row :gutter="20">
                <m-col :span="5"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="5"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="5"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="5"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
            <pre><code>{{code2}}</code></pre>
        </div>
        <h3 class="section">混合布局</h3>
        <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
        <div class="demo-wrapper">
            <m-row :gutter="20">
                <m-col :span="16"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="8"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
            <m-row :gutter="20">
                <m-col :span="8"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="8"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="4"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="4"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
            <m-row :gutter="20">
                <m-col :span="4"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="16"><div class="grid-content bg-purple"></div></m-col>
                <m-col :span="4"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
            <pre><code>{{code3}}</code></pre>
        </div>
        <h3 class="section">响应式布局</h3>
        <p>预设了五个响应尺寸：phone、ipad、narrow-pc、pc 和 wide-pc。</p>
        <div class="demo-wrapper">
            <m-row :gutter="20">
                <m-col span :phone="{span:24}" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span:2}" :wide-pc="{span:1}">
                    <div class="grid-content bg-purple"></div>
                </m-col>
                <m-col :span="22" :phone="{span:24}" :ipad="{span:16}" :narrow-pc="{span:20}" :pc="{span:22}" :wide-pc="{span:23}">
                    <div class="grid-content bg-purple"></div>
                </m-col>
            </m-row>
            <pre><code>{{code4}}</code></pre>
        </div>
        <h3 class="section">Row Attributes</h3>
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
                <td>gutter</td>
                <td>栅格间隔</td>
                <td>number</td>
                <td>—</td>
                <td>0</td>
            </tr>
            </tbody>
        </table>
        <h3 class="section">Col Attributes</h3>
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
                <td>span</td>
                <td>栅格占据的列数</td>
                <td>number</td>
                <td>—</td>
                <td>24</td>
            </tr>
            <tr>
                <td>offset</td>
                <td>栅格左侧的间隔格数</td>
                <td>number</td>
                <td>—</td>
                <td>0</td>
            </tr>
            <tr>
                <td>phone</td>
                <td><768px响应式栅格数或者栅格属性对象</td>
                <td>number/object (例如： {span: 4, offset: 4})</td>
                <td>—</td>
                <td>-</td>
            </tr>
            <tr>
                <td>ipad</td>
                <td>≥768px响应式栅格数或者栅格属性对象</td>
                <td>number/object (例如： {span: 4, offset: 4})</td>
                <td>—</td>
                <td>-</td>
            </tr>
            <tr>
                <td>narrow-pc</td>
                <td>≥992px 响应式栅格数或者栅格属性对象</td>
                <td>number/object (例如： {span: 4, offset: 4})</td>
                <td>—</td>
                <td>-</td>
            </tr>
            <tr>
                <td>pc</td>
                <td>≥1200px 响应式栅格数或者栅格属性对象</td>
                <td>number/object (例如： {span: 4, offset: 4})</td>
                <td>—</td>
                <td>-</td>
            </tr><tr>
                <td>wide-pc</td>
                <td>≥1920px 响应式栅格数或者栅格属性对象</td>
                <td>number/object (例如： {span: 4, offset: 4})</td>
                <td>—</td>
                <td>-</td>
            </tr>

            </tbody>
        </table>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'
    import ButtonGroup from "../../../src/button/button-group";
    import Row from '../../../src/grid/row'
    import Col from "../../../src/grid/col";
    export default {
        components:{
            'm-button':Button,
            'm-button-group':ButtonGroup,
            'm-row':Row,
            'm-col':Col,
        },
        data(){
            return{
                code1:
                                `<m-row>
                <m-col span="24"><div class="grid-content bg-purple-dark"></div></m-col>
                </m-row>
                <m-row>
                  <m-col span="12"><div class="grid-content bg-purple"></div></m-col>
                  <m-col span="12"><div class="grid-content bg-purple-light"></div></m-col>
                </m-row>
                <m-row>
                  <m-col span="8"><div class="grid-content bg-purple"></div></m-col>
                  <m-col span="8"><div class="grid-content bg-purple-light"></div></m-col>
                  <m-col span="8"><div class="grid-content bg-purple"></div></m-col>
                </m-row>
                <m-row>
                  <m-col span="6"><div class="grid-content bg-purple"></div></m-col>
                  <m-col span="6"><div class="grid-content bg-purple-light"></div></m-col>
                  <m-col span="6"><div class="grid-content bg-purple"></div></m-col>
                  <m-col span="6"><div class="grid-content bg-purple-light"></div></m-col>
                </m-row>
                <m-row>
                  <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                  <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>
                  <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                  <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>
                  <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                  <m-col span="4"><div class="grid-content bg-purple-light"></div></m-col>
                </m-row>
 `.replace(/^ {8}/gm, "").trim(),
                code2: ` <m-row :gutter="20">
                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="5"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
 `.replace(/^ {8}/gm, "").trim(),
                code3:`
                <m-row :gutter="20">
                <m-col span="16"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
            <m-row :gutter="20">
                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="8"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
            <m-row :gutter="20">
                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="16"><div class="grid-content bg-purple"></div></m-col>
                <m-col span="4"><div class="grid-content bg-purple"></div></m-col>
            </m-row>
                `,
                code4:`
            <m-row :gutter="20">
    <m-col span="2" :phone="{span:24}" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span:2}" :wide-pc="{span:1}">
        <div class="grid-content bg-purple"></div>
    </m-col>
    <m-col span="22" :phone="{span:24}" :ipad="{span:16}" :narrow-pc="{span:20}" :pc="{span:22}" :wide-pc="{span:23}">
        <div class="grid-content bg-purple"></div>
    </m-col>
</m-row>
                `.trim(),
            }
        }
    }
</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
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
    .m-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>