import {getHomeBannerInfoEvt,getProductCategoryType,
  getProductCategoryTypeList,
  getProductDetail,
  getFeatureProduct,
  getSearchInfo,
  getSearchRecommandInfo,
  getUserInfo,
  getContactUser,
  getAllOrder,
  getNotpayOrder,
  getRefundOrder,
  getCustomService,
  getRefundOrderInfo,
  getCustomServiceInfo,
  getProductList} from "../axioser/request";
export default {
  // 改变是否正在加载状态
  setLoading ({commit}, platform) {
    commit('SET_LOADING', platform);
  },
  //获取首页banner数据
  async getHomeBannerInfoEvt({commit, state}) {
    let res = await getHomeBannerInfoEvt({})
    console.log(res.data)
    var data = res.data
    commit('GET_HOME_BANNER_INFO', data)
  },
  //获取category的数据
  async getProductCategoryTypeEvt({commit, state}) {
    let res = await getProductCategoryType({})
    console.log(res.data)
    var data = res.data
    commit('GET_PRODUCT_CATEGORY_TYPE', data)
    //commit('CURRENT_CATEGORY_TYPE', data.rows[0].type)
  },
  //获取category下的数据
  async getProductCategoryTypeListEvt({commit, state},preload) {
    let res = await getProductCategoryTypeList(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_PRODUCT_CATEGORY_TYPE_LIST', data)
  },
  //获取产品列表
  async getProductListEvt({commit, state},preload) {
    let res = await getProductList(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_PRODUCT_LIST', data)
  },
  //获取特价产品列表
  async getFeatureProductEvt({commit, state},preload) {
    let res = await getFeatureProduct(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_FEATURN_PRODUCT', data)
  },
  //获取产品详细信息
  async getProductDetailEvt({commit, state},preload) {
    let res = await getProductDetail(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_PRODUCT_DETAIL', data)
  },
  //获取产品详细信息
  async getSearchInfoEvt({commit, state},preload) {
    let res = await getSearchInfo(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_SEARCH_INFO', data)
  },
  //获取搜索推荐
  async getSearchRecommandInfoEvt({commit, state},preload) {
    let res = await getSearchRecommandInfo(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_SEARCH_RECOMMAND_INFO', data)
  },
  //获取用户信息
  async getUserInfoEvt({commit, state},preload) {
    let res = await getUserInfo(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_USER_INFO', data)
  },
  //获取常用联系人
  async getContactUserEvt({commit, state},preload) {
    let res = await getContactUser(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_CONTACT_USER', data)
  },
  //获取所有订单
  async getAllOrderEvt({commit, state},preload) {
    let res = await getAllOrder(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_ALL_ORDER', data)
  },
  //获取未付款订单
  async getNotpayOrderEvt({commit, state},preload) {
    let res = await getNotpayOrder(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_NOTPAY_ORDER', data)
  },
  //获取退款订单
  async getRefundOrderEvt({commit, state},preload) {
    let res = await getRefundOrder(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_REFUND_ORDER', data)
  },
  //获取客服消息
  async getCustomServiceEvt({commit, state},preload) {
    let res = await getCustomService(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_CUSTOM_SERVICE', data)
  },
  //获取退款定单信息
  async getRefundOrderInfoEvt({commit, state},preload) {
    let res = await getRefundOrderInfo(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_REFUND_ORDER_INFO', data)
  },
  //获取客服消息
  async getCustomServiceInfoEvt({commit, state},preload) {
    let res = await getCustomServiceInfo(preload)
    console.log(res.data)
    var data = res.data
    commit('GET_CUSTOM_SERVICE_INFO', data)
  }
};

