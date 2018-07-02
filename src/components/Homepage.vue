<template>
  <div class="index_main" v-if="showMe">
    <!-- 首页 -->
    <div class="index_header">
      <!-- 地址 -->
      <!--<div class="index_location">
        <div class="location_left ell">
          <svg class="v-md">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
          </svg>
          <span  class="v-md">深圳市福田区这里是个假定位村淡定啦~这不重要</span>
        </div>

        &lt;!&ndash; 登录按钮 &ndash;&gt;
        <div class="index_login" v-if="!getLogin">
          <router-link to="/login">登录</router-link>
        </div>
      </div>-->

      <!-- 搜索 -->
      <!--<div class="search_box">
        <input type="text" placeholder="搜索商家、商品" @keydown.enter="enter_search" v-model="search_word">
      </div>-->
      <Search @toSearchPage="toSearchPage"></Search>

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
      <svg class="index_banner_text_icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
      </svg>
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

  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vue-swipe';
  import OneBusiness from './small_components/One_business';
  import Fixednav from './small_components/Fixed_nav';
  import {mapGetters} from 'vuex';
  import Search from './Search';
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
      setTimeout(() => {
        window.addEventListener('scroll', this.dispatchLoad, false);
      }, 0);

      this.scrollText=this.swipeInfo[0].desc;
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.dispatchLoad, false);
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
        'getLogin',
        'getFalseHotWord',
        'getFalseBussinessbrief' // 商家简略信息
      ])
    },
    methods: {
      enter_search(e) {
        console.log('ddd,toseacr');
        this.$router.push('/search/' + this.search_word);
      },
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
      // 加载更多
      loadMore() {
        // 大于十五条不加载
        if (this.getFalseBussinessbrief.length > 15) return;
        this.$store.dispatch('setLoading', true);
        if (!this.isLoadingMore) { // 是否加载中
          this.isLoadingMore = true;
          setTimeout(() => {
            this.$store.dispatch('setLoading', false);
            if (this.getFalseBussinessbrief.length <= 15) {
              this.$store.dispatch('setHomepageMore', [...this.getFalseBussinessbrief, ...(this.getFalseBussinessbrief).slice(0, 5)]);
              // console.log(this.getFalseBussinessbrief);
            }
            this.isLoadingMore = false;
          }, 1000);
        }
      },
      // 触发加载更多
      dispatchLoad() {
        var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (document.documentElement.offsetHeight <= (dscrollTop + window.innerHeight + 1)) {
          console.info('触发加载');
          this.loadMore();
        }
      }
    },
    components: {
      OneBusiness,
      Fixednav,
      Swipe,
      Search,
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
      height: .9rem;
      line-height: .9rem;
      font-size: .4rem;
      color: #545454;
      background: #fff;
    }
    .index_banner_text_icon {
      width: 0.6rem;
      height: 0.6rem;
      background: #ccc;
      vertical-align: middle;
      margin-top: -0.04rem;
      display: inline-block;
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
