
import axios from 'axios'
import { access_token } from '../../constans/index'
import { parseResult } from '../service/dataParser'
let instance = axios.create({
  headers: {
    Authorization: `Bearer ${access_token}`
  }
})

instance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${access_token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response;
}, error => {
  if (error.response.status === 401) {
    console.log(error.response.status)
  }
  if (error.response) {
    return error.response.data;
  } else {
    return Promise.reject(error)
  }
})

export const http = instance