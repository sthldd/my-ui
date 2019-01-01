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

new Vue({
  el: '#app',
  data:{
    loading1:false
  },
  created(){
    this.$toast('啊啊啊啊啊啊', {
      enableHtml:false
    })
  },
  methods:{
    showToast() {

    }
  }
})
