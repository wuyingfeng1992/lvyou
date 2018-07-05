<template>
  <div class="index_main" v-if="showMe">
    <!-- 首页 -->
    <div class="index_header">
      <Search_top @toSearchPage="toSearchPage"></Search_top>

      <!-- 热搜词 -->
      <!--<div class="hot_word">
        <router-link v-for="x in getFalseHotWord" :to="'/search/' + x.search_word">
          <span>{{ x.title }}</span>
        </router-link>
      </div>-->
    </div>
    <!-- 首页导航 -->
    <div class="index_banner">
      <Swipe class="my-swipe"
             @on-transition-end="onTransitionEnd"
             @slide-revert-end="onSlideRevertEnd"
             :loop="true"
             :auto="5000"><!-- swipe 设置自动滚动 -->
        <Swipe-item v-for="(item,index  ) in swipeInfo" class="slide" :class="'slide'+JSON.stringify(index)">
          <router-link :to="item.href">
            <div class="common_banner">
              <img :src="item.imgSrc" :alt="item.desc">
            </div>
          </router-link>
        </Swipe-item>
      </Swipe>
    </div>
    <div class="index_banner_text">
      <span class="index_banner_text_icon"></span>
      <span class="index_banner_text_text">{{getScrollText}}</span>
    </div>
    <!-- 推荐商家标题 -->
    <!-- <h3 class="index_title">推荐商家</h3>-->
    <!-- 推荐商家列表 -->
    <div classs="one_business_wrap" style="padding: 0 5px;">
      <OneBusiness v-for="n in getFalseBussinessbrief" :a="n"></OneBusiness>
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
  import {mapGetters} from 'vuex';
  import Search_top from './small_components/Search_top';
  import Fixedkefu from './small_components/Fixed_kefu';
  import image from '../images/banner.jpg'

  export default {
    name: 'homepage',
    data() {
      return {
        showMe: false, // 是否展示当前页面
        search_word: '', // 搜索框搜索词
        hot_words: '',
        sexteen_slider: '',
        isLoadingMore: false,
        scrollText: '',
        swipeInfo: [{
          href: "/search/1",
          imgSrc: image,
          //
          //imgSrc:"../images/banner.jpg",
          desc: '滚动轮播文字广告1'
        }, {
          href: "/search/2",
          imgSrc: image,
          desc: '滚动轮播文字广告2'
        }, {
          href: "/search/3",
          imgSrc: image,
          desc: '滚动轮播文字广告3'
        }]
      };
    },
    mounted() {
      console.log(mapGetters([
        'getLogin',
        'falseHotWord'
      ]));
      // 设置当前状态为加载中
      this.$store.dispatch('setLoading', true);
      // 设置当前标记为主页
      this.$store.dispatch('setWhichpage', 'homepage');
      // 模拟请求等待
      var time = Math.floor(Math.random() * 2000);
      console.log('模拟加载用时' + time);
      setTimeout(() => {
        // 页面显示
        this.$store.dispatch('setLoading', false);
        this.showMe = true;
      }, time);

      this.scrollText=this.swipeInfo[0].desc;
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      // 等同于
      // isLogin () {
      //   return this.$store.getters.getLogin
      // }
      // 能少写不少代码
      getScrollText(){
        return this.scrollText
      },

      ...mapGetters([
        'getFalseBussinessbrief' // 商家简略信息
      ])
    },
    methods: {
      onTransitionEnd: function (currentPage) {
        debugger;
        console.log('onTransitionEnd', currentPage);
      },
      onSlideRevertEnd: function (currentPage) {
        debugger;
        console.log('onSlideRevertEnd', currentPage);
      },
      toSearchPage(e, search_text) {
        this.$router.push('/search/' + search_text);
      },

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
        width: auto;
        height: 100%;
      }
    }
    .index_banner_text {
      text-align: center;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .44rem;
      color: #545454;
      background: #fff;
    }
    .index_banner_text_icon {
      vertical-align: middle;
      width: 0.6rem;
      height: 0.6rem;
      vertical-align: middle;
      margin-top: -0.04rem;
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
