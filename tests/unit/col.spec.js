import chai,{expect} from 'chai'
import {shallowMount,mount} from '@vue/test-utils'
import Button from '../../src/button/button.vue'
import sinon from 'sinon'
import sinonChai  from 'sinon-chai'
chai.use(sinonChai)
import Row from '../../src/grid/row.vue'
import Col from '../../src/grid/col.vue'

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.be.ok
  })
  xit('可以接收span', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    div.remove()
  })
  // it('可以接收offset', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Col)
  //   const vm = new Constructor({
  //     propsData: {
  //       offset: 1
  //     }
  //   }).$mount(div)
  //   const element = vm.$el
  //   expect(vm.$el.classList.contains('offset-1')).to.eq(true)
  // })
  // it('可以接收ipad', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Col)
  //   const vm = new Constructor({
  //     propsData: {
  //       ipad: {span:1,offset:2}
  //     }
  //   }).$mount(div)
  //   const element = vm.$el
  //   expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
  //   expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
  //   div.remove()
  //   vm.$destroy()
  // })
  // it('可以接收pc', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Col)
  //   const vm = new Constructor({
  //     propsData: {
  //       pc: {
  //         span: 1,
  //         offset: 2
  //       }
  //     }
  //   }).$mount(div)
  //   const element = vm.$el
  //   expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
  //   expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
  //   div.remove()
  //   vm.$destroy()
  // })
  // it('可以接收narrowpc', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Col)
  //   const vm = new Constructor({
  //     propsData: {
  //       narrowPc: {
  //         span: 1,
  //         offset: 2
  //       }
  //     }
  //   }).$mount(div)
  //   const element = vm.$el
  //   expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
  //   expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.eq(true)
  //   div.remove()
  //   vm.$destroy()
  // })
  // it('可以接收widepc', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Col)
  //   const vm = new Constructor({
  //     propsData: {
  //       widePc: {
  //         span: 1,
  //         offset: 2
  //       }
  //     }
  //   }).$mount(div)
  //   const element = vm.$el
  //   expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
  //   expect(vm.$el.classList.contains('offset-wide-pc-2')).to.eq(true)
  //   div.remove()
  //   vm.$destroy()
  // })
})