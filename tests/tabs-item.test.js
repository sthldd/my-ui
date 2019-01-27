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


describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).to.be.ok;
  });
  it('接受name参数', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'woman'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('woman')
  });
  it('接受disabled参数', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
  });
});