<template>
  <div class="product-box" v-if="getProductDetail" >
    <div class="product-banner-wrap">
      <div class="product-back">
        <span class="back-icon" @click="back_one"></span>
      </div>
      <div class="product-banner">
        <Swipe class="my-swipe"
               :loop="true"
               :auto="5000"><!-- swipe 设置自动滚动 -->
          <Swipe-item v-for="(item,index  ) in getProductDetail.image" class="slide"
                      :class="'slide'+JSON.stringify(index)">
            <div class="common_banner">
              <img :src="proxyapi+item" alt="">
            </div>
          </Swipe-item>
        </Swipe>
      </div>
      <div class="product-banner-bottom">
        <span class="product-desc">{{getProductDetail.title}}</span>
      </div>
    </div>
    <div class="product-price-d">
      <div class="product-price-d-item">
        <span class="text1">成人价:</span>
        <span class="text2">￥</span>
        <span class="text3">{{getProductDetail.price.adult_price}}元</span>
      </div>
      <div class="product-price-d-item">
        <span class="text1">儿童价:</span>
        <span class="text2">￥</span>
        <span class="text3">{{getProductDetail.price.child_price}}元</span>
      </div>
    </div>
    <div class="product-address">
      <div class="product-address-item noselect">
        <div class="name">
          出发地点
        </div>
        <div class="list">
          <div class="list-item" v-for="(inedx,item) in getProductDetail.origin" :originId="item">
            {{inedx}}
          </div>
        </div>
      </div>
      <div class="product-address-item data noselect">
        <div class="name">
          出游日期
        </div>
        <div class="list ">
          <div class="list-item" @click="dialogVisible  = true">请选择出行日期</div>
        </div>
      </div>
      <div  v-html="getProductDetail.content">

      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="90%"
    >
      <full-calendar :events="getProductDetail.recentDate" lang='zh'
                     @changeMonth="changeMonth"
                     @eventClick="eventClick"
                     @dayClick="dayClick"
                     @moreClick="moreClick"
      ></full-calendar>
      <div class="product-price-d">
        <div class="product-price-d-item">
          成人 <span class="price" v-if="curData.adult_price">￥{{curData.adult_price}}</span>
        </div>
        <div class="product-price-d-item">
          儿童 <span class="price" v-if="curData.child_price">￥{{curData.child_price}}</span>
        </div>
      </div>
    </el-dialog>

    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>

    <!-- 固定导航栏 -->
    <FixedButton :btnText="btnText" @orderSubmit="dialogVisible  = true" :calcMoney="false"></FixedButton>
    <Fixedkefu></Fixedkefu>


  </div>
</template>

<script>
  import FixedButton from './small_components/Fixed_button';
  import Fixedkefu from './small_components/Fixed_kefu';
  import {mapGetters, mapActions} from 'vuex';
  import {proxyapi} from '../staticData/proxyapi';
  import {Swipe, SwipeItem} from 'vue-swipe';

  export default {
    name: 'product',
    data() {
      return {
        proxyapi,
        btnText: '在线预订',
        dialogVisible: false,
        id: '',
        fcEvents: [
          {
            title: '￥1245',
            start: '2018-07-2'
          }
        ]

      };
    },
    mounted() {
      var id = this.$route.params.id;
      this.id = id;
      this.getProductDetailEvt(id);
    },
    computed: {
      ...mapGetters([
        'getProductDetail',
      ]),
      curData: function () {
        var date = new Date();
        var time=this.getDate(date)
        var data = this.getDataByDay(time);
        return data;
      }

    },
    methods: {
      getDate(date){
        var year = date.getFullYear(); //获取年
        var month = '0'+(date.getMonth() + 1);//获取月
        var month2 = (date.getMonth() + 1);//获取月
        var day = '0'+date.getDate(); //获取当日
        var day2 = date.getDate(); //获取当日
        var time = year + "-" + month + "-" + day; //组合时间   alert("当前日期："+time);
        var time2 = year + "-" + month2 + "-" + day2; //组合时间   alert("当前日期："+time);
        var time3 = year + "-" + month + "-" + day2; //组合时间   alert("当前日期："+time);
        var time4 = year + "-" + month2 + "-" + day; //组合时间   alert("当前日期："+time);
        return{
          time,
          time2,
          time3,
          time4,
        }
      },
      getDataByDay: function (time) {
        var data = this.getProductDetail.recentDate;
        var curData = {};
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          if (item.start == time.time||item.start ==  time.time2||item.start ==  time.time3||item.start ==  time.time4) {
            curData = item;
            break;
          }
        }
        return curData;
      },
      ...mapActions(['getProductDetailEvt']),
      back_one() {
        this.$router.go(-1);
      },
      changeMonth() {
        console.log('changeMonth')

      },
      eventClick(day, jsEvent) {
        console.log('eventClick ', 's谁谁谁谁谁谁水水水水')
        this.dayClick(day.start, jsEvent)
      },
      dayClick(day, jsEvent) {
        var data = this.getProductDetail;
        var date = new Date(day.toString());
        var time=this.getDate(date)
        day = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + date.getDate()
        var dayData = this.getDataByDay(time);
        data.dayDate = dayData;
        if(JSON.stringify(dayData)=="{}"){
          this.$message({
            type: 'fail',
            message: '该日期暂不开放!'
          });
          return;
        }
        data.currentDay = day;
        this.$store.commit("SET_CURRENT_PRODUCT_INFO", data);
        this.$router.push('/onlineOrder/' + this.id);
      },
      moreClick() {
        console.log('moreClick')
      }
    },
    components: {
      FixedButton,
      SwipeItem,
      Swipe,
      Fixedkefu,
    }
  };
