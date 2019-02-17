<template>
    <div  ref="parent" class="m-scroll-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div  ref="child" class="m-scroll">
        <slot></slot>
      </div>
      <div class="m-scroll-track" v-show="scrollBarVisible">
        <div class="m-scroll-bar" ref="bar" >
          <div class="m-scroll-bar-inner" draggable="true" @dragstart="onDragStart" @dragend="onDragEnd"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MScroll",
        data(){
            return{
              scrollBarVisible:false
            }
        },
        mounted() {
            let parent = this.$refs.parent
            let child = this.$refs.child
            let translateY = 0
            let {height:parentHeight} = parent.getBoundingClientRect()
            let {height:childHeight} = child.getBoundingClientRect()
            let {borderTopWidth,borderBottomWidth,paddingTop,paddingBottom} = window.getComputedStyle(parent)
            borderTopWidth = parseInt(borderTopWidth)
            borderBottomWidth = parseInt(borderBottomWidth)
            paddingTop = parseInt(paddingTop)
            paddingBottom = parseInt(paddingBottom)
            let maxHeight = childHeight - parentHeight + (borderTopWidth+borderBottomWidth+paddingTop+paddingBottom)
            var ua = navigator.userAgent.toLowerCase();
            parent.addEventListener('wheel',(e)=>{
                if(ua.indexOf('Intel Mac OS X')>0){
                    if(e.deltaY > 0){
                        translateY -= 20 * 3
                    }else if(e.deltaY < 0){
                        translateY -= 20 * 3
                    }else{
                        translateY -= e.deltaY * 3
                    }
                }else{
                    if(e.deltaY > 0){
                        translateY -= 20 * 3
                    }else if(e.deltaY < 0){
                        translateY += 20 * 3
                    }else{
                        translateY -= e.deltaY * 3
                    }
                }
                if(translateY>0){ //不能继续往上
                    translateY = 0
                }else if(translateY  < -maxHeight){ //不能继续往下
                    translateY = -maxHeight
                }else{
                    e.preventDefault()
                }
                child.style.transform = `translateY(${translateY}px)`
                this.updateScrollBar(parentHeight,childHeight,translateY)
            })
            this.updateScrollBar(parentHeight,childHeight,translateY)
        },
        methods:{
            updateScrollBar(parentHeight,childHeight,translateY){
               let barHeight = parentHeight * parentHeight / childHeight
               let bar = this.$refs.bar
               bar.style.height = barHeight + 'px'
               let y =parentHeight * translateY / childHeight
               bar.style.transform = `translateY(${-y}px)`
            },
            onMouseEnter(){
               this.scrollBarVisible = true
            },
            onMouseLeave(){
               this.scrollBarVisible = false
            },
            onDragStart(){
              console.log('开始')
            },
            onDragEnd(){
                  console.log('结束')
            }
        }
    }
</script>

<style scoped lang="scss">
  .m-scroll{
    transition: transform 0.05s ease;
    &-wrapper{
      margin:0 auto;
      border:1px solid green;
      overflow: hidden;
      position: relative;
    }
    &-track{
      position: absolute;
      top:0;
      right:0;
      width:14px;
      height: 100%;
      border:1px solid #FAFAFA;
      border-left:1px solid #E8E7E8;
    }
    &-bar{
      position: absolute;
      top:-1px;
      left:50%;
      width:8px;
      height:40px;
      padding: 4px 0;
      margin-left: -4px;
      &-inner{
        background: #C2C2C2;
        border-radius: 4px;
        height: 100%;
        &:hover{
          background: #7D7D7D;
        }
      }

    }
  }
</style>