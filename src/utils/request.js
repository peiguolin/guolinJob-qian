import axios from 'axios'


// import router from '../router/index.js'

// 创建 Axios 实例 设置一些基础属性
const request = axios.create({
    baseURL:'http://localhost:8083',
    timeout: 10000
})

// 添加请求拦截器


// 添加请求拦截器
request.interceptors.request.use(
    config => {
        //可以前置设置，例如请求头token等
        config.headers['Content-Type'] = 'application/json;charset=utf-8';
        config.headers.authentication = localStorage.getItem("token")
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// // 添加响应拦截器
request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.status === 401) {
            //到404页面
            // router.push('/');
            console.log("error")
        }else{
            // 其他情况 返回一个promise
            return Promise.reject(error)
        }
    }
)
//对外暴漏axios实例。
export default request


// import axios from "axios";
// // import {ElMessage} from "element-plus";
// import error from "element-plus/es/utils/error.js";
//
//
// const BASE_API = "localhost:8083/"
//
// const service = axios.create({
//     baseURL: BASE_API,
//     timeout: 15000
// })
//
// service.interceptors.response.use(config => {
//         return config
//     }, error =>{
//         console.log(error)
//         Promise.reject(error)
//     }
// )
//
// service.interceptors.response.use(response=>{
//     return response.data
//     }, error => {
//     console.log('err' + error)
//     ElMessage({
//         message:error.message,
//         type:'error',
//         duration:3 * 1000
//     })
//     return Promise.reject(error)
//     }
// )
// return Promise.reject(error)
