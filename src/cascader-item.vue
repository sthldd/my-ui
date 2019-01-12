<template>
  <div class="cascaderItem">
    <div class="left">
      <div v-for="item in items" class="label" @click="leftSelected = item">{{item.name}}</div>
    </div>
    <div class="right">
      <div v-if="rightItems">
        <m-cascader-item :items="rightItems"></m-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MCascaderItem",
    props: {
      items: {
        type: Array
      }
    },
    data(){
      return{
        leftSelected:'',
      }
    },
    computed:{
      rightItems(){
        if(this.leftSelected && this.leftSelected.children){
          return this.leftSelected.children
        }else{
          return null
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left{
      border:1px solid red;
    }
  }
</style>