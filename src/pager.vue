<template>
  <div class="m-pager">
    <span v-for="page in pages" class="m-pager-item"
    :class="{active:page === currentPage ,separator:page === '...'}"
    >{{page}}</span>
  </div>
</template>

<script>
    export default {
        name: "MPager",
        data(){
            let pages = [1,this.currentPage - 1,this.currentPage - 2,this.currentPage,this.currentPage+1,this.currentPage+2,this.totalPage]
            let u = unique(pages.sort((a,b)=>a - b))
            let u2 = u.reduce((prev,current,index,array)=>{
              prev.push(current)
              array[index+1] !== undefined && array[index+1] - array[index] > 1 && prev.push('...')
              return prev
            },[])
            return{
              pages:u2
            }
        },
        props:{
            totalPage:{
                type:Number,
                required:true
            },
            currentPage:{
                type:Number,
                required:true
            },
            hideIfOnePage:{
                type:Boolean,
                default:true
            }
        },
        methods:{

        },
    }
    function unique(array){
        return Array.from(new Set(array))
    }
</script>

<style scoped lang="scss">
  @import "./var";
  .m-pager{
    &-item{
      border:1px solid $grey;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      min-width: 20px;
      height:20px;
      margin:0 4px;
      cursor: pointer;
      &.active,&:hover{
        border-color: $red;
        user-select: none;
      }
      &.active{
        cursor:default;
      }
      &.separator{
        user-select: none;
        border:none;
      }
    }


  }
</style>