import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Layout from "./layout";
import Sider from "./sider";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';

Vue.component('m-button',Button)
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

new Vue({
  el: '#app',
  data:{
    selectedTab: "man"
  },
  created(){

  },
  methods:{
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
        closeButton:{
          text:"已充值",
          callback(){
            console.log('已经ok')
          }
        },
        autoClose:false,
        autoCloseDealy:3
      })
    }
  }
})
