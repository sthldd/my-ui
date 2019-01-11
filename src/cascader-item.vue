<template>
  <div class="cascaderItem">
    {{sources.name}}
    <m-cascader-item
      v-if="sources.children"
      v-for="item in sources.children"
      :sources="item"
    >{{item}}</m-cascader-item>
  </div>
</template>

<script>
  export default {
    name: "MCascaderItem",
    props: {
      sources: {
        type: Object
      }
    },
  }
</script>

<style scoped lang="scss">
  .cascaderItem {
    border: 1px solid red;
    margin: 10px;
  }
</style>