<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MCollapse',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  .collapse{
    border:1px solid #ddd;
    border-radius: 4px;
  }
</style>

