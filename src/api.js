import * as axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

axios.defaults.timeout = 30 * 1000
axios.defaults.paramsSerializer = params => qs.stringify(params)

axios.interceptors.request.use(config => {
  Message({
    type: 'error',
    message: 'axios interceptors'
  })
  return config
})

const loadingAxios = axios.create()
loadingAxios.interceptors.request.use(config => {
  Message({
    type: 'info',
    message: 'loading'
  })
  return config
})

export const getData = () => {
  return loadingAxios.get('https://data.jianshukeji.com/stock/history/000001')
    .then(res => {
      if (res.data.code !== 1) {
        return Promise.reject(new Error('读取股票数据失败！'))
      }
      return Promise.resolve(res.data.data)
    })
    .catch(e => {
      Message({
        type: 'error',
        message: e
      })
    })
}

export const getData1 = () => {
  return axios.get('https://data.jianshukeji.com/stock/history/000001')
    .then(res => {
      if (res.data.code !== 1) {
        return Promise.reject(new Error('读取股票数据失败！'))
      }
      return Promise.resolve(res.data.data)
    })
    .catch(e => {
      Message({
        type: 'error',
        message: e
      })
    })
}
