<template>
  <div class="order_box_one_wrap">
    <div class="order_box_one_top">
      <div class="order_box_one_goodsnum">
        订单号：123456789
      </div>
      <div class="order_box_one_goodstext">
        已确认
      </div>
    </div>
    <div class="order_one">
      <router-link class="order_img" to="product/s0001">
        <img src="../../images/dingdan.jpg" alt="">
      </router-link>
      <div class="order_info">
        <header class="order_info_t">
          <div class="order_title">
            【跟团游】全程无自费泰国6天 5晚至尊安心游！双岛出海＋三 合一夜秀表演
          </div>
        </header>
      </div>
      <footer class="order_info_b">
        <span class="order_price">￥2798</span>
        <span class="order_price_text">X1</span>
      </footer>
    </div>
    <div class="order_box_one_b">
      共1件商品 合计：￥2798.00
    </div>
    <div class="order_box_one_d">
      <div class="order_box_one_btn1">
        <router-link to="refund/s001">
          申请退款
        </router-link>
      </div>
      <div class="order_box_one_btn">删除订单</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "order_item"
    }
</script>

<style lang="less" >
  .order_box_one_b {
    text-align: right;
    color: #585858;
    font-size: 0.38rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #dcdcdc;
  }
  .order_box_one_top {
    display: flex;
    justify-content: space-between;
    color: #585858;
    font-size: 0.38rem;
    height: 1.2rem;
    line-height: 1.2rem;
    .order_box_one_goodstext {
      color: #00a0e9;
    }
  }
  .order_box_one_wrap {

    background: #fff;
    padding: 0 0.3rem;
    margin-bottom: 10px;

  }
  .order_box_one_d {
    text-align: right;
    padding: 0.25rem 0.25rem 0.28rem 0.25rem;
    margin-top: -0.36rem;
  }
  .order_box_one_btn,.order_box_one_btn1{
    color: #000000;
    background: #dcdcdc;
    border: 1px solid #a0a0a0;
    font-size: 0.36rem;
    padding: 0.1rem 0.23rem;
    display: inline-block;
    cursor: pointer;
  }
  .order_info_t {
    padding-right: 10px;

  }



</style>
