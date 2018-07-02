import Vue from 'vue';
import Router from 'vue-router';

import Homepage from 'components/Homepage';
import Recommend from 'components/Recommend';
import Myzone from 'components/Myzone';
import SpecialOffer from 'components/SpecialOffer';
/*import Business from 'components/Business';*/
import Product from 'components/Product';
import Login from 'components/Login';
import Search from 'components/Search';
Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/myzone',
      name: 'myzone',
      component: Myzone
    },
    {
      path: '/specialOffer',
      name: 'specialOffer',
      component: SpecialOffer
    },
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },/*
    {
      path: '/business/:id',
      name: 'business',
      component: Business
    },*/
    {
      path: '/search/:keyword',
      name: 'Search',
      component: Search
    },
    {
      path: '/search/',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
