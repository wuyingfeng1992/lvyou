<template>
  <div v-if="showMe">
    <div class="re_search">
      <svg @click="$router.go(-1)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
      </svg>
      <div class="search_wrap">
        <svg @click="search_method" class="search_method_icon" >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
        </svg>
        <input type="search" v-model="search_text" class="v-md"  placeholder="输入关键字"
               @keydown.enter="search_method">
      </div>
      <div class="search_tip" @click="search_method">搜索</div>
    </div>
    <OneBusiness v-for="(item, n) in search_res" :key="n" :a="item"></OneBusiness>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import OneBusiness from './small_components/One_business';
console.log('的点点滴滴多多多')
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
      if(this.$route.path!='/') {
        this.search_method();
      }

    },
    computed: {
      ...mapGetters([
        'getFalseBussinessbrief' // 商家简略信息
      ])
    },
    methods: {

      search_method(e) {
        if(this.$route.path!='search') {
         this.toSearchPage(e)
          return;
        }
        this.search_res = [];
        var mainWord = this.$route.params.keyword;
        if (this.search_text !== '' && this.search_text !== this.$route.params.keyword) {
          mainWord = this.search_text;
        }
        this.search_text = mainWord;
        for (var x in this.getFalseBussinessbrief) {
          if (this.getFalseBussinessbrief[x].shop_name.includes(mainWord)) {
            this.search_res.push(this.getFalseBussinessbrief[x]);
          }
        }
      },
      toSearchPage: function (e) {
        let search_text = this.search_text?this.search_text:''
        this.$emit('toSearchPage', e , search_text);
      }
    },
    components: {
      OneBusiness
    }
  };
</script>

<style lang="less" scoped>
  .re_search {
    background: #03a4ea;
    line-height: 0;
    padding: .26rem;
    display: flex;
    align-items:center;
    svg {
      width: .6rem;
      height: .6rem;
    }
    .search_tip{
      font-size: 0.4rem;
      color: #ffffff;
      width: 0.9rem;
      flex: none;
      line-height: 100%;
      text-align: center;
      cursor: pointer;
    }
    .search_wrap{
      position: relative;
      display: inline-block;
      height: .9rem;
      width: 8rem;
      box-sizing: border-box;
      padding: 0 .2rem 0 0.8rem;
      border-radius: .45rem;
      background: #fff;
      margin: 0 0.3rem;
    }
    .search_method_icon{
      position: absolute;
      left: 0.1rem;
      top: 0.15rem;
      fill: #c2c2c2;
      cursor: pointer;
    }
    input[type="search"] {
      display: inline-block;
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      border-radius: .45rem;
      box-sizing: border-box;
      font-size: .4rem;
    }
  }
</style>
