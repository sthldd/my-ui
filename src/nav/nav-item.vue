<template>
  <div class="m-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "MNavItem",
        inject:['root'],
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
        created(){
          this.root.addItems(this)
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