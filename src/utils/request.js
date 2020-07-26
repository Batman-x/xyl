/* 
    封装ajsx项目接口
*/
// 引入axios和qs
import axios from 'axios'
import qs, { parse } from 'qs'

// 设置服务器请求地址
axios.defaults.baseURL = 'http://127.0.0.1:5000'

// 请求超时时间
axios.defaults.timeout = 5000;


export default {
    // get 请求
    get(url, data = {}) {

        return new Promise((resolve, reject) => {

            axios.get(url, { params:data })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },


    // post 请求
    post(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(data))
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
