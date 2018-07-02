<template>
  <!-- 列表单个商家 -->

  <nav class="fixed_button">
    <div class="fixed_button_item left">
      <span class="text1">在线支付:</span>
      <span class="text2">￥</span>
      <span class="text3">1780元</span>
    </div>
    <div class="fixed_button_item right">
      立即预订
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'fixed_nav',
    data() {
      return {};
    },
    mounted() {
      setInterval(() => {
        // console.log(this.returnPageNow);
      }, 2000);
    },
    computed: {
      returnPageNow() {
        return this.$store.getters.getwhichpage;
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .fixed_button {
    height: 1.48rem;
    background: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: .28rem;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .fixed_button_item {
      text-align: center;
      width: 50%;
      color: #fff;
      line-height: 1.48rem;
      font-size: 0.48rem;
      height: 1.48rem;
      &.right {
        background: #03a4ea;
      }

    }

    .text1 {
      font-size: 0.36rem;
      color: #999999;
    }
    .text2 {
      font-size: 0.26rem;
      color: #ff4200;
    }
    .text3 {
      color: #ff4200;
      font-size: 0.48rem;
      font-weight: bold;
    }
  }
</style>
