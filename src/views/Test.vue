<template>
    <div>
        hello
        <user :option='option'/>
        <el-button type='primary' @click='random' />
    </div>
</template>

<script>
export default {
  components: {
    User: () => import(/* webpackChunkName: "User" */ '../components/User.vue')
  },
  data () {
    return {
      option: {
        confirm: '确认',
        cancel: '取消'
      }
    }
  },
  methods: {
    random () {
      this.option.confirm = Math.random()
      this.option.cancel = Math.random()
    }
  }
}
</script>

<style lang='less' scoped>

</style>
