<template>
  <div>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
    <h3 class="section">基础用法</h3>
    <div class="demo-wrapper">
      <m-slides class="wrapper" width="300px" height="200px" :selected.sync="selected">
        <m-slides-item name="1">
          <div class="box">1</div>
        </m-slides-item>
        <m-slides-item name="2">
          <div class="box">2</div>
        </m-slides-item>
        <m-slides-item name="3">
          <div class="box">3</div>
        </m-slides-item>
      </m-slides>
      <pre><code>{{code1}}</code></pre>
    </div>
    <h3 class="section">自动滚动</h3>
    <p>使用<code>autoPlay</code>可以自动滚动</p>
    <div class="demo-wrapper">
      <m-slides class="wrapper" width="300px" height="200px" :selected.sync="selected" :autoPlay="true">
        <m-slides-item name="1">
          <div class="box">1</div>
        </m-slides-item>
        <m-slides-item name="2">
          <div class="box">2</div>
        </m-slides-item>
        <m-slides-item name="3">
          <div class="box">3</div>
        </m-slides-item>
      </m-slides>
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
        <td>autoPlay</td>
        <td>是否自动滚动</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>autoPlayDelay</td>
        <td>延时滚动</td>
        <td>Number</td>
        <td>—</td>
        <td>3000</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import MSlides from '../../../src/slides/slides'
    import MSlidesItem from '../../../src/slides/slides-item'
    export default {
        name: "slides-demo",
        components:{
            MSlides, MSlidesItem
        },
        data(){
            return{
                selected: undefined,
                code1:`
<m-slides class="wrapper" width="300px" height="200px" :selected.sync="selected">
  <m-slides-item name="1">
    <div class="box">1</div>
  </m-slides-item>
  <m-slides-item name="2">
    <div class="box">2</div>
  </m-slides-item>
  <m-slides-item name="3">
    <div class="box">3</div>
  </m-slides-item>
</m-slides>
<script>
  export default {
     data(){
        return{
          selected: undefined,
        }
     }
  }
<\/script>
                `,
                code2:`
<m-slides class="wrapper" width="300px" height="200px" :selected.sync="selected"
:autoPlay="true">
  <m-slides-item name="1">
    <div class="box">1</div>
  </m-slides-item>
  <m-slides-item name="2">
    <div class="box">2</div>
  </m-slides-item>
  <m-slides-item name="3">
    <div class="box">3</div>
  </m-slides-item>
</m-slides>
<script>
  export default {
     data(){
        return{
          selected: undefined,
        }
     }
  }
<\/script>
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
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>