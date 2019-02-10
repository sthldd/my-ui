<template>
  <div class="m-pager">
    <span class="m-pager-nav prev" :class="{disabled:currentPage === 1}">
      <m-icon name="left"></m-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="m-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <m-icon class="m-pager-item separator" name="dots">...</m-icon>
      </template>
      <template v-else>
        <span class="m-pager-item other">{{page}}</span>
      </template>
    </template>
    <span class="m-pager-nav next" :class="{disabled:currentPage === totalPage}">
      <m-icon name="right"></m-icon>
    </span>
    <p>{{currentPage}}</p>
  </div>
</template>

<script>
  import MIcon from './icon'
    export default {
        name: "MPager",
        components:{
            MIcon,
        },
        data(){
            let pages = [1,this.currentPage - 1,this.currentPage - 2,this.currentPage,this.currentPage+1,this.currentPage+2,this.totalPage].filter((n)=> n>=1&&n<=this.totalPage)
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
      &.active,&:hover{border-color: $red;user-select: none;}
      &.active{cursor:default;}
      &.separator{width: 20px;font-size: 20px;user-select: none;border:none;}
    }
    &-nav{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height:20px;width: 20px;
      border-radius: $border-radius;
      font-size: 14px;
      background: $grey;
      margin:0 4px;
      &.disabled{
        svg{
          fill:darken($grey,30%);
        }
      }
    }

  }
</style>