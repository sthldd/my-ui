<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MToast',
  data(){
    return{

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
    height:$height;
    display: flex;
    align-items: center;
    background: $background;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0,0.50);
    border-radius: 4px;
    padding:0 16px;
    color:white;
  }
</style>

