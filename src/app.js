import Vue from "vue";
import Button from "./button/button";
import Icon from "./icon";
import ButtonGroup from "./button/button-group";
import Input from "./input";
import Row from "./grid/row";
import Col from "./grid/col";
import Header from "./layout/header";
import Content from "./layout/content";
import Footer from "./layout/footer";
import Layout from "./layout/layout";
import Sider from "./layout/sider";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from './tabs/tabs';
import TabsHead from './tabs/tabs-head';
import TabsBody from './tabs/tabs-body';
import TabsItem from './tabs/tabs-item';
import TabsPane from './tabs/tabs-pane';
import Popover from './popover';
import Collapse from './collapse/collapse';
import CollapseItem from './collapse/collapse-item';
import Cascader from './cascader/cascader';
import CascaderItem from './cascader/cascader-item';

Vue.component('m-button', Button)
Vue.component('m-icon', Icon)
Vue.component('m-button-group', ButtonGroup)
Vue.component('m-input', Input)
Vue.component('m-row', Row)
Vue.component('m-col', Col)
Vue.component('m-header', Header)
Vue.component('m-content', Content)
Vue.component('m-footer', Footer)
Vue.component('m-layout', Layout)
Vue.component('m-sider', Sider)
Vue.component('m-toast', Toast)
Vue.use(plugin)
Vue.component('m-tabs', Tabs);
Vue.component('m-tabs-head', TabsHead);
Vue.component('m-tabs-body', TabsBody);
Vue.component('m-tabs-item', TabsItem);
Vue.component('m-tabs-pane', TabsPane);
Vue.component('m-popover', Popover);
Vue.component('m-collapse', Collapse);
Vue.component('m-collapse-item', CollapseItem);
Vue.component('m-cascader', Cascader);
Vue.component('m-cascader-item', CascaderItem);
new Vue({
  el: '#app',
  data: {
    selectedTab: ["2", "1"],
    source: [{
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
    }]
  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('bottom')
    },
    showToast3() {
      this.showToast('middle')
    },
    showToast(position) {
      this.$toast('啊啊啊啊啊啊', {
        position,
        enableHtml: false,
        closeButton: {
          text: "已充值",
          callback() {
            console.log('已经ok')
          }
        },
        autoClose: false,
        autoCloseDealy: 3
      })
    }
  }
})