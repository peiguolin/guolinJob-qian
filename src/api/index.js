import request from '../utils/request.js'

export function login(data){
    return request({
        url:'/user/user/login',
        method:'post',
        data:data
    })
}

