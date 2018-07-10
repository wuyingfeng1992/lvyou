<template>
  <div v-if="showMe">
    <div class="re_search">
      <span class="re_search-icon" @click="back_one"></span>
      <div class="search_wrap">
        <span class="search_method_icon"></span>
        <input type="search" v-model="search_text" class="v-md"  placeholder="输入关键字"
               @keydown.enter="search_method" @click="search_enter">
      </div>
      <div class="search_tip" @click="search_method">搜索</div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
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
     /* var time = Math.floor(Math.random() * 2000);
      console.log('模拟加载用时' + time);*/
      this.$store.dispatch('setLoading', false);
      this.showMe = true;
      if(this.$route.path!='/index'&&this.$route.path!='/category') {
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
        if(this.$route.path!='search') {
          this.toSearchPage(e)
          return;
        }
       /* this.search_res = [];
        var mainWord = this.$route.params.keyword;
        if (this.search_text !== '' && this.search_text !== this.$route.params.keyword) {
          mainWord = this.search_text;
        }
        this.search_text = mainWord;
        for (var x in this.getProductCategory) {
          if (this.getProductCategory[x].shop_name.includes(mainWord)) {
            this.search_res.push(this.getProductCategory[x]);
          }
        }*/
      },
      search_enter(e) {
        if(this.$route.path!='search') {
          this.toSearchPage(e)
          return;
        }

      },
      toSearchPage: function (e) {
        let search_text = this.search_text?this.search_text:''
        this.$emit('toSearchPage', e , search_text);
      },
      back_one () {
        this.$router.go(-1);
      }
    },
    components: {

    }
  };
</script>

<style lang="less" scoped>
  .re_search {
    background: #03a4ea;
    line-height: 0;
    padding: .27rem;
    display: flex;
    align-items:center;
    .re_search-icon{
      width: .8rem;
      height: .8rem;
      display: block;
      margin: .2rem auto .1rem;
      background-size: 100% auto;
      background-image: url("../../images/icon/back.png");
      background-repeat: no-repeat;
      cursor: pointer;
    }
    .search_tip{
      font-size: 0.42rem;
      color: #ffffff;
      width: 0.88rem;
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
      padding: 0 .2rem 0 0.95rem;
      border-radius: .45rem;
      background: #fff;
      margin: 0 0.3rem;
      overflow: hidden;
    }
    .search_method_icon{
      position: absolute;
      left: 0.2rem;
      top: 0.26rem;
      transform: translateY(-50%);
      fill: #c2c2c2;
      cursor: pointer;
      width: .6rem;
      height: .6rem;
      display: block;
      margin: .2rem auto .1rem;
      background-size:  auto 100%;
      background-image: url("../../images/icon/search.png");
      background-repeat: no-repeat;

    }
    input[type="search"] {
      display: inline-block;
      height: 108%;
      width: 100%;
      outline: none;
      border: none;
      border-radius: .45rem;
      box-sizing: border-box;
      font-size: .4rem;
      position: relative;
    }
  }
</style>
