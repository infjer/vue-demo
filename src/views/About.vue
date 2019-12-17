<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ str }}</h2>
    <user v-if='show'/>
    <el-button type='primary' @click='load'>load</el-button>
  </div>
</template>

<script>
export default {
  components: {
    User: () => import(/* webpackChunkName: "User" */ '../components/User.vue')
  },
  data () {
    return {
      str: 'initial',
      show: false
    }
  },
  methods: {
    async load () {
      this.show = !this.show
      try {
        let { getData } = await import(/* webpackChunkName: "api" */ '../api.js')
        let data = await getData()
        this.str = JSON.stringify(data[0])
      } catch (e) {

      }
    }
  }
}
</script>
