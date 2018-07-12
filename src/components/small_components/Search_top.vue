<template>
  <div>
    <div class="re_search">
      <span class="re_search-icon" @click="back_one"></span>
      <div class="search_wrap">
        <span class="search_method_icon"></span>
        <input type="search" v-model="search_text" class="v-md"  placeholder="输入关键字" @keyup="searchClear" @onreset="searchClear"
               @keydown.enter="search_enter($event,search_text)" @click="search_method($event,search_text)">
      </div>
      <div class="search_tip" @click="search_enter($event,search_text)">搜索</div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'search',

    data() {
      return {
        search_text:'',
      };
    },
    //props:['search_text'],
    mounted() {
      if(this.$route.path!='/index'&&this.$route.path!='/category') {
        this.search_method();
      }
    },
    computed: {

    },
    methods: {
      search_method(e,searchText) {
        if(this.$route.path.indexOf('/search/')==-1) {
          this.toSearchPage(e)
          return;
        }else{
          var _this=this;
          setTimeout(function () {
            //debugger
            console.log(_this.search_text)
            if(_this.search_text===''){
              //debugger
              _this.$emit('searchEvent',null)
            }
          },300)
        }
      },
      search_enter(e,searchText) {

        if(this.$route.path.indexOf('/search/')==-1) {
          this.toSearchPage(e)
          return;
        }
        this.$emit('searchEvent',searchText)
      },
      searchClear(e) {
        setTimeout(function () {
          if(this.search_text===''){
            this.$emit('searchEvent',null)
          }
        },100)

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
