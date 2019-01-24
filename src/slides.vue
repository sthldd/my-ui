<template>
  <div class="m-slides">
    <div class="m-slides-window">
      <div class="m-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div>
      <span class="NumberIndex" v-for="index in childrenLength" :class="{active:selectedIndex === index-1}"
      @click="select(index - 1)"
      >{{index}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MSlides",
        data(){
            return{
                childrenLength:0,
                lastSelectedIndex:undefined
            }
        },
        props:{
          selected:{
              type:String
          },
          autoPlay:{
              type: Boolean,
              default:true
          }
        },
        computed:{
          selectedIndex(){
              return this.names.indexOf(this.selected) || 0
          },
          names(){
              return this.$children.map((vm)=>vm.name)
          }
        },
        mounted() {
            this.updateChildren()
            this.playAutomatically()
            this.childrenLength = this.$children.length
        },
        updated(){
            this.updateChildren()
        },
        methods:{
            select(index){
                this.lastSelectedIndex = this.selectedIndex
                this.$emit('update:selected',this.names[index])
            },
            playAutomatically(){
                let index = this.names.indexOf(this.getSelected())
                let run = ()=>{
                    let newIndex = index - 1
                    if(newIndex  === -1){newIndex  = this.names.length  - 1}
                    if(newIndex  === this.names.length){newIndex  = 0}
                    this.select(newIndex)
                    setTimeout(run,10000)
                }
                //setTimeout(run,30000)
            },
            getSelected(){
                let first = this.$children[0]
                return this.selected ||first.name
            },
            updateChildren(){
                let selected = this.getSelected()
                this.$children.forEach((vm)=>{

                    let newIndex = this.names.indexOf[selected]
                    let oldIndex = this.names.indexOf(vm.name)
                    vm.reverse= this.selectedIndex > this.lastSelectedIndex ? false : true
                    this.$nextTick(()=>{
                        vm.selected = selected
                    })
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
    >div{
      >.NumberIndex{
        margin:0 10px;
        border:1px solid ;
        padding: 0 10px;
      }
    }
  }
  .active{
    background: red;
  }
</style>