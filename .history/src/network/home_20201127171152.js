// 首页涉及的所有请求

import {request} from './request'       //注意封装的文件不是默认导出时，，如何导入

export function getHomeMultiData(){
    return request({
        url:'/home/multidata'
    })
}