<template>
  <div class="product-box-online refund-box">
    <Backbar title="申请退款"></Backbar>
    <div class="top-space"></div>
    <div class="product-address" v-if="getRefundOrderInfo.refund">
      <div class="product-address-item desc">
        <div class="product-desc">{{getRefundOrderInfo.refund.goods_name}}</div>
      </div>

      <div class="product-address-item orderItem">
        <div class="name">
          订单编号
        </div>
        <div class="product-right">
          {{getRefundOrderInfo.refund.order_no}}
        </div>
      </div>

      <div class="product-address-item orderItem">
        <div class="name">
          订单金额
        </div>
        <div class="product-right red">
          ￥{{getRefundOrderInfo.refund.total_price}}
        </div>
      </div>
      <div class="product-address-item orderItem">
        <div class="name">
          退款金额
        </div>
        <div class="product-right">
          <el-input v-model="refund_price" placeholder="请输入金额"></el-input>
        </div>
      </div>
      <div class="product-address-item orderItem textarea">
        <div class="name">
          退款原因
        </div>
        <div class="product-bottom">
          <el-input class="refund-textarea"
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="reason">
          </el-input>
        </div>
      </div>
    </div>

    <el-button type="primary" @click="submitForm()">提交</el-button>

    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import Fixedkefu from './small_components/Fixed_kefu';
  import FixedButton from './small_components/Fixed_button';
  import Backbar from './small_components/Back_bar';
  import {mapGetters,mapActions} from 'vuex';
  import {refundOrder} from '../axioser/request'
  export default {
    name: 'product',
    data() {
      return {
        reason:'',
        refund_price:'',
      };
    },
    mounted() {
      var id=parseInt(this.$route.params.id);
      this.getRefundOrderInfoEvt(id);
    },
    computed: {
      ...mapGetters([
        'getRefundOrderInfo',
        //'getProductCategory'
      ])
    },
    methods: {
    ...mapActions(['getRefundOrderInfoEvt']),
      submitForm() {
        if (this.reason=='' ) {
          this.$message({
            type: 'info',
            message: '请输入退款理由'
          });
          return
        }
        if (this.refund_price=='' ) {
          this.$message({
            type: 'info',
            message: '请输入退款金额'
          });
          return
        }
        debugger
        var id=this.$route.params.id;
        var params = {
          order_id: parseInt(id),
          refund_price:parseFloat( this.refund_price),
          reason: this.reason,
        }
        console.log(JSON.stringify(params))
        refundOrder(params)
          .then(({data}) => {
            if (data.code === 1) {
              /*this.$message({
                type: 'success',
                message: '提交成功'
              });*/
              window.location.href='/product/'+id;
            } else {
              this.$message({
                type: 'info',
                message: data.msg || '提交失败'
              });
            }
          })

      },
      handleChange(value) {
        console.log(value);
      },
    },
    components: {
      FixedButton,
      Fixedkefu,
      Backbar
    }
  };
</script>

<style lang="less">
  .product-box-online.refund-box {
    width: 100%;
    background: #eee;
    text-align: center;
    .product-address {
      padding: 0;
      background: #eee;
      font-size: 0.32rem;
      color: #696969;
      margin-bottom: 8px;
      .product-address-item {
        padding: 0 0.3rem;
        background: #fff;
        display: flex;
        .product-bottom{
          width: 100%;
          padding-bottom: 2.5rem;

        }
        .refund-textarea{
          width: 100%;
        }
        /*  flex-direction: column;*/
        border-bottom: 1px solid #dcdcdc;
        .el-input__inner {
          height: 80%;
          line-height: 80%;
          display: inline-block;
          width: 50%;
          padding: 0.18rem 0.2rem;
          font-size: 0.28rem;
        }
        .product-right{
          text-align: right;
        }
        &:last-child {
          border-bottom: 0;
        }
        .red {
          color: #ff4000;
        }
        &.orderItem {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          color: #333;
        }
        &.textarea{
          flex-direction: column;
          margin-top: 20px;
          justify-content: flex-start;
          align-items: flex-start;
          .el-textarea__inner{
            font-size: 0.28rem;
          }
        }
      }
    }
  }

</style>
