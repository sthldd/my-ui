const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置position', (done) => {
    Vue.component('m-popover',Popover)
    let div = document.createElement(div)
    document.body.appendChild(div)
    div.innerHTML =
      `
    <m-popover position="bottom" ref="a">
      <template slot="content">内容</template>
      <button>关闭</button>
    </m-popover>
  `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(()=>{
      expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })
})