<template>
  <div class="order_box">
    <router-link :to="'/product/'+data.id" class="order_one " :class="colum">
      <div class="order_img">
        <img :src="proxyapi+data.image" alt="">
      </div>
      <div class="order_info ">
        <header class="order_info_t">
          <div class="order_title">
            {{data.title}}
          </div>
        </header>
        <div class="order_info_s" v-if="!colum"  v-for="(value, key) in data.features">
          <li class="order_info_s_item">
            <span class="start">★</span>
            <span class="text">【{{ key }}】</span>
            <span class="desc">{{ value }}</span>
          </li>
        </div>
        <footer class="order_info_b">
          <span class="order_price">￥{{data.price}}</span>
          <span class="order_price_text">起/人</span>
        </footer>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {proxyapi} from '../../staticData/proxyapi';
  export default {
    name: "one_product",
    props:['colum','data'],
    data(){
      return{
        proxyapi
      }
    }
  }
</script>

<style lang="less">


  .order_box {

  }

  .order_one {
    background: #fff;
    margin-bottom: .2rem;
    width: 100%;
    border: 1px solid #bcbcbc;
    box-sizing: border-box;
    padding: 4px;
    display: flex;
    /*&.colum{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .order_info_s{
        text-align: left;
      }
    }*/
    .order_img {
      flex: none;
      width: 3.5rem;
      font-size: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
        height: 2.8rem;
      }
    }
    .order_info_s_item {
      font-size: 0.37rem;
      font-weight: normal;
      margin-left: 0.2rem;
      .start {
        font-size: 0.22rem;
        color: #fc9a00;
      }
      .text {
        color: #fc9a00;
        margin-left: -0.1rem;
      }
      .desc {
        color: #585858;
        font-weight: bold;
      }
    }
    .order_info {
      margin-left: 15px;
      box-sizing: border-box;
      word-break: break-all;
      padding: 3px 0;

      .order_info_t {
        text-align: left;
        .order_title {
          padding-bottom: 0.3rem;
          text-align: left;
          font-weight: bold;
          font-size: 0.39rem;
          line-height: 0.48rem;
          color: #585858;
          margin-bottom: 2px;
        }
        .order_time {
          font-size: .3rem;
          color: #999;
          line-height: .6rem;
        }
      }
      .order_info_b {
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        margin-top: 5px;
        /*padding: 0.1rem 0 0.15rem 0;*/
        .order_price {
          font-size: 0.48rem;
          color: #ff4000;
          font-weight: bold;
          margin-right: 0.05rem;
        }
        .order_price_text {
          font-size: 0.22rem;
          color: #ff4000;
          font-weight: bold;
          vertical-align: baseline;
        }
      }
    }
  }


</style>
