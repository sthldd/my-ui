import chai,{expect} from 'chai'
import {shallowMount,mount} from '@vue/test-utils'
import Slides from '../../src/slides/slides'
import SlidesItem from '../../src/slides/slides-item'
import sinon from 'sinon'
import Vue from 'vue'
import sinonChai  from 'sinon-chai'
chai.use(sinonChai)


describe('Slides.vue', () => {
    it('存在.', () => {
        expect(Slides).to.exist
    })
    it('默认展示第一个',(done)=>{
        Vue.component('MSlidesItem',SlidesItem)
        const wrapper = mount(Slides,{
            propsData:{
              autoPlay:false
            },
            slots:{
                default:`
                  <m-slides-item name="1">
                    <div class="demo1">1</div>
                  </m-slides-item>
                  <m-slides-item name="2">
                    <div class="demo2">2</div>
                  </m-slides-item>
                  <m-slides-item name="3">
                    <div class="demo3">3</div>
                  </m-slides-item>
                `
            }
        })
        setTimeout(()=>{
            expect (wrapper.find('.demo1').exists()).to.be.true
            done()
        })
    })
    it('selected是幾 選中的就是幾',(done)=>{
        Vue.component('MSlidesItem',SlidesItem)
        const wrapper = mount(Slides,{
            propsData:{
                autoPlay:false,
                selected:'2'
            },
            slots:{
                default:`
                  <m-slides-item name="1">
                    <div class="demo1">1</div>
                  </m-slides-item>
                  <m-slides-item name="2">
                    <div class="demo2">2</div>
                  </m-slides-item>
                  <m-slides-item name="3">
                    <div class="demo3">3</div>
                  </m-slides-item>
                `
            }
        })
        setTimeout(()=>{
            expect (wrapper.find('.demo2').exists()).to.be.true
            done()
        })
    })
    it('点击第二个 就展示第二个',(done)=>{
        Vue.component('MSlidesItem',SlidesItem)
        const wrapper = mount(Slides,{
            propsData:{
                autoPlay:false,
                selected:"1"
            },
            slots:{
                default:`
                  <m-slides-item name="1">
                    <div class="demo1">1</div>
                  </m-slides-item>
                  <m-slides-item name="2">
                    <div class="demo2">2</div>
                  </m-slides-item>
                  <m-slides-item name="3">
                    <div class="demo3">3</div>
                  </m-slides-item>
                `
            },
            listeners:{
                'update:selected':(x)=>{
                    expect(x).to.eq('2')
                    done()
                }
            }
        })
        setTimeout(()=>{
            wrapper.find('[data-index="2"]').trigger('click')
        })
    })
    it('自動播放',(done)=>{
        Vue.component('MSlidesItem',SlidesItem)
        const callback = sinon.fake()
        const wrapper = mount(Slides,{
            propsData:{
                autoPlay:true,
                selected:"1",
                autoPlayDelay:20
            },
            slots:{
                default:`
                  <m-slides-item name="1">
                    <div class="demo1">1</div>
                  </m-slides-item>
                  <m-slides-item name="2">
                    <div class="demo2">2</div>
                  </m-slides-item>
                  <m-slides-item name="3">
                    <div class="demo3">3</div>
                  </m-slides-item>
                `
            },
            listeners:{
                'update:selected':callback
            }
        })
        setTimeout(()=>{
            expect (callback).to.have.been.calledWith('2')
            done()
        },30)
    })
})