<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <cascader-item :sources="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-item'
  export default {
    name: 'MCascader',
    components: {CascaderItem},
    props: {
      source: {
        type: Array
      }
    }
  }
</script>

