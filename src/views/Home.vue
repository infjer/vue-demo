<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="str"/>
    <HelloWorld :msg="lod"/>
    <el-button type='primary'>hello</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import _ from 'lodash'

const response = null

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      lod: _.join([1, 2, 3, 4]),
      str: (response ?? { settings: 'a' })?.settings?.headerText ?? 'dfasd'
    }
  }
}
</script>
