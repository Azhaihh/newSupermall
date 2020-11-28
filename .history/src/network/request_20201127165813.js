import Vue from 'vue'
import axios from 'axios'

export function request(config){
    // 1.创建axios实例
    const instance = axios.create({
        baseURL:'',
        timeout:5000
    })

    // 
}