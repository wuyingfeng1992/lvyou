<template>
  <div class="myzone_index">
    <Backbar title="个人中心"></Backbar>
    <div class="myzone_content">
      <!-- 头 -->
      <div class="myzone_info">
        <div class="pic">
          <div class="image-wrap">
            <div class="huangguan"></div>
            <img src="../images/xqy.jpg" alt="">
          </div>

        </div>

        <div class="myzone_uid">
          {{ uname }}
        </div>
      </div>
    </div>
    <!-- 3分 -->
    <div class="myzone_index_content">
      <!-- 栏 -->
      <router-link to="/order?k=all">
        <div class="some_bar">
          <span class="v-md">我的订单</span>
          <span class="v-all">查看全部订单></span>
        </div>
      </router-link>
      <router-link to="/associates/">
        <div class="some_bar">
          <span class="v-md">常用联系人</span>
          <span class="v-all"></span>
        </div>
      </router-link>

      <div class="three_lan">
        <router-link to="/order?k=all" class="three_lan_">
          <span class="icon all"></span>
          <p class="index-3S6cZ_0">全部</p>
        </router-link>
        <router-link to="/order?k=non-payment" class="three_lan_">
          <span class="icon non-payment"></span>
          <p class="index-3S6cZ_0">未付款</p>
        </router-link>
        <router-link to="/order?k=refund" class="three_lan_">
          <span class="icon refund"></span>
          <p class="index-3S6cZ_0">退款</p>
          </router-link>
      </div>
      <div class="white-bg">
      </div>
    </div>
    <Fixednav></Fixednav>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import Fixedkefu from './small_components/Fixed_kefu';
  import Backbar from './small_components/Back_bar';
  import Fixednav from './small_components/Fixed_nav';

  export default {
    name: 'myzone',
    data() {
      return {
        uname: ''
      };
    },
    mounted() {
      /* if (!this.isLogin) {
         this.$router.replace('/login');
       } else {*/
      this.uname = this.$store.getters.getuname;
      // 设置当前标记为我的
     // this.$store.dispatch('setWhichpage', 'myzone');
      // }
    },
    computed: {
      isLogin() {
        return this.$store.getters.getLogin;
      }
    },
    methods: {},
    components: {
      Fixednav,
      Fixedkefu,
      Backbar
    }
  };
</script>

<style lang="less" scoped>
  .myzone_index_content {
    padding: 0 0.3rem;
    background: #fff;
    margin-top: 0.2rem;
    overflow: hidden;
    max-height: 100%;
    .white-bg {
      height: 1rem;
    }
  }

  .myzone_content {
    width: 100%;
    height: 4.9rem;
    margin-top: 1rem;
    padding: .8rem .4rem;
    box-sizing: border-box;
    background: #0097ff;
    text-align: center;
    .pic {
      text-align: center;
    }
    .myzone_info {
      display: flex;
      flex-direction: column;
    }
    img {
      width: 2.0rem;
      height: 2.0rem;
      border-radius: 50%;
      position: relative;
      z-index: 2000;
    }
    .myzone_uid {
      color: #fff;
      font-size: .5rem;
      font-weight: normal;
    }
    .image-wrap {
      margin-top: 0.5rem;
      font-size: 0;
      position: relative;
      display: inline-block;
      border: 1px solid #fff;
      border-radius: 50%;
    }
    .huangguan {
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      right: -20%;
      top: -40%;
      background-image: url("../images/icon/huangguan.png");
      background-size: auto 100%;
      background-repeat: no-repeat;
    }
  }

  .three_lan {
    display: table;
    width: 100%;
    height: 2.2rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    .three_lan_ {
      display: table-cell;
      width: 33.3333%;
      vertical-align: middle;
      text-align: center;
      font-size: .38rem;
      line-height: .37rem;
      font-weight: 500;
      color: #666;
      cursor: pointer;

    }
    .icon {
      width: 0.75rem;
      height: 0.75rem;
      display: inline-block;

      background-size: auto 100%;
      background-repeat: no-repeat;
      margin-top: 0.2rem;
      cursor: pointer;

      background-size: 100%;
      &.all {
        background-image: url("../images/icon/book.png");
      }
      &.non-payment {
        background-image: url("../images/icon/badage.png");
      }
      &.refund {
        background-image: url("../images/icon/money.png");
      }
    }
  }

  div.some_bar {
    width: 100%;
    height: 1.1rem;
    box-sizing: border-box;
    background: #fff;
    font-size: .42rem;
    line-height: 1.1rem;
    border-bottom: 1px solid #dedede;
    color: #000;
    display: flex;
    justify-content: space-between;
    .v-all {
      font-size: .36rem;
      font-weight: 500;
      line-height: 0.8rem;
      vertical-align: baseline;
      position: relative;
      color: #666;
    }
  }
</style>
