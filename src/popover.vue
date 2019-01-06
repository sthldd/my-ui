<template>
  <div class="popover" @click="toggleContent">
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
    toggleContent(){
      this.visible = !this.visible
      if(this.visible == true){
        this.$nextTick(()=>{
          document.body.appendChild(this.$refs.contentWrapper)
          console.log(this.$refs.triggerWrapper)
          let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.top = top + window.scrollY +  'px'
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          let clickHandler = ()=>{
            this.visible = false
            document.removeEventListener('click',clickHandler)
          }
          document.addEventListener('click',clickHandler)
        })
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


