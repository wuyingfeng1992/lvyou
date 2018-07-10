import {getHomeBannerInfoEvt,getProductCateoryType} from "../axioser/request";
export default {
  // 改变是否正在加载状态
  setLoading ({commit}, platform) {
    commit('SET_LOADING', platform);
  },
  async getHomeBannerInfoEvt({commit, state}) {
    let res = await getHomeBannerInfoEvt({})
    console.log(res.data)
    var data = res.data
    commit('GET_HOME_BANNER_INFO', data)
  },
  async getProductCategoryTypeEvt({commit, state}) {
    let res = await getProductCateoryType({})
    console.log(res.data)
    var data = res.data
    commit('GET_PRODUCT_CATEGORY_TYPE', data)
    commit('CURRENT_CATEGORY_TYPE', data.rows[0].type)
  }
};

