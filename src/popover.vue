<template>
  <div class="popover" @click.top="toggleContent" ref="popover">
    <div class="content-wrapper"  v-if="visible" ref="contentWrapper" :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name:'MPopover',
  data(){
    return{
      visible:false
    }
  },
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','left','right'].includes(value)
      }
    }
  },
  methods:{
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
      if(this.position === 'top'){
        this.$refs.contentWrapper.style.top = top + window.scrollY +  'px'
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      }else if(this.position === 'bottom'){
        this.$refs.contentWrapper.style.top = top + height + window.scrollY +  'px'
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      }else if(this.position === 'left'){
        let {height:height2} = this.$refs.contentWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.top = top  + window.scrollY + (height - height2) / 2 +  'px'
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      }else if(this.position === 'right'){
        let {height:height2} = this.$refs.contentWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.top = top  + window.scrollY + (height - height2) / 2 +  'px'
        this.$refs.contentWrapper.style.left = left + window.scrollX + width + 'px'
      }

    },
    listenDocument(){
      this.clickHandler = (e)=>{
        if(this.$refs.popover && (this.$refs.popover=== e.target || !this.$refs.popover.contains(e.target))){
          this.close()
        }
        if(this.$refs.contentWrapper && (this.$refs.contentWrapper=== e.target || !this.$refs.contentWrapper.contains(e.target))){
          this.close()
        }
      }
      document.addEventListener('click',this.clickHandler)
    },
    onShow(){
      this.visible = true
      this.$nextTick(()=>{
        this.positionContent()
        this.listenDocument()
      })
    },
    close(){
      this.visible = false
      console.log('关闭')
      document.removeEventListener('click',this.clickHandler)
    },
    toggleContent(e){
      if(this.$refs.triggerWrapper.contains(e.target)){
        if(this.visible == true){
          this.close()
        }else{
          this.onShow()
        }
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border:1px solid #333;
    border-radius: 4px;
    filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background-color: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
      content: '';
      display: block;
      width:0px;
      height:0px;
      border:10px solid transparent;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top:-10px;
      &::before,&::after{
        left: 10px;
      }
      &::before{
        border-top-color: black;
        top:100%;
      }
      &::after{
        border-top-color: white;
        top:calc(100% - 1px);
      }
    }
    &.position-bottom{
      margin-top:10px;
      &::before,&::after{
        left: 10px;
      }
      &::before{
        border-bottom-color: black;
        bottom:100%;
      }
      &::after{
        border-bottom-color: white;
        bottom:calc(100% - 1px);
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after{
        transform: translateY(-50%);
        top:50%;
      }
      &::before{
        border-left-color: black;
        left:100%;
      }
      &::after{
        border-left-color: white;
        left:calc(100% - 1px);
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before,&::after{
        transform: translateY(-50%);
        top:50%;
      }
      &::before{
        border-right-color: black;
        right:100%;
      }
      &::after{
        border-right-color: white;
        right:calc(100% - 1px);
      }
    }
  }
</style>


