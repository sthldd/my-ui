<template>
  <div class="popover" @click="toggleContent">
    <div class="content-wrapper"  v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
    }
  },
}
</script>
<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    >.content-wrapper{
      position: absolute;
      bottom: 100%;
      border:1px solid red;
      left: 0;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  }
</style>


