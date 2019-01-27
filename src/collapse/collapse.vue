 <template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name:'MCollapse',
  data(){
    return{
      eventBus:new Vue()
    }
  },
  props:{
    single:{
      type:Boolean,
      default:false
    },
    selected:{
      type:Array,
    }
  },
  provide(){
      return {
        eventBus:this.eventBus
      }
  },
  mounted(){
    this.eventBus.$emit('update:selected',this.selected)
    this.eventBus.$on('update:selected',(name)=>{
      this.selected.push(name)
      this.$emit('update:selected',this.selected)
    })
    this.$children.forEach((vm)=>{
      vm.single = this.single
    })
  }
}
</script>

<style lang="scss" scoped>
  .collapse{
    border:1px solid #ddd;
    border-radius: 4px;
  }
</style>

