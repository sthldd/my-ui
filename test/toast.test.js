const expect = chai.expect;
import Vue from 'vue';
import Toast from '../src/toast';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.be.ok;
  });
  describe('props', () => {
    it('可以接收autoClose', (done) => {
      let div = document.createElement(div)
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDealy: 1
        }
      }).$mount(div)
      vm.$on('close',()=>{
        expect(document.body.contains(vm.$el)).to.equal(false)
        done()
      })
    })
    it('可以接收closeButton', () => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton:{
            text:'关闭',
            callback,
          }
        }
      }).$mount()
      let close = vm.$el.querySelector('.close')
      expect(close.textContent.trim()).to.equal('关闭')
      close.click()
      expect(callback).to.have.been.called
    })
    it('可以接收enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml:true
        }
      })
      vm.$slots.default = ['<strong id="content">hi</strong>']
      vm.$mount()
      let content = vm.$el.querySelector('#content')
      expect(vm.$el.contains(content)).to.equal(true)
    })
    it('可以接收position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'top'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-top')).to.equal(true)
    })
  })
});