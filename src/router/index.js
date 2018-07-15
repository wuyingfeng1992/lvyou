import Vue from 'vue';
import Router from 'vue-router';

import Homepage from 'components/Homepage';
import OrderDetail from 'components/OrderDetail';
import Category from 'components/Category';
import Myzone from 'components/Myzone';
import Order from 'components/Order';
import SpecialOffer from 'components/SpecialOffer';
import Products from 'components/Products';
import Product from 'components/Product';
import OnlineOrder from 'components/OnlineOrder';
import Search from 'components/Search';
import Associates from 'components/Associates';
import Associate from 'components/Associate';
import CustomService from 'components/CustomService';
import Refund from 'components/Refund';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/category/:id',
      name: 'Category',
      component:Category
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
      path: '/products/:id',
      name: 'Products',
      component: Products
    },
    {
      path: '/refund/:id',
      name: 'Refund',
      component: Refund
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
      path: '/orderDetail/:id',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/associates/',
      name: 'Associates',
      component:Associates
    },
    {
      path: '/associate/:id',
      name: 'Associate',
      component:Associate
    },
    {
      path: '/onlineOrder/:id',
      name: 'onlineOrder',
      component: OnlineOrder
    },
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
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/customService',
      name: 'CustomService',
      component: CustomService
    }
  ]
});
