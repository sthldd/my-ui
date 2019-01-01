<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div> <!-- 去掉slot 用div 因为slot不接受v-html -->
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="clickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
export default {
  name:'MToast',
  data(){
    return{

    }
  },
  props:{
    autoClose:{
      type:Boolean,
      default:true
    },
    autoCloseDealy:{
      type:Number,
      default:50
    },
    closeButton:{
      type:Object,
      default(){
        return{
          text:"关闭",callback:undefined
        }
      }
    },
    enableHtml:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.concantClose()
    this.updataStyle()
  },
  methods:{
    concantClose(){
      if(this.autoClose){
        setTimeout(() => {
          this.close()
        }, this.autoCloseDealy * 1000);
      }
    },
    updataStyle(){
      this.$nextTick(()=>{
        this.$refs.line.style.height  = this.$refs.toast.clientHeight + 'px'
      })
    },
    close(){
      this.$el.remove()
      this.$destroy()
    },
    clickClose(){
      this.close()
      if( this.closeButton && typeof  this.closeButton.callback === 'function'){
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $font-size:14px;
  $line-height: 20px;
  $height:40px;
  $background:rgba(0, 0, 0,0.75);
  .toast{
    position: fixed;
    top:0;
    left:50%;
    transform: translateX(-50%);
    font-size: $font-size;
    line-height: $line-height;
    min-height:$height;
    display: flex;
    align-items: center;
    background: $background;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0,0.50);
    border-radius: 4px;
    padding:0 16px;
    color:white;
    .close{
      padding: 0 16px;
      flex-shrink: 0;
    }
    .line{
      height:100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    .message{
      padding: 8px 0;
    }
  }

</style>

