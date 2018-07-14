import axios from 'axios'
import instance from './index';

export const getHomeBannerInfoEvt=(params)=>{
  return axios.get('/mall/index/get',{})
}
export const getProductCategoryType=(params)=>{
  return axios.get('/mall/category/type',{})
}
export const getProductCategoryTypeList=(params)=>{
  var type=params;
  return axios.get(`/mall/category/lists/type/${type}`,{type:type})
}
export const getProductList=(params)=>{
  var categoryId=params.categoryId;
  var offset=params.offset;
  return axios.get(`/mall/product/lists/category_id/${categoryId}/offset/${offset}`)
}
export const getProductDetail=(params)=>{
  var goods_id=params;
  return axios.get(`/mall/product/details/goods_id/${goods_id}`)
}
export const getFeatureProduct=(params)=>{
  var offset=params.offet;
  return axios.get(`/mall/product/feature/offset/${offset}`)
}
export const getSearchInfo=(params)=>{
  var offset='';
  var key=params;
  return axios.get(`/mall/search/get/?key=${key}&offset=${offset}`)
}

export const getSearchRecommandInfo=(params)=>{
  return axios.get(`/mall/search/info`)
}
export const getUserInfo=(params)=>{
  return axios.get(`/mall/user/index`)
}
export const getContactUser=(params)=>{
  return axios.get(`/mall/user/usetuser`)
}
export const editContactUser=(params)=>{
  return axios.post(`/mall/user/edittuser/tuid/${params.tuid}`,params)
}
export const insertContactUser=(params)=>{
  return axios.post(`/mall/user/addtuser`,params)
}
export const submitShopBuy=(params)=>{
  return axios.post(`/mall/shop/buy`,params)
}
export const getAllOrder=(params)=>{
  var offset=''
  return axios.get(`/mall/order/all/offset/${offset}`)
}
export const getNotpayOrder=(params)=>{
  var offset=''
  return axios.get(`/mall/order/notpay/offset/${offset}`)
}
export const getRefundOrder=(params)=>{
  var offset=''
  return axios.get(`/mall/refund/lists/offset/${offset}`)
}

export const getCustomService=(params)=>{
  var offset=''
  return axios.get(`/api/msg/confirm`)
}
export const getCustomServiceHistory=(params)=>{
  var offset=''
  return axios.get(`/api/msg/history`)
}
export const getCustomServiceInfo=(params)=>{
  var offset=''
  return axios.get(`/api/msg/accept`)
}
export const setCustomServiceInfo=(params)=>{
  var offset=''
  return axios.post(`/api/msg/send`,params)
}
export const getRefundOrderInfo=(params)=>{
  var refund_id=params
  return axios.get(`/mall/refund/details/refund_id/${refund_id}`)
}
export const refundOrder=(params)=>{
  return axios.post(`/mall/refund/apply/order_id/${params.order_id}`,params)
}
export const deleteOrder=(params)=>{
  return axios.post(`/mall/order/del`,params)
}
