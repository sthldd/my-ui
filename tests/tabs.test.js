const expect = chai.expect;
import Vue from 'vue';
import Tabs from '../src/tabs/tabs';
import TabsHead from '../src/tabs/tabs-head';
import TabsBody from '../src/tabs/tabs-body';
import TabsItem from '../src/tabs/tabs-item';
import TabsPane from '../src/tabs/tabs-pane';

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component('m-tabs', Tabs);
Vue.component('m-tabs-head', TabsHead);
Vue.component('m-tabs-body', TabsBody);
Vue.component('m-tabs-item', TabsItem);
Vue.component('m-tabs-pane', TabsPane);


describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.be.ok;
  });
  it('子组件只能是tabs-head和tabs-body', (done) => {
    let div = document.createElement(div)
    document.body.appendChild(div)
    div.innerHTML =
    `
      <m-tabs selected="man">
        <m-tabs-head>
          <m-tabs-item name="money">财经</m-tabs-item>
          <m-tabs-item name="man">男人</m-tabs-item>
          <m-tabs-item name="sex">女人</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="money">财经信息</m-tabs-pane>
          <m-tabs-pane name="man">男人信息</m-tabs-pane>
          <m-tabs-pane name="sex">女人信息</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      let man = vm.$el.querySelector(`.tabs-item[data-name="man"]`)
      expect(man.classList.contains('active')).to.be.true
      done()
    })
  });
});