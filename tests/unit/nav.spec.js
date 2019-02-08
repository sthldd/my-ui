import chai,{expect} from 'chai'
import {shallowMount,mount} from '@vue/test-utils'
import Nav from '../../src/nav/nav'
import NavItem from '../../src/nav/nav-item'
import SubNav from '../../src/nav/sub-nav'
import sinon from 'sinon'
import sinonChai  from 'sinon-chai'
import Vue from "vue";
chai.use(sinonChai)


describe('Nav.vue', () => {
    it('存在.', () => {
        expect(Nav).to.exist
    })
    it('可以支持selected', () => {
        Vue.component('m-nav-item',NavItem)
        Vue.component('m-sub-nav',SubNav)
        const wrapper = mount(Nav,{
            propsData: {
                selected: 'home'
            },
            slots:{
                default:`
                <m-nav-item name="home">首页</m-nav-item>
                  <m-sub-nav name="about">
                    <template slot="title">关于</template>
                    <m-nav-item name="culture">企业文化</m-nav-item>
                    <m-nav-item name="developers">开发团队</m-nav-item>
                    <m-sub-nav name="phone">
                      <template slot="title">联系电话</template>
                      <m-nav-item name="qq">QQ</m-nav-item>
                      <m-nav-item name="wechat">微信</m-nav-item>
                      <m-sub-nav name="concat">
                        <template slot="title">电话</template>
                        <m-nav-item name="yi">移动</m-nav-item>
                        <m-nav-item name="lian">联通</m-nav-item>
                        <m-nav-item name="dian">电信</m-nav-item>
                      </m-sub-nav>
                    </m-sub-nav>
                  </m-sub-nav>
                  <m-nav-item name="fuck">你好</m-nav-item>
                `
            }
        })
        setTimeout(()=>{
            expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
        })
    })
    it('可以触发update:selected事件', (done) => {
        Vue.component('m-nav-item',NavItem)
        Vue.component('m-sub-nav',SubNav)
        const callback = sinon.fake()
        const wrapper = mount(Nav,{
            propsData: {
                selected: 'home'
            },
            slots:{
                default:`
                <m-nav-item name="home">首页</m-nav-item>
                  <m-sub-nav name="about">
                    <template slot="title">关于</template>
                    <m-nav-item name="culture">企业文化</m-nav-item>
                    <m-nav-item name="developers">开发团队</m-nav-item>
                    <m-sub-nav name="phone">
                      <template slot="title">联系电话</template>
                      <m-nav-item name="qq">QQ</m-nav-item>
                      <m-nav-item name="wechat">微信</m-nav-item>
                      <m-sub-nav name="concat">
                        <template slot="title">电话</template>
                        <m-nav-item name="yi">移动</m-nav-item>
                        <m-nav-item name="lian">联通</m-nav-item>
                        <m-nav-item name="dian">电信</m-nav-item>
                      </m-sub-nav>
                    </m-sub-nav>
                  </m-sub-nav>
                  <m-nav-item name="fuck">你好</m-nav-item>
                `
            },
            listeners:{
                'update:selected':callback
            }
        })
        wrapper.find('[data-name="developers"]').trigger('click')
        expect(callback).to.have.been.called
        done()

    })
})