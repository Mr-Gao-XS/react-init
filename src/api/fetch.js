import axios from 'axios'
import { baseUrl } from '@/common/config'
import router from '@/router'
import { message as Message } from 'antd'
import qs from 'qs'
// import store from '@/store'
import fp from 'lodash/fp'

export default function (options) {
  return new Promise((resolve, reject) => {
    let createOption = {
      baseURL: baseUrl,
      timeout: 90000,
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    if (sessionStorage.getItem('accessToken')) {
      createOption.headers['Authorization'] =
        'Bearer ' + sessionStorage.getItem('accessToken')
    }

    if (
      createOption.headers['Content-Type'] ===
        'application/x-www-form-urlencoded' &&
      options.data
    ) {
      options.data = qs.stringify(options.data)
    }
    const instance = axios.create(createOption)
    instance.interceptors.request.use(
      (options) => options,
      (error) => Promise.reject(error)
    )

    instance.interceptors.response.use(
      (response) => {
        let { data } = response
        if (typeof data === 'string') {
          if (response.status === 200) {
            resolve({ code: 200, msg: data, data: [] })
          } else if (response.status === 401) {
            // 登陆失效
            router.push('/login')
            reject(response)
          } else {
            if (options.noDialog === true) {
              reject(response)
              return false
            }
            Message.destroy()
            Message.warning(fp.get('message', data) || '请求失败!')

            reject(response)
          }
        } else {
          if (fp.get('code', data) === 200) {
            if (fp.get('count', data) !== undefined) {
              resolve({
                count: fp.get('count', data) || 0,
                list: fp.get('data', data) || []
              })
            } else {
              resolve(data.data)
            }
          } else if (fp.get('code', data) === 451) {
            router.push('/login')
            reject(data)
          } else {
            if (options.noDialog === true) {
              response.data = { msg: fp.get('msg', data) || '请求失败!' }
              reject(fp.get('msg', data) || '请求失败!')
              return false
            }
            // if (store.state.basic.isMobile) {
            //   Toast(fp.get('message', data) || '请求失败!')
            // } else {
            Message.destroy()
            Message.warning(fp.get('msg', data) || '请求失败!')
            // }

            reject(response)
          }
        }
      },
      (error) => {
        let { response = {} } = error
        if ([401, 403].indexOf(response.status) !== -1) {
          // 登陆失效
          router.push('/login')
          reject(fp.get('data', response) || { data: '请求失败!' })
        } else {
          if (options.noDialog === true) {
            reject(error.response.data)
            return false
          }
          let text
          if (response.status === 404) {
            text = '请求失败，没有此接口！'
          } else {
            if (
              error.message.includes('timeout') ||
              JSON.stringify(response) === '{}'
            ) {
              text = '网络错误，请稍后重试'
            } else if (error.response) {
              text = fp.get('response.data.data', error) || '请求失败!'
            } else {
              text = '请求失败!'
            }
          }
          if (text) {
            // if (store.state.basic.isMobile) {
            //   Toast(text)
            // } else {
            Message.destroy()
            Message.error(text)
            // }
          }
          // Dialog({ type: 'error', text });
          reject(text)
        }
      }
    )
    instance(options)
  })
}
