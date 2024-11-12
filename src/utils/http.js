import axios from "axios";

const httpInstance = axios.create({
    baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout:5000
})

//配置拦截器
//axios请求拦截器
httpInstance.interceptors.request.use(config =>{
    return config
}, e => Promise.reject(e))

//axios响应拦截器
httpInstance.interceptors.response.use(response =>{
    return response
}, e => Promise.reject(e))

export default httpInstance