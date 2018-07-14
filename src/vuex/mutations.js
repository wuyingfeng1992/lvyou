export default {
  // 设置是否在加载
  SET_LOADING (state, platform) {
    state.isLoading = platform;
  },
  GET_HOME_BANNER_INFO(state, preload) {
    state.homeBannerInfo = preload
  },
  GET_PRODUCT_CATEGORY_TYPE(state, preload) {
    state.productCategoryType = preload
  },
  GET_PRODUCT_CATEGORY_TYPE_LIST(state, preload) {
    state.productCategoryTypeList = preload
  },
  GET_PRODUCT_LIST(state, preload) {
    state.productList = preload
  },
  GET_PRODUCT_DETAIL(state, preload) {
    state.productDetail = preload
  },
  GET_FEATURN_PRODUCT(state, preload) {
    state.featureProduct = preload
  },
  GET_SEARCH_INFO(state, preload) {
    state.searchInfo = preload
  },
  GET_SEARCH_RECOMMAND_INFO(state, preload) {
    state.searchRecommandInfo = preload
  },
  GET_USER_INFO(state, preload) {
    state.userInfo = preload
  },
  GET_CONTACT_USER(state, preload) {
    state.contactUser = preload
  },
  GET_ALL_ORDER(state, preload) {
    state.allOrder = preload
  },
  GET_NOTPAY_ORDER(state, preload) {
    state.notPayOrder = preload
  },
  GET_REFUND_ORDER(state, preload) {
    state.refundOrder = preload
  },
  SET_CURRENT_CONTACT_USER(state, preload) {
    state.currentContactUser = preload
    window.localStorage.setItem('currentContactUser',JSON.stringify(preload))
  },
  SET_CURRENT_PRODUCT_INFO(state, preload) {
    state.currentProductInfo = preload
    window.localStorage.setItem('currentProductInfo',JSON.stringify(preload))
  },
  GET_CUSTOM_SERVICE_INFO(state, preload) {
    state.customServiceInfo = preload
  },
  GET_CUSTOM_SERVICE(state, preload) {
    state.customService = preload
  },
  GET_REFUND_ORDER_INFO(state, preload) {
    state.refundOrderInfo = preload
  },
  GET_CUSTOM_SERVICE_HISTORY(state, preload) {
    state.customServiceHistory = preload
  },
  SET_CUSTOM_SERVER_LIST_INFO(state, preload) {
    var {data,type}=preload;
    state.customServiceListInfo = state.customServiceListInfo.concat(data);
  },
  GET_CUSTOM_SERVICE_AVTAR(state, preload) {
    state.customerServiceAavatar =preload;
  },
 /* CURRENT_CATEGORY_TYPE(state, preload) {
    state.currentCategoryType = preload
  },*/
};
