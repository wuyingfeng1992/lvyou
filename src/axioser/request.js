import axios from 'axios'
import instance from './index';

export const getHomeBannerInfoEvt=(params)=>{
  return axios.get('/mall/index/get',{})
}
export const getProductCateoryType=(params)=>{
  return axios.get('/mall/category/type',{})
}
