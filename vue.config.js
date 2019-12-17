module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          element: {
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            name: 'element'
          },
          lodash: {
            test: /[\\/]node_modules[\\/]lodash[\\/]/,
            name: 'lodash'
          },
          highcharts: {
            test: /[\\/]node_modules[\\/]highcharts[\\/]/,
            name: 'highcharts'
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors'
          }
        }
      }
    }
  }
}
