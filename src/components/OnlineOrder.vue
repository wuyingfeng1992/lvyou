<template>
  <div class="product-box-online">
    <Backbar title="提交订单"></Backbar>
    <div class="top-space"></div>
    <div class="product-address">
      <div class="product-address-item desc">
        <div class="product-desc">德天跨国瀑布景区门票</div>
      </div>

      <div class="product-address-item address">
        <div class="name">
          出发地点
        </div>
        <div class="list">
          <div class="list-item">南宁</div>
          <div class="list-item">深圳</div>
          <div class="list-item">广州</div>
        </div>
      </div>
      <div class="product-address-item data">
        <div class="name">
          出发日期
        </div>
        <div class="list">
          <div class="list-item noselect selected">
            <div class="text1">今天06-12</div>
            <div class="text2">￥119</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-address">
      <div class="product-address-item add">

        <div class="product-add"  @click="dialogVisible  = true">
          <div class="icon"></div>
          <div class="text">添加/修改游客</div>
        </div>
      </div>
      <div class="product-address-item person">
        <div class="name">
          彭于晏
        </div>
        <div class="phone">
          13532665489
        </div>
        <div class="iconWrap">
          <!--<div class="checkBox selected"></div>-->
          <div class="delete"></div>
        </div>
      </div>

      <div class="product-address-item person">
        <div class="name">
          彭于晏
        </div>
        <div class="name phone">
          13532665489
        </div>
        <div class="iconWrap">
          <!--<div class="checkBox"></div>-->
          <div class="delete"></div>
        </div>

      </div>
    </div>
    <div class="product-address">
      <div class="product-address-item">
        <div class="name">
          出行保险
        </div>
      </div>
      <div class="product-address-item bao">
        <div class="product-bao">
          <span>保</span>
        </div>
        <div class="product-bao2">
          ￥10/人x1份
        </div>
        <div class="product-bao-desc">
          （意外事故10万，社保内医疗1万）
        </div>
        <div class="product-bao-checkBox selected">
          <el-input-number v-model="num1" @change="handleChange" :min="0" :max="3000" label="描述文字"></el-input-number>
        </div>
      </div>
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定导航栏 -->
    <FixedButton :btnText="btnText" @orderSubmit="orderSubmit"></FixedButton>
    <Fixedkefu></Fixedkefu>


