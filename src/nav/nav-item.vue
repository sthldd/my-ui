<template>
  <div class="m-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "MNavItem",
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                selected:false
            }
        },
        methods:{
            onClick(){
                this.$emit('add:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
  .m-nav-item{
    padding: 10px 20px;
    &.selected{
    background-color: red;
     }
  }
</style>