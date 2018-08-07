export default {
  // 得到是否加载中
  getloading: (state) => state.isLoading,
  getProductCategory: (state) => state.productCategory,
  getHomeBannerInfo: (state) => state.homeBannerInfo,
  getProductCategoryType: (state) => state.productCategoryType,
  getProductCategoryTypeList: (state) => state.productCategoryTypeList,
  getProductList: (state) => state.productList,
  getProductDetail: (state) => state.productDetail.goods,
  getFeatureProduct: (state) => state.featureProduct,
  getSearchInfo: (state) => state.searchInfo,
  getSearchRecommandInfo: (state) => state.searchRecommandInfo,
  getContactUser: (state) => state.contactUser,
  getAllOrder: (state) => state.allOrder,
  getNotpayOrder: (state) => state.notPayOrder,
  getRefundOrder: (state) => state.refundOrder,
  getCustomService: (state) => state.customService,
  getRefundOrderInfo: (state) => state.refundOrderInfo,
  getCustomServiceInfo: (state) => state.customServiceInfo,
  getCustomServiceHistory: (state) => state.customServiceHistory,
  getUserInfo: (state) => state.userInfo,
  getCustomServiceListInfo: (state) => state.customServiceListInfo,
  getCustomerServiceAavatar: (state) => state.customerServiceAavatar,
  getCurrentContactUser: (state) => {
    let currentContactUser=window.localStorage.getItem('currentContactUser');
    if(currentContactUser){
      return JSON.parse(currentContactUser)
    }else{
      return {}
    }
  },
  getCurrentCurrentProductInfo: (state) => state.currentProductInfo,

  //getCurrentCategoryType: (state) => state.currentCategoryType,
};
