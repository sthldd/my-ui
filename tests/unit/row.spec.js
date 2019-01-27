import chai,{expect} from 'chai'
import {shallowMount,mount} from '@vue/test-utils'
import Button from '../../src/button/button.vue'
import sinon from 'sinon'
import sinonChai  from 'sinon-chai'
chai.use(sinonChai)
import Row from '../../src/grid/row.vue'
import Col from '../../src/grid/col.vue'

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.be.ok
  })
//it('接收 gutter 属性.', (done) => {
//     Vue.component('g-row', Row)
//     Vue.component('g-col', Col)
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <g-row gutter="20">
//         <g-col span="12"></g-col>
//         <g-col span="12"></g-col>
//       </g-row>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     setTimeout(() => {
//       const row = vm.$el.querySelector('.row')
//       expect(getComputedStyle(row).marginLeft).to.eq('-10px')
//       expect(getComputedStyle(row).marginRight).to.eq('-10px')
//       const cols = vm.$el.querySelectorAll('.col')
//       expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
//       expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
//       done()
//       vm.$el.remove()
//       vm.$destroy()
//   })
// })
})