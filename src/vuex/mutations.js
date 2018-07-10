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
  CURRENT_CATEGORY_TYPE(state, preload) {
    state.currentCategoryType = preload
  },
};
