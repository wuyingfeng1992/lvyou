<template>
  <div class="my-order-box">
    <Backbar title="我的订单"></Backbar>
    <div class="top-space"></div>
    <el-tabs class="my-order-list" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div class="el-tab-pane-con order_box">
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
              <router-link  class="order_img" to="product/s0001">
                <img src="../images/dingdan.jpg" alt="">
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
              <div class="order_box_one_btn">删除订单</div>
            </div>
          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
      <el-tab-pane label="待发货" name="third">待发货</el-tab-pane>
      <el-tab-pane label="待收货" name="fourth">待收货</el-tab-pane>
    </el-tabs>
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>

</template>

<script>
  import Backbar from './small_components/Back_bar';
  import Fixednav from './small_components/Fixed_nav';
  import {mapGetters} from 'vuex';

  export default {
    name: 'order',
    data() {
      return {
        showMe: false,
        activeName: 'first'
      };
    },
    computed: {
      ...mapGetters([
        'getLogin',
        'getFalseOrder' // 已完成订单
      ])
    },
    mounted() {
      // console.log(this.getLogin);
      // 设置当前标记为主页
      this.$store.dispatch('setWhichpage', 'order');
      /* if (!this.getLogin) {
         this.$router.replace('/login');
       } else {*/
      // 模拟加载
      this.$store.dispatch('setLoading', true);
      var time = Math.floor(Math.random() * 2000);
      console.log('模拟加载用时' + time);
      setTimeout(() => {
        this.$store.dispatch('setLoading', false);
        this.showMe = true;
      }, time);
      // }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      Backbar,
      Fixednav
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .top-space {
    height: 1.08rem;
  }
  .space {
    width: 100%;
    height: 1.55rem;
    background: #eeeeee;
  }
  .my-order-box{
    background: #eeeeee;
    min-height: 100%;
  }
  body{
    background: #eeeeee;
  }

  .my-order-list {
    .order_info_b {
      .order_price {
        font-weight: bold;
      }
      font-size: 0.30rem;
      color: #ff4000;
    }
    .el-tab-pane-con {

      background: #eeeeee;

    }

    .order_one {
      border: none;

    }
    .order_box_one_b {
      text-align: right;
      color: #585858;
      font-size: 0.26rem;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #dcdcdc;
    }
    .order_box_one_top {
      display: flex;
      justify-content: space-between;
      color: #585858;
      font-size: 0.26rem;
      height: 0.88rem;
      line-height: 0.88rem;
      .order_box_one_goodstext{
        color: #00a0e9;
      }
    }
    .order_box_one_wrap {

      background: #fff;
      padding: 0 0.3rem;
      margin-bottom: 10px;

    }
    .order_box_one_d{
      text-align: right;
      padding: 0 0 0.15rem 0;
      margin-top: -0.36rem;
    }
    .order_box_one_btn{
      color: #000000;
      background: #dcdcdc;
      border: 1px solid #a0a0a0;
      font-size: 0.26rem;
      padding: 0.1rem 0.23rem;
      display: inline-block;
    }
    .order_info_t {
      padding-right: 10px;

    }
    .el-tabs__active-bar {
      color: #00a0e9;
    }
    .el-tabs__nav-wrap {
      margin-bottom: 0;
    }
    .el-tabs__nav {
      width: 100%;
    }
    .el-tabs__nav-wrap::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      z-index: 1;
    }
    .el-tabs__item {
      font-size: .4rem;
      margin-bottom: -3px;
      height: 100%;
      line-height: 100%;
      position: relative;
      top: -.2rem;
      width: 25%;
      text-align: center;

    }
    .el-tabs__item.is-active, .el-tabs__item:hover {
      color: #00a0e9;
    }
    .el-tabs__header {
      background: #dcdcdc;
      margin: 0;
      height: 0.94rem;
      line-height: 0.94rem;
    }

  }

</style>