<!--:before-close="handleClose"-->
    <el-dialog
      title="选择出游同伴"
      :visible.sync="dialogVisible"
      width="90%"
      >
      <div class="associalSel" >
        <div class="list-associates">
          <div class="some_bar">
              <span class="v-md">黎明</span>
              <span class="v-mc">18533264595</span>
              <el-checkbox ></el-checkbox>
              <!--<span class="v-all">查看全部订单></span>-->
          </div>
          <div class="some_bar">
              <span class="v-md">黎明2</span>
              <span class="v-mc">18533264595</span>
              <el-checkbox></el-checkbox>
              <!--<span class="v-all">查看全部订单></span>-->
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

    <div class="associalSel" v-if="associalShow">
      <div class="list-associates">
        <div class="some_bar">
          <router-link to="/associate/id001">
            <span class="v-md">黎明</span>
            <span class="v-mc">18533264595</span>
            <!--<span class="v-all">查看全部订单></span>-->
          </router-link>
        </div>
        <div class="some_bar">
          <router-link to="/associate/id002">
            <span class="v-md">黎明2</span>
            <span class="v-mc">18533264595</span>
            <!--<span class="v-all">查看全部订单></span>-->
          </router-link>
        </div>
      </div>
    </div>
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
        btnText: '提交订单',
        associalShow: false,
        num1: 3000,
        dialogVisible: false,

      };
    },
    mounted() {

    },
    computed: {},
    methods: {
      orderSubmit() {
        console.log('提交订单,orderSubmit')

      },
      handleChange(value) {
        console.log(value);
      },
      associalSel(flag) {
        this.associalShow = flag;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    components: {
      FixedButton,
      Fixedkefu,
      Backbar,
    }
  };
</script>

<style lang="less">
  .product-box-online {
    width: 100%;
    .el-dialog__headerbtn{
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.38rem;
    }
    .el-dialog__wrapper{
      .el-dialog{
        border-radius: 5px;
      }
      .el-dialog__body{
        padding: 0 0.3rem;
      }
      div.some_bar{
        font-size: .32rem;
        padding: 0;
        display: flex;
        line-height: 0.8rem;
        .el-checkbox{
          margin-right: 0.3rem;
          margin-left: auto;
        }
      }

    }
    .el-dialog__header{
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.28rem;
      padding: 0 10px;
      padding: 0 0.4rem;
      .el-dialog__title{
        font-size: 0.32rem;
        color: #000;
      }
    }
    .el-checkbox{
      font-size: 0.32rem;
      .el-checkbox__inner{
        width: 0.38rem;
        height: 0.38rem;
        border: 1px solid #ccc;
      }
      .el-checkbox__inner::after{
        width: 0.2rem;
        height: 0.3rem;
        top: -0.05rem;
        border: 0.05rem solid #fff;
        border-left: 0;
        border-top: 0;
      }
    }
    .el-button{
      font-size: 0.32rem;
      padding: 0.2rem 0.3rem;
    }
    .product-address {
      padding: 0 0.3rem;
      background: #fff;
      font-size: 0.32rem;
      color: #696969;
      margin-bottom: 8px;
      .name {
        color: #000;
        padding: 0.25rem 0;

      }
      .phone {
        color: #1c1a16;
        margin-right: 0.3rem;
      }
      .product-desc {
        color: #000;
        font-size: 0.40rem;
        font-weight: bold;
      }
      .product-add {
        color: #000;
        font-weight: bold;
        text-align: center;
        padding-top: 0.3rem;
        padding-bottom: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          background-image: url("../images/icon/add.png");
          background-size: 100% auto;
          margin-right: 0.1rem;
          cursor: pointer;
          vertical-align: center;

        }
      }
      .product-address-item {
        display: flex;
        /*  flex-direction: column;*/
        &.address {
          display: flex;
          flex-direction: row;
          align-items: center;
          .name {
            padding-right: 0.25rem;
            position: relative;
            top: 0.05rem;
          }
          .list {
            display: flex;
            .list-item {
              padding: 0.1rem 0.20rem 0 0.2rem;
            }
          }
          &:not(.noselect) .list-item .selected::after, &:not(.noselect) .list-item:hover:after {
            content: '';
            border: 1px solid #00a0e9;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            cursor: pointer;
          }
          &:not(.noselect) .list-item .selected::before, &:not(.noselect) .list-item:hover:before {
            content: '';
            width: 8px;
            height: 6px;
            position: absolute;
            right: -1px;
            bottom: -1px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-image: url("../images/icon/selected.png");
          }
        }
        &.add {
          text-align: center;
          justify-content: center;
        }
        &.bao {
          flex-direction: row;
          align-items: center;
          height: 0.9rem;

          .product-bao {
            background: #03a4ea;
            padding: 0.02rem 0.07rem 0.02rem 0.05rem;
            text-align: center;
            color: #fff;
          }
          .product-bao2 {
            font-size: 0.26rem;
            color: #000;
            margin-left: 0.2rem;
          }
          .product-bao-desc {
            font-size: 0.24rem;
          }
          .product-bao-checkBox {
            margin-left: auto;
            margin-right: 0.2rem;
            /*  width: 0.25rem;
              height: 0.25rem;
             border-radius: 50%;
              border: 1px solid #7f7f7f;
              cursor: pointer;
              &.selected{
                background: #03a4ea;
                border: none;
              }*/
            .el-input-number {
              width: 1.8rem;
              line-height: 0.6rem;
              font-size: 0.26rem;
              .el-input {
                height: 100%;
              }
              .el-input__inner {
                height: 100%;
                line-height: 100%;
                padding: 0;
                border-radius: 0;
                display: inline-block;
                outline: none;
                line-height: 0.6rem;
                height: 0.6rem;
                display: inline-block;
                border: 1px solid #666;
                border-left: none;
                border-right: none;
                font-size: 0.3rem;
              }
              .el-input-number__decrease, .el-input-number__increase {
                width: 0.4rem;
                border-radius: 0;
                font-size: 0.3rem;
                border: 1px solid #ccc;
                box-sizing: border-box;
               /* height: calc(100% - 2px);*/
                border-top: 0;
              }
              .el-input-number__increase {
                right: 0;
              }
              .el-input-number__decrease {
                left: 0;
              }

            }
          }

        }
        &.person {
          flex-direction: row;
          align-items: center;
          border-bottom: 1px solid #dcdcdc;
          &:last-child {
            border-bottom: none;
          }
          .iconWrap {
            margin-left: auto;
            margin-right: 0.2rem;
          }
          .phone {
            margin-left: 0.6rem;
          }
        }
        .checkBox {
          width: 0.45rem;
          height: 0.45rem;
          display: inline-block;
          background-image: url("../images/icon/checkbox.png");
          background-size: 100% auto;
          cursor: pointer;
          position: relative;
          top: 1px;
          &.selected {
            background-image: url("../images/icon/checkbox-select.png");
          }
        }
        .delete {
          width: 0.55rem;
          height: 0.55rem;
          display: inline-block;
          background-image: url("../images/icon/delete.png");
          background-size: 100% auto;
          cursor: pointer;
        }
        &.desc {
          height: 1.1rem;
          line-height: 1.1rem;
        }
        &:first-child {
          border-bottom: 1px solid #dcdcdc;
        }
        &.data {
          padding-bottom: 0.5rem;
          .name {
            margin-right: 0.25rem;
          }
        }

        .list {
          display: flex;

          .list-item {
            padding: 0.1rem 0.2rem 0 0.2rem;
            position: relative;
            display: flex;
            flex-direction: column;
            text-align: center;
            .text2 {
              color: #ff4200;
            }
            &.selected::after {
              content: '';
              border: 1px solid #00a0e9;
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
            }
            //,&:hover:before
            &.selected::before {
              content: '';
              width: 0.35rem;
              height: 0.35rem;
              position: absolute;
              right: -2px;
              bottom: -2px;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-image: url("../images/icon/selected.png");
            }
          }
        }
      }
    }

    .back-icon {
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      display: block;
    }
    .product-price {
      height: 1.2rem;
      line-height: 1.2rem;
      overflow: hidden;
      font-size: 0.3rem;
      display: flex;
      justify-content: flex-end;
      .product-price-item {
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
      /*height: 5.48rem;*/
      position: relative;
    }
    .product-back {
      position: absolute;
      left: 0.6rem;
      top: 0.6rem;
      width: 0.6rem;
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
