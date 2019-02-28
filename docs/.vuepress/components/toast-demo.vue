<template>
    <div>
        <h3 class="section">基础用法</h3>
        <div class="demo-wrapper">
            <m-button @click="showToast1">top</m-button>
            <m-button @click="showToast2">middle</m-button>
            <m-button @click="showToast3">bottom</m-button>
            <pre><code>{{code1}}</code></pre>
        </div>
        <h3 class="section">延时关闭</h3>
        <p>使用<code>autoCloseDealy</code>延时关闭</p>
        <div class="demo-wrapper">
            <m-button @click="showToast4">延时关闭</m-button>
            <pre><code>{{code2}}</code></pre>
        </div>
        <h3 class="section">自动关闭</h3>
        <p>使用<code>autoClose</code>自动关闭，默认5秒</p>
        <div class="demo-wrapper">
            <m-button @click="showToast5">自动关闭</m-button>
            <pre><code>{{code3}}</code></pre>
        </div>
        <h3 class="section">支持HTML</h3>
        <p>使用<code>enableHtml</code>支持html</p>
        <div class="demo-wrapper">
            <m-button @click="showToast6">使用HTML</m-button>
            <pre><code>{{code4}}</code></pre>
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
                <td>autoClose</td>
                <td>是否自动关闭</td>
                <td>Boolean</td>
                <td>true / false</td>
                <td>true</td>
            </tr>
            <tr>
                <td>autoCloseDealy</td>
                <td>延时几秒</td>
                <td>Number</td>
                <td>—</td>
                <td>5</td>
            </tr>
            <tr>
                <td>closeButton</td>
                <td>关闭后的回调函数</td>
                <td>Object</td>
                <td>—</td>
                <td>return{text:"关闭",callback:undefined }</td>
            </tr>
            <tr>
                <td>enableHtml</td>
                <td>是否用html展示</td>
                <td>Boolean</td>
                <td>true / false</td>
                <td>false</td>
            </tr>
            <tr>
                <td>position</td>
                <td>toast方位</td>
                <td>String</td>
                <td>top / bottom / middle'</td>
                <td>top</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'
    import MToast from '../../../src/toast';
    import plugin from '../../../src/plugin'
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
        components:{
            'm-button':Button,
            'm-toast':MToast,
        },
        data(){
            return{
                code1:`
<m-button @click="showToast1">top</m-button>
<m-button @click="showToast2">middle</m-button>
<m-button @click="showToast3">bottom</m-button>
<script>
    import plugin from '../../../src/plugin'
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
     methods:{
             showToast1() {
                this.$toast('顶部出现',{
                    autoClose: true,
                    position: 'top'
                })
            },
            showToast2(){
                this.$toast('中间出现',{
                    autoClose: true,
                    position: 'middle'
                })
            },
            showToast3(){
                this.$toast('底部出现',{
                    autoClose: true,
                    position: 'bottom'
                })
            },
        }
    }
<\/script>
                `,
                code2: `
<m-button @click="showToast4">延时关闭</m-button>
<script>
    export default {
        methods:{
            showToast4(){
                this.$toast('2秒自动关闭',{
                autoCloseDealy: 2
                })
            },
        }
    }
<\/script>
                `,
                code3: `
<m-button @click="showToast4">自动关闭</m-button>
<script>
    export default {
        methods:{
            showToast4(){
                this.$toast('自动关闭',{
                autoClose: true
                })
            },
        }
    }
<\/script>
                `,
                code4: `
<m-button @click="showToast4">使用HTML</m-button>
<script>
    export default {
        methods:{
            showToast6(){
                this.$toast('<strong style="color:red;">这是一段红色内容</strong>',{
                    autoClose: true,
                    enableHtml: true,
                })
            },
        }
    }
<\/script>
                `,
            }
        },
        methods:{
            showToast1() {
                this.$toast('顶部出现',{
                    position: 'top'
                })
            },
            showToast2(){
                this.$toast('中间出现',{
                    position: 'middle'
                })
            },
            showToast3(){
                this.$toast('底部出现',{
                    position: 'bottom'
                })
            },
            showToast4(){
                this.$toast('2秒自动关闭',{
                    autoCloseDealy: 2
                })
            },
            showToast5(){
                this.$toast('自动关闭',{
                    autoClose: true
                })
            },
            showToast6(){
                this.$toast('<strong style="color:red;">这是一段红色内容</strong>',{
                    autoClose: true,
                    enableHtml: true,

                })
            },
        }
    }
</script>
<style lang="scss" scoped>
    *{box-sizing: border-box}
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