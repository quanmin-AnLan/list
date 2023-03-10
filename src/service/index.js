import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

const request = axios.create({
  baseURL: 'http://api.anlan.xyz',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Message({
      message: error,
      type: 'warning'
    })
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    // 正确请求则返回，异常状态码抛出异常
    if (res.status === 200) {
      const { data } = res
      const { msg, code } = data
      if (msg) {
        if (code === 200) {
          Message({
            message: msg,
            type: 'success'
          })
        } else {
          Message({
            message: msg,
            type: 'warning'
          })
        }
      }
      if (data.data) {
        return Promise.resolve(data.data);
      } else {
        return Promise.resolve(data);
      }
    } else {
      Message({
        message: res?.data?.msg || '未知异常',
        type: 'warning'
      })
      return Promise.reject(res);
    }
  }, (err) => {
    // 若请求失败则抛出异常
    Message({
      message: err.msg || '未知错误',
      type: 'error'
    })
    return Promise.reject(err)
  }
);


class Http {
  static get(url, params) {
    return request.get(url, {
      params
    })
  }

  static post(url, params, contentType = 'json') {
    if (contentType === 'urlencoded') {
      return request.post(url, qs.stringify(params))
    } else {
      return request.post(url, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
}

export default Http
