<template>
  <!-- 列表单个商家 -->

  <nav class="fixed_nav">
    <router-link to="/index" class="fixed_nav_item">
      <span class="one_fixed_nav">
        <span class="icon home"></span>
        <span class="fixed_nav_text">首页</span>
      </span>
    </router-link>

    <router-link to="/category" class="fixed_nav_item">
      <span class="one_fixed_nav">
       <span class="icon category"></span>
        <span class="fixed_nav_text">分类</span>
      </span>
    </router-link>

    <router-link to="/specialOffer" class="fixed_nav_item">
      <span class="one_fixed_nav">
        <span class="icon specialOffer"></span>
        <span class="fixed_nav_text">特价</span>
      </span>
    </router-link>

    <router-link to="/myzone" class="fixed_nav_item">
      <span class="one_fixed_nav">
       <span class="icon myzone"></span>
        <span class="fixed_nav_text">我的</span>
      </span>
    </router-link>
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
  .fixed_nav {
    height: 1.55rem;
    background: #03a4ea;
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
    .fixed_nav_item {
      text-align: center;
      width: 25%;
      color: #fff;
      height: 100%;
      font-size: 0.36rem;

    }
    .fixed_nav_text{
      margin-top: 0.05rem;
      display: inline-block;
    }
    .router-link-active{
      background: #0068ac;
    }
    .icon{
      width: .6rem;
      height: .6rem;
      display: block;
      margin: .2rem auto .1rem;
      background-size: 100% auto;
      &.home{
        background-image: url("../../images/icon/home.png");
      }
      &.category{
        background-image: url("../../images/icon/start.png");
      }
      &.specialOffer{
        background-image: url("../../images/icon/image.png");
      }
      &.myzone{
        background-image: url("../../images/icon/person.png");
      }
    }
    .one_fixed_nav {
      width: 32.6%;
      display: inline-block;
      height: 100%;
      text-align: center;
    }
  }
</style>
