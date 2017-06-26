import axios from 'axios'
import common from './common'
//axios公共属性设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//公共头部
if(common.pub == "pro"){
  axios.defaults.baseURL ='http://backend.bianlitao.com.cn'
}else if(common.pub == "uat"){
  axios.defaults.baseURL = 'http://backend-test.bianlitao.com.cn';
}else{
  axios.defaults.baseURL = '/static/json';
}
  //get请求
  export function get(url, params) {
      return new Promise((resolve, reject) => {
         console.log(params)
          axios.get(url, {params})
             .then(response => {
               resolve(response.data);
              })
             .catch((error) => {
                    reject(error);
              })
      })
  }
  //post请求
  export function post(url, params) {
      return new Promise((resolve, reject) => {
          axios.post(url, params)
             .then(response => {
               resolve(response.data);
              })
             .catch((error) => {

                    reject(error);
                })
              })
  }
  export default {
      ajaxPost() {
          return post(url,params)
      },
      ajaxGet(url, params) {
        return get(url, params)
      }
  }