</script>
<style>

</style>

<style lang="less">
  .product-box {
    .el-message__content{
      font-size: 0.42rem;
    }
    table{
      width: 100% !important;
      text-align: left;
      p,span{
        text-align: left !important;
        font-size: 0.29rem !important;
        line-height: 0.52rem !important;
      }

    }
    .product-price-d {
      display: flex;
      justify-content: center;

      .product-price-d-item {
        font-size: 0.34rem;
      }
      .price {
        color: #ff4200;
      }
    }
    .el-dialog__body {
      padding: 0;

    }
    .el-dialog__headerbtn {
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.38rem;
    }
    .comp-full-calendar {
      padding: 0 0.6rem 0.15rem 0.6rem;
      font-size: 0.32rem;
      max-width: 100%;
      .title {
        font-size: 0.48rem;
      }
      .full-calendar-body {
        margin-top: 10px;
      }
      .full-calendar-body .dates .dates-events .events-week .events-day {
        height: 1.2rem;
        min-height: 1.2rem;
      }
      .full-calendar-body .dates .week-row .day-cell {
        height: 1.2rem;
        min-height: 1.2rem;
        &:not(.eventAble){
          opacity: 0.75;
          pointer-events: none;
        }
      }
      .full-calendar-body .weeks .week {
        line-height: 0.7rem;
      }
      .full-calendar-body .dates .dates-events .events-week .events-day .day-number, .full-calendar-body .dates .week-row .day-cell .day-number {
        text-align: center;
        margin-top: 3px;
        font-size: 0.32rem;
      }
      .event-box {
        width: 100%;
        position: relative;
        left: -3px;
      }
      .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {
        background: #03a4ea;
        color: #fff;
        font-size: 0.26rem;
        height: 0.5rem;
        line-height: 0.5rem;
        width: 105%;
        text-align: center;
        left: -0.15rem;
        position: absolute;
        top: 0;
      }
      .full-calendar-body .dates .week-row .day-cell {
        padding: 0;
      }
      .full-calendar-header .header-center .prev-month, .full-calendar-header .header-center .next-month {
        font-size: 0.38rem;
      }
      .full-calendar-body .dates .week-row .day-cell {
        border-right: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
      }
      .full-calendar-body .dates .week-row {
        border-left: 1px solid #aaa;
      }
      .full-calendar-body .weeks {
        border-top: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
        border-left: 1px solid #aaa;
      }
      .full-calendar-body .weeks .week {
        border-right: 1px solid #aaa;
      }
      ul, p {
        height: 0.5rem;
        font-size: 0.32rem;
      }

    }
    width: 100%;
    .product-address {
      padding: 0 0.3rem;
      background: #fff;
      font-size: 0.30rem;
      color: #696969;
      margin-bottom: 8px;
      .name {
        color: #1c1a16;
        margin-right: 0.3rem;
        width: 20%;
      }
      .product-address-item {
        display: flex;
        line-height: 0.96rem;
        height: 0.96rem;
        border-bottom: 1px solid #dcdcdc;
        &:last-child {
          border-bottom:none;
        }
        .list {
          display: flex;

        }
        .list-item {
          padding: 0 0.2rem;
          position: relative;
        }
        &:not(.noselect) .list-item .selected::after, &:not(.noselect) .list-item:hover:after {
          content: '';
          border: 1px solid #00a0e9;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 25%;
          height: 50%;
          cursor: pointer;
        }
        &:not(.noselect) .list-item .selected::before, &:not(.noselect) .list-item:hover:before {
          content: '';
          width: 0.35rem;
          height: 0.35rem;
          position: absolute;
          right: -2px;
          bottom: 22%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-image: url("../images/icon/selected.png");
        }
      }

    }

    .back-icon {
      width: 0.8rem;
      height: 0.8rem;
      display: block;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      cursor: pointer;
      background-image: url("../images/icon/back2.png");
    }
    .product-price-d {
      height: 1.2rem;
      line-height: 1.2rem;
      overflow: hidden;
      font-size: 0.3rem;
      display: flex;
      justify-content: flex-end;
      .product-price-d-item {
        padding-right: 0.3rem;
        .text2 {
          font-size: 0.2rem;
          color: #ff4200;
        }
        .text3 {
          color: #ff4200;
          font-size: 0.38rem;
          font-weight: bold;
        }
      }

    }

    .product-banner-wrap {
      position: relative;
      height: 5.48rem;
      position: relative;
    }
    .product-back {
      position: absolute;
      left: 0.6rem;
      top: 0.6rem;
      width: 0.6rem;
      z-index: 20;
      height: 0.6rem;
    }
    .product-banner-bottom {
      height: 0.83rem;
      line-height: 0.83rem;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      padding: 0 0.3rem;
      font-size: 0.34rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .product-banner {
      height: 100%;
      width: auto;
      font-size: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

</style>
