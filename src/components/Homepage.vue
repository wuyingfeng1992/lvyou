<template>
  <div class="index_main">
    <!-- 首页 -->
    <div class="index_header">
      <Search_top @toSearchPage="toSearchPage"></Search_top>
    </div>
    <!-- 首页导航 -->
    <div class="index_banner">
      <Swipe class="my-swipe"
             :loop="true"
             :auto="5000"><!-- swipe 设置自动滚动 -->
        <Swipe-item v-for="(item,index  ) in getHomeBannerInfo.slide" class="slide" :class="'slide'+JSON.stringify(index)">
          <router-link :to="item.url"><!--:to="item.url"-->
            <div class="common_banner">
              <img :src="'api/'+item.image" :alt="item.title">
            </div>
          </router-link>
        </Swipe-item>
      </Swipe>
    </div>
    <div class="index_banner_text">
      <div class="iconWrap">
        <span class="index_banner_text_icon"></span>
      </div>
      <Swipe class="my-swipe"
             :loop="true"
             :auto="5000"><!-- swipe 设置自动滚动 -->
        <Swipe-item v-for="(item,index ) in getHomeBannerInfo.shuf" class="slide" :class="'slide'+JSON.stringify(index)">
          <span class="index_banner_text_text">{{item.name}}</span>
        </Swipe-item>
      </Swipe>
    </div>
    <!-- 推荐商家列表 -->
    <div classs="one_business_wrap" style="padding: 0 5px;">
      <OneBusiness v-for="n in getProductCategory" :a="n"></OneBusiness>
    </div>

    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定导航栏 -->
    <Fixednav></Fixednav>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vue-swipe';
  import OneBusiness from './small_components/One_business';
  import Fixednav from './small_components/Fixed_nav';
  import {mapGetters,mapActions} from 'vuex';
  import Search_top from './small_components/Search_top';
  import Fixedkefu from './small_components/Fixed_kefu';
  import image from '../images/banner.jpg'

  export default {
    name: 'homepage',
    data() {
      return {

      };
    },
    mounted() {
      this.getHomeBannerInfoEvt();
    },
    computed: {
      ...mapGetters([
        'getProductCategory',
        'getHomeBannerInfo',
        //'getProductCategory'
      ])
    },
    methods: {
      toSearchPage(e, search_text) {
        this.$router.push('/search/' + search_text);
      },
      ...mapActions(['getHomeBannerInfoEvt']),

    },
    components: {
      OneBusiness,
      Fixednav,
      Swipe,
      Fixedkefu,
      Search_top,
      SwipeItem
    }
  };
</script>

<style lang="less">
  @baseBlue: #03a4ea;
  .index_main {
    width: 100%;
    overflow: hidden;
    .common_banner {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .index_banner_text {
      text-align: center;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .44rem;
      color: #545454;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      word-break: nowrap;
      .mint-swipe-indicator{
        display: none;
      }
      .mint-swipe.my-swipe{
        width: auto;
      }
      .mint-swipe-items-wrap > div{
        width: auto;
        position: relative;
      }
      .iconWrap{
        text-align: right;
      }
      .index_banner_text_text{
        display: inline-block;
        white-space: nowrap;
      }
    }
    .index_banner_text_icon {
      vertical-align: middle;
      width: 0.6rem;
      height: 0.6rem;
      vertical-align: middle;
      margin-top: -0.08rem;
      display: inline-block;
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-image: url("../images/icon/bell.png");
    }
    .mint-swipe-indicator {
      width: 0.15rem;
      height: 0.15rem;
      background: #fff;
      margin: 0 2px;
    }
    .index_header {
      background: @baseBlue;
      box-sizing: border-box;
      overflow: hidden;
    }
    .index_banner {
      height: 6.09rem;
      background: #fff;
    }
    .index_title {
      line-height: .8rem;
      font-weight: 600;
      background: #fff;
      border-top: 1px solid #eee;
      font-size: .4rem;
      padding-left: .4rem;
    }
    .space {
      width: 100%;
      height: 1.55rem;
    }
  }

  /* slider插件css + 改写*/
  .mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 100%
  }

  .mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
  }

  .mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
    transform: none
  }

  .mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
  }

  .mint-swipe-indicator {
    width: .1rem;
    height: .1rem;
    display: inline-block;
    border-radius: 50%;
    background: #ccc;
    margin: 0 3px
  }

  .mint-swipe-indicator.is-active {
    background: @baseBlue
  }

</style>
