<template>
    <div>
        <div id='container' style='height:700px; width: 1000px;'></div>
        <el-button type='primary' @click='initChart'>
          加载
        </el-button>
    </div>
</template>

<script>
import Highcharts from 'highcharts/highstock'

export default {
  data () {
    return {
      data: null
    }
  },
  methods: {
    async initChart () {
      try {
        let { getData } = await import(/* webpackChunkName: "api" */ '../api.js')
        let data = await getData()
        Highcharts.each(data, d => {
          d.length = 2
        })
        Highcharts.stockChart('container', {
          rangeSelector: {
            selected: 2
          },
          title: {
            text: '平安银行历史股价'
          },
          plotOptions: {
            series: {
              showInLegend: true
            }
          },
          tooltip: {
            split: false,
            shared: true
          },
          series: [{
            // type: 'line',
            id: '000001',
            name: '平安银行',
            data: data
          }]
        })
      } catch (e) {

      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
