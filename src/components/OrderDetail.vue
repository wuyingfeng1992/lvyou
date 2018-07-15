<template>
  <div class="my-orders-box">
    <Backbar title="我的订单详情"></Backbar>
    <div class="top-space"></div>
    <div class="headerTable">
      <div class="hearder_title">
        联系人信息
      </div>
      <div class="table-content" v-if="data.order">
        <div class="table-item">
          <div class="cloum1 cloum">姓名</div>
          <div class="cloum2 cloum">{{data.order.buyer_name}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">电话号码</div>
          <div class="cloum2 cloum">{{data.order.buyer_phone}}</div>
        </div>
      </div>
    </div>
    <div class="headerTable" v-if="data.ext">
      <div class="hearder_title">
        出游人信息
      </div>
      <div v-for="item in data.ext" class="table-content">
        <div class="table-item">
          <div class="cloum1 cloum">姓名</div>
          <div class="cloum2 cloum">{{item.name}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">身份证</div>
          <div class="cloum2 cloum">{{item.idcard}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">手机号码</div>
          <div class="cloum2 cloum">{{item.phone}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">护照</div>
          <div class="cloum2 cloum">{{item.passport}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">是否儿童</div>
          <div class="cloum2 cloum">{{item.is_child?'是':'否'}}</div>
        </div>
      </div>
    </div>
    <div class="headerTable" v-if="data.order">
      <div class="hearder_title">
        订单信息
      </div>
      <div class="table-content">
        <div class="table-item">
          <div class="cloum1 cloum">订单编号</div>
          <div class="cloum2 cloum">{{data.order.order_no}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">订单时间</div>
          <div class="cloum2 cloum">{{data.order.pay_time_text}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">订单状态</div>
          <div class="cloum2 cloum">{{data.order.status_text}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">产品</div>
          <div class="cloum2 cloum">{{data.order.goods_name}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">产品单价</div>
          <div class="cloum2 cloum"> ¥ {{data.order.unit_price}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">额外费用</div>
          <div class="cloum2 cloum">¥ {{data.order.extra_price}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">订单总价</div>
          <div class="cloum2 cloum">¥ {{data.order.total_price}}</div>
        </div>
      </div>
    </div>
    <div class="headerTable" v-if="data.refund">
      <div class="hearder_title">
        退款信息
      </div>
      <div class="table-content">
        <div class="table-item">
          <div class="cloum1 cloum">退款单号</div>
          <div class="cloum2 cloum">{{data.refund.refund_no}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">申请时间</div>
          <div class="cloum2 cloum">{{dtimestampToTime(data.refund.createtime)}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">退款状态</div>
          <div class="cloum2 cloum">{{data.refund.status_text}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">退款金额</div>
          <div class="cloum2 cloum">¥{{data.refund.refund_price}}</div>
        </div>
        <div class="table-item">
          <div class="cloum1 cloum">退款理由</div>
          <div class="cloum2 cloum"> {{data.refund.reason}}</div>
        </div>
      </div>
    </div>
    <div class="headerTable">
      <div class="hearder_title">
        备注
      </div>
      <div class="table-content" v-if="data.order" v-html="data.order.remark" :aa="JSON.stringify(data.order)">

      </div>
    </div>
    <Fixedkefu></Fixedkefu>
  </div>


</template>


<script>
  import Backbar from './small_components/Back_bar';
  import Fixedkefu from './small_components/Fixed_kefu';
  import {mapGetters, mapActions} from 'vuex';
  import {getOrderDetail} from '../axioser/request';


  export default {
    name: 'orders',
    data() {
      return {
        data: {}
      };
    },
    computed: {
      ...mapGetters([
        'getRefundOrder',
      ])
    },
    methods: {
      dtimestampToTime: function (timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
      },
      ...mapActions(['getRefundOrderEvt', 'getNotpayOrderEvt', 'getAllOrderEvt']),

    },
    mounted() {
      var orderId = this.$route.params.id;
      var params = {orderId}
      getOrderDetail(params)
        .then(({data}) => {
          console.log(data, 'sssssgggggggggggggggggggggggggg拜拜拜拜拜拜拜拜')
          this.data = data;
          if (data.code === 1) {

          } else {

          }
        })
    },
    components: {
      Backbar,
      Fixedkefu,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .my-orders-box {
    margin-bottom: 0.5rem;
    .headerTable {

      margin-bottom: 0.3rem;
      .table-content {
        margin-bottom: 0.3rem;
      }
      .hearder_title {
        font-weight: bold;
        color: #333;
        font-size: 0.42rem;
        background: #fff;
        line-height: 0.89rem;
        border-bottom: 1px solid #ccc;
        padding-left: 0.3rem;
      }
      .table-item {
        display: flex;
        background: #fff;
        width: 100%;
        line-height: 0.79rem;
        &:last-child {
          padding-bottom: 0.2rem;
        }
        &:firt-child {
          padding-top: 0.2rem;
        }
      }
      .cloum {
        font-size: 0.38rem;
        color: #666;

      }
      .cloum1 {
        width: 30%;
        padding-left: 0.3rem;
      }
      .cloum2 {
        width: 70%;
        color: #333;
      }
    }
  }

</style>
