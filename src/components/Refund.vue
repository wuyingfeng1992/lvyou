<template>
  <div class="product-box-online refund-box">
    <Backbar title="申请退款"></Backbar>
    <div class="top-space"></div>
    <div class="product-address">
      <div class="product-address-item desc">
        <div class="product-desc">德天跨国瀑布景区门票</div>
      </div>

      <div class="product-address-item orderItem">
        <div class="name">
          订单编号
        </div>
        <div class="product-right">
          12345678
        </div>
      </div>

      <div class="product-address-item orderItem">
        <div class="name">
          订单金额
        </div>
        <div class="product-right red">
          ￥123
        </div>
      </div>
      <div class="product-address-item orderItem">
        <div class="name">
          退款金额
        </div>
        <div class="product-right">
          <el-input v-model="money" placeholder="请输入金额"></el-input>
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
            v-model="textarea">
          </el-input>
        </div>
      </div>
    </div>

    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import Fixedkefu from './small_components/Fixed_kefu';
  import FixedButton from './small_components/Fixed_button';
  import Backbar from './small_components/Back_bar';


  export default {
    name: 'product',
    data() {
      return {
        textarea:'',
        money:'',
      };
    },
    mounted() {

    },
    computed: {},
    methods: {
      orderSubmit() {
        console.log('提交订单,orderSubmit')
        this.$router.push('/submitOrder/s0001');
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
