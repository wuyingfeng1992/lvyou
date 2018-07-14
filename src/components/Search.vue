<template>
  <div>
    <Search_top @searchEvent="searchEvent" :search_text_1="search_text"></Search_top>
    <div class="search-result" v-show="recommendShow">
      <div class="search-result-item">
        <div class="header">
          <input type="text" class="header-input" placeholder="热门搜索">
        </div>
        <div class="search-content"  v-if="getSearchRecommandInfo">
          <div class="city" v-for="item in getSearchRecommandInfo.hot" @click="searchEvent(item.key)">{{item.key}}</div>
        </div>
      </div>
     <!-- <div class="search-more">
        <div class="icon"></div>
        <div class="text">更对热门目的地</div>
      </div>-->
      <div class="search-result-item">
        <div class="header">
          <input type="text" class="header-input" placeholder="历史搜索">
        </div>
        <div class="search-content"  v-if="getSearchRecommandInfo">
          <div class="city" v-for="item in getSearchRecommandInfo.history" @click="searchEvent(item.key)">{{item.key}}</div>
        </div>
      </div>
    </div>
    <div class="list-product" v-show="!recommendShow">
      <One_product v-for="item in getSearchInfo.rows" :data="item"></One_product>
    </div>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import OneBusiness from './small_components/One_business';
  import Search_top from './small_components/Search_top';
  import One_product from './small_components/One_product';
  import Fixedkefu from './small_components/Fixed_kefu';
  import {mapGetters,mapActions} from 'vuex';

  export default {
    name: 'search',
    data() {
      return {
        search_text: '', // 搜索框内容,
        recommendShow:true
      };
    },

    mounted() {
      this.getSearchRecommandInfoEvt()
    },
    computed: {
      ...mapGetters([
        'getSearchInfo',
        'getSearchRecommandInfo',
      ])
    },
    methods: {
      ...mapActions(['getSearchInfoEvt','getSearchRecommandInfoEvt']),
      searchEvent:function (key) {
        console.log(key);
        if(key){
          this.recommendShow=false
          this.search_text=key;
          this.getSearchInfoEvt(key)
        }else{
          //debugger
          this.recommendShow=true
        }
        //this.search_text=key;
      },
    },
    components: {
      OneBusiness,
      Search_top,
      Fixedkefu,
      One_product,
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
