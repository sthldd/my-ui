<template>
  <div>
    <h3 class="section">点击上传</h3>
    <div class="demo-wrapper">
      <m-uploader name="file" method="POST" action="https://node-server-mlx.herokuapp.com/upload" :parseResponse="parseResponse"
      :file-list.sync="fileList">
        <m-button name="upload">上传</m-button>
      </m-uploader>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">文件大小</h3>
    <p><code>sizeLimit</code>可设置文件大小，如2M就是1024*1024</p>
    <div class="demo-wrapper">
      <m-uploader name="file" method="POST" action="https://node-server-mlx.herokuapp.com/upload" :parseResponse="parseResponse"
                  :file-list.sync="fileList" :sizeLimit="1024*1024" acceptType="text/text">
        <m-button name="upload">上传</m-button>
      </m-uploader>
      <pre><code>{{code2}}</code></pre>
    </div>
    <h3 class="section">多文件上传</h3>
    <p>使用<code>multiple</code>可上传多个文件</p>
    <div class="demo-wrapper">
      <m-uploader name="file" method="POST" action="https://node-server-mlx.herokuapp.com/upload" :parseResponse="parseResponse"
                  :file-list.sync="fileList" multiple>
        <m-button name="upload">上传</m-button>
      </m-uploader>
      <pre><code>{{code3}}</code></pre>
    </div>
    <h3 class="section">上传文件类型选择</h3>
    <p>使用<code>acceptType</code>来选择上传文件类型</p>
    <div class="demo-wrapper">
      <m-uploader name="file" method="POST" action="https://node-server-mlx.herokuapp.com/upload" :parseResponse="parseResponse"
                  :file-list.sync="fileList" acceptType="text/text">
        <m-button name="upload">上传</m-button>
      </m-uploader>
      <pre><code>{{code4}}</code></pre>
    </div>
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
        <td>action</td>
        <td>必选参数，上传的地址</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>是否支持多选文件</td>
        <td>boolean</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>name</td>
        <td>上传的文件字段名</td>
        <td>string	</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>acceptType</td>
        <td>接受上传的文件类型</td>
        <td>string</td>
        <td>image</td>
        <td>—</td>
      </tr>
      <tr>
        <td>file-list</td>
        <td>上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td>
        <td>array</td>
        <td>—</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>limit</td>
        <td>最大允许上传M</td>
        <td>number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
    import Button from '../../../src/button/button'
    import Uploader from '../../../src/uploader'
    export default {
        components:{
            'm-button':Button,
            'm-uploader':Uploader,
        },
        data(){
            return{
                name:'file',
                method:'POST',
                action:'https://node-server-mlx.herokuapp.com/upload',
                fileList:[],
                code2:
`<m-uploader name="file" method="POST"
  action="https://node-server-mlx.herokuapp.com/upload"
  :parseResponse="parseResponse" :file-list.sync="fileList"
  :sizeLimit="1024*1024">
  <m-button name="upload">上传</m-button>
</m-uploader>
<script>
export default {
  data(){
    return{
      name:'file',
      method:'POST',
      action:'https://node-server-mlx.herokuapp.com/upload',
      fileList:[],
    }
  }
  methods:{
    parseResponse(response){
              let object = JSON.parse(response)
              let url = 'https://node-server-mlx.herokuapp.com/preview/${'object.key'}'
              return url
    }
  }
}
<\/script>
`.replace(/^ {8}/gm, "").trim(),
                code1:
                    `<m-uploader name="file" method="POST"
action="https://node-server-mlx.herokuapp.com/upload"
:parseResponse="parseResponse" :file-list.sync="fileList">
  <m-button name="upload">上传</m-button>
</m-uploader>
<script>
export default {
  data(){
    return{
      name:'file',
      method:'POST',
      action:'https://node-server-mlx.herokuapp.com/upload',
      fileList:[],
    }
  }
  methods:{
    parseResponse(response){
              let object = JSON.parse(response)
              let url = 'https://node-server-mlx.herokuapp.com/preview/${'object.key'}'
              return url
    }
  }
}
<\/script>
`.replace(/^ {8}/gm, "").trim(),
                code3:
                    `<m-uploader name="file" method="POST"
action="https://node-server-mlx.herokuapp.com/upload"
:parseResponse="parseResponse" :file-list.sync="fileList" multiple>
  <m-button name="upload">上传</m-button>
</m-uploader>
<script>
export default {
  data(){
    return{
      name:'file',
      method:'POST',
      action:'https://node-server-mlx.herokuapp.com/upload',
      fileList:[],
    }
  }
  methods:{
    parseResponse(response){
              let object = JSON.parse(response)
              let url = 'https://node-server-mlx.herokuapp.com/preview/${'object.key'}'
              return url
    }
  }
}
<\/script>
`.replace(/^ {8}/gm, "").trim(),
                code4:
                    `<m-uploader name="file" method="POST"
action="https://node-server-mlx.herokuapp.com/upload"
:parseResponse="parseResponse" :file-list.sync="fileList" acceptType="text/text">
  <m-button name="upload">上传</m-button>
</m-uploader>
<script>
export default {
  data(){
    return{
      name:'file',
      method:'POST',
      action:'https://node-server-mlx.herokuapp.com/upload',
      fileList:[],
    }
  }
  methods:{
    parseResponse(response){
              let object = JSON.parse(response)
              let url = 'https://node-server-mlx.herokuapp.com/preview/${'object.key'}'
              return url
    }
  }
}
<\/script>
`.replace(/^ {8}/gm, "").trim(),
            }
        },
        methods:{
            parseResponse(response){
                let object = JSON.parse(response)
                let url = `https://node-server-mlx.herokuapp.com/preview/${object.key}`
                return url
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
</style>