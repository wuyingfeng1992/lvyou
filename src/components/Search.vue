<template>
  <div v-if="showMe">
    <Search_top></Search_top>
    <div class="search-result">
      <div class="search-result-item">
        <div class="header">
          <input type="text" class="header-input" placeholder="热门搜索">
        </div>
        <div class="search-content">
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
        </div>
      </div>
      <div class="search-more">
        <div class="icon"></div>
        <div class="text">更对热门目的地</div>
      </div>
      <div class="search-result-item">
        <div class="header">
          <input type="text" class="header-input" placeholder="历史搜索">
        </div>
        <div class="search-content">
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
          <div class="city">越南</div>
        </div>
      </div>
    </div>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import OneBusiness from './small_components/One_business';
  import Search_top from './small_components/Search_top';
  import Fixedkefu from './small_components/Fixed_kefu';

  export default {
    name: 'search',
    data() {
      return {
        showMe: false,
        search_text: '', // 搜索框内容
        search_res: [] // 搜索结果
      };
    },
    mounted() {
      this.$store.dispatch('setLoading', true);
      // 模拟加载
      var time = Math.floor(Math.random() * 2000);
      console.log('模拟加载用时' + time);
      setTimeout(() => {
        this.$store.dispatch('setLoading', false);
        this.showMe = true;
      }, time);
      if (this.$route.path != '/index' && this.$route.path != '/recommend') {
        this.search_method();
      }

    },
    computed: {
      ...mapGetters([
        'getProductCategory' // 商家简略信息
      ])
    },
    methods: {

      search_method(e) {
        if (this.$route.path != 'search') {
          this.toSearchPage(e)
          return;
        }
        this.search_res = [];
        var mainWord = this.$route.params.keyword;
        if (this.search_text !== '' && this.search_text !== this.$route.params.keyword) {
          mainWord = this.search_text;
        }
        this.search_text = mainWord;
        for (var x in this.getProductCategory) {
          if (this.getProductCategory[x].shop_name.includes(mainWord)) {
            this.search_res.push(this.getProductCategory[x]);
          }
        }
      },
      toSearchPage: function (e) {
        let search_text = this.search_text ? this.search_text : ''
        this.$emit('toSearchPage', e, search_text);
      }
    },
    components: {
      OneBusiness,
      Search_top,
      Fixedkefu,
    }
  };
</script>
<style lang="less" scoped>
  body{
    background: #fff;
  }
</style>
<style lang="less" scoped>
  .search-result{
    padding: 0 0.3rem;
    background: #ffffff;
    padding-top: 0.1rem;
    min-height: 100%;
    .header{
      border-bottom: 1px solid #d2d2d2;
      height: 0.64rem;
      line-height: 0.65rem;
      display: flex;
    }
    .header-input{
      border: none;
      outline: none;
      background: none;
      font-size: 0.28rem;
    }
    .search-content{
      display: flex;
      flex-wrap: wrap;
      margin: 0.1rem -0.1rem;
      border-bottom: 1px solid #dfdfdf;
      padding-bottom: 0.1rem;
    }
    .city{
      font-size: 0.36rem;
      border: 1px solid #cbcbcb;
      padding: 0.1rem 0.30rem;
      margin: 0.1rem 0.1rem;
      color: #707070;
    }

    .search-more{
      display: flex;
      justify-content: center;
      height: 0.9rem;
      align-items: center;
      .icon{
        width: 0.55rem;
        height: 0.55rem;
        display: inline-block;
        background-image: url("../images/icon/earth.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        cursor: pointer;
        position: relative;
        top: 1px;
      }
      .text{
        font-size: 0.32rem;
        color: #707070;
      }
    }

  }
</style>
