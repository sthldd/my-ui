<template>
  <div style="padding-top:20px;padding-left:100px;">
    <m-cascader :source="source" popover-height="200px" :selected="selected"
      @update:selected=" selected = $event"></m-cascader>
  </div>
</template>
<script>
import Cascader from './cascader';
import Button from "./button";
export default {
  name:'demo',
  components:{
    "m-button":Button,
    "m-cascader":Cascader
  },
  data(){
    return{
      selected:[],
      source: [
        {
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              { name: '上城' },
              { name: '下城' },
              { name: '江干' },
            ]
          },
          {
            name: '嘉兴',
            children: [
              { name: '南湖' },
              { name: '秀洲' },
              { name: '嘉善' },
            ]
          },
        ]
        }, {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [
                { name: '鼓楼' },
                { name: '台江' },
                { name: '仓山' },
              ]
            },
          ]
        }, {
          name: '安徽',
          children: [
            {
              name: '合肥',
              children: [
                { name: '滨湖' },
                { name: '蜀山' },
                { name: '高新' },
              ]
            },
          ]
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    --font-size:14px;
  }
  body{
    font-size: var( --font-size);
  }
</style>


