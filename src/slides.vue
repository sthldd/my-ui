<template>
  <div class="m-slides">
    <div class="m-slides-window">
      <div class="m-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MSlides",
        props:{
          selected:{
              type:String
          },
          autoPlay:{
              type: Boolean,
              default:true
          }
        },
        mounted() {
            this.updateChildren()
            this.playAutomatically()
        },
        updated(){
            this.updateChildren()

        },
        methods:{
            playAutomatically(){
                const names = this.$children.map((vm)=>vm.name)
                let index = names.indexOf(this.getSelected())
                let run = ()=>{
                    if(index === names.length){index = 0}
                    this.$emit('update:selected',names[index+1])
                    index++
                    // let newIndex = index - 1
                    // if(newIndex  === -1){newIndex  = names.length  - 1}
                    // this.$emit('update:selected',names[newIndex ])
                    // index--
                    setTimeout(run,3000)
                }
                setTimeout(run,3000)
            },
            getSelected(){
                let first = this.$children[0]
                return this.selected ||first.name
            },
            updateChildren(){
                let selected = this.getSelected()
                this.$children.forEach((vm)=>{
                    vm.selected = selected
                    const names = this.$children.map((vm)=>vm.name)
                    let newIndex = names.indexOf[selected]
                    let oldIndex = names.indexOf(vm.name)
                    var reverse = newIndex > oldIndex ? 'false' : true
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .m-slides{
    border: 1px solid;
    &-window{
      overflow: hidden;
    }
    &-wrapper{
      position: relative;
    }
  }
</style>