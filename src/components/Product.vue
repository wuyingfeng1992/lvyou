<template>
  <div class="product-box">
    <div class="product-banner-wrap">
      <div class="product-back">
        <span class="back-icon"></span>
      </div>
      <div class="product-banner">
        <img src="../images/xqy.jpg" alt="">
      </div>
      <div class="product-banner-bottom">
        <span class="product-desc">青海湖两日游自由行 纯玩</span>
      </div>
    </div>
    <div class="product-price">
      <div class="product-price-item">
        <span class="text1">促销价:</span>
        <span class="text2">￥</span>
        <span class="text3">1780元</span>
      </div>
      <div class="product-price-item">
        <span class="text1">会员价:</span>
        <span class="text2">￥</span>
        <span class="text3">1780元</span>
      </div>
    </div>

    <div class="product-address">
      <div class="product-address-item">
        <div class="name">
          出发地点
        </div>
        <div class="list">
          <div class="selected list-item">南宁</div>
          <div class="list-item">南宁</div>
          <div class="list-item">南宁</div>
          <div class="list-item">南宁</div>
        </div>
      </div>
      <div class="product-address-item data">
        <div class="name">
          出游日期
        </div>
        <div class="list">
          <div class="list-item">6月11日</div>
          <div class="list-item">6月11日</div>
          <div class="list-item">6月11日</div>
        </div>
      </div>
    </div>

    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定导航栏 -->
    <FixedButton></FixedButton>
  </div>
</template>

<script>
  import FixedButton from './small_components/Fixed_button';


  export default {
    name: 'product',
    data() {
      return {

      };
    },
    mounted() {

    },
    computed: {

    },
    methods: {

    },
    components: {
      FixedButton
    }
  };
</script>

<style lang="less">
  .product-box{
    width: 100%;
    .product-address{
      padding: 0 0.3rem;
      background: #fff;
      font-size: 0.30rem;
      color: #696969;
      margin-bottom: 8px;
      .name{
        color: #1c1a16;
        margin-right: 0.3rem;
      }
      .product-address-item{
        display: flex;
        line-height: 0.96rem;
        height: 0.96rem;
        &:first-child{
          border-bottom: 1px solid #dcdcdc;
        }
        .list{
          display: flex;
          .list-item{
            padding: 0  0.2rem;
            position: relative;

            &.selected::after,&:hover:after{
              content: '';
              border: 1px solid #00a0e9;
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 25%;
              height: 50%;
            }
          }
        }
      }
    }

    .back-icon{
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      display: block;
    }
    .product-price{
      height: 1.2rem;
      line-height: 1.2rem;
      overflow: hidden;
      font-size: 0.3rem;
      display: flex;
      justify-content: flex-end;
      .product-price-item{
        padding-right: 0.3rem;
        .text2{
          font-size: 0.2rem;
          color: #ff4200;
        }
        .text3{
          color: #ff4200;
          font-size: 0.38rem;
          font-weight: bold;
        }
      }

    }

    .product-banner-wrap{
      position: relative;
      /*height: 5.48rem;*/
      position: relative;
    }
    .product-back{
      position: absolute;
      left:0.6rem;
      top: 0.6rem;
      width: 0.6rem;
      height: 0.6rem;
    }
    .product-banner-bottom{
      height: 0.83rem;
      line-height: 0.83rem;
      width: 100%;
      background: rgba(0,0,0,0.5);
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
    .product-banner{
      height: 100%;
      width: auto;
      font-size: 0;
      img{
        width: 100%;
        height: auto;
      }
    }
  }

</style>
