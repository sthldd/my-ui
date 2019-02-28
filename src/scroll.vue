<template>
  <div  ref="parent" class="m-scroll-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @wheel="onWheel">
    <div  ref="child" class="m-scroll" :style="{transform:`translateY(${this.contentY}px)`}">
      <slot></slot>
    </div>
    <div class="m-scroll-track" v-show="scrollBarVisible">
      <div class="m-scroll-bar" ref="bar" @mousedown="onMouseDownScrollBar" @mousemove="onMouseMoveScrollBar"
           @selectstart="onSelectScrollBar"
      >
        <div class="m-scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MScroll",
        data(){
            return{
                scrollBarVisible:false,
                isScrolling:false,
                startPosition:undefined,
                endPosition:undefined,
                scrollBarY:0,
                contentY:0,
                barHeight:undefined,
                parentHeight:undefined,
                childHeight:undefined,
            }
        },
        mounted() {
            this.listenToDocument()
            this.parentHeight = this.$refs.parent.getBoundingClientRect().height
            this.childHeight = this.$refs.child.getBoundingClientRect().height
            this.updateScrollBar()
        },
        methods:{
            listenToDocument(){
                document.addEventListener('mouseup',e=>this.onMouseUpScrollBar(e))
                document.addEventListener('mousemove',e=>this.onMouseMoveScrollBar(e))
            },
            onWheel(e){
                let ua = navigator.userAgent.toLowerCase();
                let maxHeight = this.calcContentYMax()
                if(ua.indexOf('Intel Mac OS X')>0){
                    if(e.deltaY > 0){
                        this.contentY -= 20 * 3
                    }else if(e.deltaY < 0){
                        this.contentY -= 20 * 3
                    }else{
                        this.contentY -= e.deltaY * 3
                    }
                }else{
                    if(e.deltaY > 0){
                        this.contentY -= 20 * 3
                    }else if(e.deltaY < 0){
                        this.contentY += 20 * 3
                    }else{
                        this.contentY -= e.deltaY * 3
                    }
                }
                if(this.contentY>0){ //不能继续往上
                    this.contentY = 0
                }else if(this.contentY  < -maxHeight){ //不能继续往下
                    this.contentY = -maxHeight
                }else{
                    e.preventDefault()
                }
                this.updateScrollBar(this.parentHeight,this.childHeight,this.contentY)
            },
            calcContentYMax(){
                let {borderTopWidth,borderBottomWidth,paddingTop,paddingBottom} = window.getComputedStyle(this.$refs.parent)
                borderTopWidth = parseInt(borderTopWidth)
                borderBottomWidth = parseInt(borderBottomWidth)
                paddingTop = parseInt(paddingTop)
                paddingBottom = parseInt(paddingBottom)

                let maxHeight = this.childHeight - this.parentHeight + (borderTopWidth+borderBottomWidth+paddingTop+paddingBottom)
                return maxHeight
            },
            updateScrollBar(){
                let parentHeight = this.parentHeight
                let childHeight = this.childHeight
                this.barHeight = parentHeight * parentHeight / childHeight
                this.$refs.bar.style.height = this.barHeight + 'px'
                let y =parentHeight * this.contentY / childHeight
                this.$refs.bar.style.transform = `translateY(${-y}px)`
                this.scrollBarY = -y
            },
            onMouseEnter(){
                this.scrollBarVisible = true
            },
            onMouseLeave(){
                this.scrollBarVisible = false
            },
            onMouseDownScrollBar(e){
                this.isScrolling = true
                let {screenX,screenY} = e
                this.startPosition = {x:screenX,y:screenY}
            },
            onMouseMoveScrollBar(e){
                if(!this.isScrolling){return}
                let {screenX,screenY} = e
                let maxScrollHeight = this.parentHeight - this.barHeight
                this.endPosition = {x:screenX,y:screenY}
                let delta = {x:this.endPosition.x - this.startPosition.x,y:this.endPosition.y - this.startPosition.y}
                this.scrollBarY = parseInt(this.scrollBarY) + delta.y
                if(this.scrollBarY < 0){
                    this.scrollBarY = 0
                }else if(this.scrollBarY > maxScrollHeight){
                    this.scrollBarY = maxScrollHeight
                }
                this.contentY = -(this.childHeight * this.scrollBarY / this.parentHeight)
                this.startPosition = this.endPosition
                this.$refs.bar.style.transform = `translate(0px,${this.scrollBarY}px)`
            },
            onMouseUpScrollBar(e){
                this.isScrolling = false
            },
            onSelectScrollBar(e){
                e.preventDefault()
            },
        },
    }
</script>

<style scoped lang="scss">
  .m-scroll{
    transition: transform 0.01s ease;
    &-wrapper{
      margin:0 auto;
      border:1px solid #D0D0D0;
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