import axios from 'axios'
import instance from './index';

export default {
  //用户注册
  getHomeBannerInfo(data) {
    return axios.post('/api/getHomeBannerInfo', data);
  },
 /* //用户登录
  userLogin(data) {
    return axios.post('/api/login', data);
    // return instance.post('/api/login', data);
  },
  //获取用户
  getUser() {
    return instance.get('/api/user');
  },
  //删除用户
  delUser(data) {
    return instance.post('/api/delUser', data);
  }*/
}

