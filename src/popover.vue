<template>
  <div class="popover" @click.top="toggleContent">
    <div class="content-wrapper"  v-if="visible" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
  methods:{
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.top = top + window.scrollY +  'px'
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
    },
    listenDocument(){
      let clickHandler = (e)=>{
        if(!this.$refs.contentWrapper.contains(e.target)){
          this.visible = false
          document.removeEventListener('click',clickHandler)
        }
      }
      document.addEventListener('click',clickHandler)
    },
    onShow(){
      this.positionContent()
      this.listenDocument()
    },
    toggleContent(e){
      if(this.$refs.triggerWrapper.contains(e.target)){
        this.visible = !this.visible
        if(this.visible == true){
          this.$nextTick(()=>{
            this.onShow()
          })
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
    border:1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>


