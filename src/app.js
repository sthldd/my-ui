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
  methods:{
    showToast() {
      this.$toast('我是toast')
    }
  }
})

import chai from "chai";
import spies from "chai-spies";
chai.use(spies)
const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'settings'
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading:true
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement(div)
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'loading'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement(div)
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'loading',
      iconPosition: 'right',
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {
    order
  } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'loading',
    }
  })
  button.$mount()
  let spy = chai.spy(function(){}) //chai无法监听点击 无法期待什么 所以引入chai-spies
  button.$on('click',spy)  //当组件被点击时，触发spy
  let btn = button.$el
  btn.click()
  expect(spy).to.have.been.called() //当我点击btn的时候，我希望spy已经被调用
  // button.$el.remove()
  // button.$destroy()
}