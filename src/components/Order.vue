<template>
  <div class="my-order-box">
    <Backbar title="我的订单"></Backbar>
    <div class="top-space"></div>
    <el-tabs class="my-order-list" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all">
        <div class="el-tab-pane-con order_box">
          <Orderitem></Orderitem>
        </div>
      </el-tab-pane>
      <el-tab-pane label="未付款" name="non-payment">
        <div class="el-tab-pane-con order_box">
          <Orderitem></Orderitem>
        </div>
      </el-tab-pane>
      <el-tab-pane label="退款" name="refund">
        <div class="el-tab-pane-con order_box">
          <Orderitem></Orderitem>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="space"></div>
    <Fixednav></Fixednav>
    <Fixedkefu></Fixedkefu>
  </div>

</template>

<script>
  import Backbar from './small_components/Back_bar';
  import Fixednav from './small_components/Fixed_nav';
  import Fixedkefu from './small_components/Fixed_kefu';
  import Orderitem from './small_components/Order_item';
  import {mapGetters} from 'vuex';


  export default {
    name: 'order',
    data() {
      return {
        showMe: false,
        activeName: ''
      };
    },
    computed: {
      ...mapGetters([
        'getLogin',
        'getFalseOrder' // 已完成订单
      ]),

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

      let keyword = this.$route.query.k
      this.activeName = keyword;
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
       // history.pushState 无刷新
       // history.pushState({title:"order"}, "order/", `?${this.activeName}`)
        //this.$route.query.k=this.activeName;
      }
    },
    components: {
      Backbar,
      Fixedkefu,
      Orderitem,
      Fixednav
    }
  };
</script>
<style lang="less">
  body {
    background: #eeeeee !important;
  }
</style>

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

  .my-order-box {
    background: #eeeeee;
    min-height: 100%;
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
      width: 33.333333333%;
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
