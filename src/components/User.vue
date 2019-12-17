<template>
    <div>
        <el-input v-model='name'></el-input>
        <span>this is user component</span>
        <child-comp />
    </div>
</template>

<script>
import ChildComp from './ChildComp.vue'

export default {
  components: {
    ChildComp
  },
  props: {
    option: {
      type: Object,
      default: function () {
        return {
          confirm: 'confirm',
          cancel: 'cancel'
        }
      }
    }
  },
  data () {
    return {
      name: 'username'
    }
  },
  provide () {
    return {
      val: this.option
    }
  }
}
</script>

<style lang='less' scoped>

</style>
