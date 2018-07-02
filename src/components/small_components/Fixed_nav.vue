<template>
  <!-- 列表单个商家 -->

  <nav class="fixed_nav">
    <router-link to="/index" class="fixed_nav_item">
      <span class="one_fixed_nav">
        <svg v-if="returnPageNow == 'homepage'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
        </svg>
        <svg v-if="returnPageNow !== 'homepage'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular.b245d60"></use>
        </svg>
        <span class="fixed_nav_text">首页</span>
      </span>
    </router-link>

    <router-link to="/recommend" class="fixed_nav_item">
      <span class="one_fixed_nav">
        <svg v-if="returnPageNow == 'recommend'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
        </svg>
        <svg v-if="returnPageNow !== 'recommend'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular.41c17f8"></use>
        </svg>
        <span class="fixed_nav_text">推荐</span>
      </span>
    </router-link>

    <router-link to="/specialOffer" class="fixed_nav_item">
      <span class="one_fixed_nav">
        <svg v-if="returnPageNow == 'specialOffer'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile.dbc5ebf"></use>
        </svg>
        <svg v-if="returnPageNow !== 'specialOffer'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>
        </svg>
        <span class="fixed_nav_text">特价</span>
      </span>
    </router-link>

    <router-link to="/myzone" class="fixed_nav_item">
      <span class="one_fixed_nav">
        <svg v-if="returnPageNow == 'myzone'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile.dbc5ebf"></use>
        </svg>
        <svg v-if="returnPageNow !== 'myzone'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>
        </svg>
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
      font-size: 0.3rem;

    }
    .fixed_nav_text{
      margin-top: 0.05rem;
      display: inline-block;
    }
    .router-link-active{
      background: #0068ac;
    }
    svg {
      width: .6rem;
      height: .6rem;
      display: block;
      margin: .2rem auto .1rem;
    }
    .one_fixed_nav {
      width: 32.6%;
      display: inline-block;
      height: 100%;
      text-align: center;
    }
  }
</style>
