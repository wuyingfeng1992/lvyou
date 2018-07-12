<template>
  <div class="index_main_category">
    <div class="index_header">
      <Search_top @toSearchPage="toSearchPage"></Search_top>
    </div>

    <div class="sub_banner">
      <img src="../images/subBanner.jpg">
    </div>
    <el-tabs class="ban_tab_sel" v-model="getCurrentCategoryType"  type="card" @tab-click="handleClick">
      <el-tab-pane v-for="item in getProductCategoryType.rows" class="ban_tab_sel_item" :label="item.name" :name="item.type" >
        <div class="tab_wrap" slot="label" @click="multilShow" :b="item.type">
          <span class="icon address"></span>
          <span class="text">{{item.name}}</span>
        </div>
        <div class="el-tab-pane-con-item"
             :a="JSON.stringify(getProductCategoryTypeList.rows)"
             v-for="item in getProductCategoryTypeList.rows"
             :category_id="item.category_id"
             v-if="!showItemListFlag&&getProductCategoryTypeList"
             @click="showItemList(item.category_id)" style="width: calc((100% - 10px)/3);">
          {{item.nickname}}
        </div>
        <!--<div class="el-tab-pane-con-item" v-if="!showItemListFlag" @click="showItemList" style="width: calc((100% - 10px)/3);">
          越南
        </div>
        <div class="el-tab-pane-con-item" v-if="!showItemListFlag" @click="showItemList"  style="width: calc((100% - 10px)/3);">
          南宁
        </div>-->
        <div class="product_list" v-if="showItemListFlag">
          <One_product v-for="item in getProductList.rows" :data="item" colum="colum"></One_product>
        </div>
      </el-tab-pane>
      <!--<el-tab-pane class="ban_tab_sel_item" label="目的地" name="first" >-->
        <!--<div class="tab_wrap" slot="label" @click="multilShow">-->
          <!--<span class="icon address"></span>-->
          <!--<span class="text">目的地</span>-->
        <!--</div>-->
        <!--<div class="el-tab-pane-con-item" v-if="!showItemListFlag" @click="showItemList" style="width: calc((100% - 10px)/3);">-->
          <!--越南-->
        <!--</div>-->
        <!--<div class="el-tab-pane-con-item" v-if="!showItemListFlag" @click="showItemList"  style="width: calc((100% - 10px)/3);">-->
          <!--南宁-->
        <!--</div>-->
        <!--<div class="list" v-if="showItemListFlag">-->
          <!--<One_product colum="colum"></One_product>-->
        <!--</div>-->
      <!--</el-tab-pane>-->
      <!--<el-tab-pane class="ban_tab_sel_item" label="特价产品">-->
        <!--<div class="tab_wrap" slot="label">-->
          <!--<span class="icon specialOffer"></span>-->
          <!--<span class="text">专区</span>-->
        <!--</div>-->
        <!--<div class="el-tab-pane-con ">-->
          <!--<One_product colum="colum"></One_product>-->
        <!--</div>-->
      <!--</el-tab-pane>-->
    </el-tabs>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定导航栏 -->
    <Fixednav></Fixednav>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import Fixedkefu from './small_components/Fixed_kefu';
  import Fixednav from './small_components/Fixed_nav';
  import Search_top from './small_components/Search_top';
  import One_product from './small_components/One_product';
  import {mapGetters,mapActions,mapState} from 'vuex';

  export default {
    name: 'homepage',
    data() {
      return {
        showMe: false, // 是否展示当前页面
        search_word: '', // 搜索框搜索词
        isLoadingMore: false,
        showItemListFlag: false,
        currentCategoryType: '',
      };
    },
    mounted() {
      this.getProductCategoryTypeEvt();
    },
   /* created: function(){
        var key=this.$route.params.key;
        if(key){
          this.currentCategoryType=key;
        }else{
          this.currentCategoryType=this.productCategoryType&&this.productCategoryType.rows?this.productCategoryType.rows[0].type:'';
        }
    },*/
    computed: {
      ...mapGetters([
        'getProductCategoryType',
        'getProductCategoryTypeList',
        'getProductList',
      ]),
      ...mapState([
        'productCategoryType',
      ]),

      getCurrentCategoryType:{

        get(){
          var key=this.$route.params.id;
          if(key){
            this.currentCategoryType=key;
            this.getProductCategoryTypeListEvt(key);
          }else{
            this.currentCategoryType=this.productCategoryType&&this.productCategoryType.rows?this.productCategoryType.rows[0].type:'';
          }
          return this.currentCategoryType
        },
        set(val){
          if(val&&val!=='0'){
            this.currentCategoryType = val;
            this.getProductCategoryTypeListEvt(val.toString());
          }
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toSearchPage(e, search_text) {
        this.$router.push('/search/' + search_text);
      },
      showItemList(categoryId) {
        this.showItemListFlag=!this.showItemListFlag;
        this.getProductListEvt({categoryId,offset:0})
      },
      multilShow() {
        this.showItemListFlag=false;
      },
      ...mapActions(['getProductCategoryTypeEvt'
        ,'getProductCategoryTypeListEvt'
        ,'getProductListEvt'
      ]),
      // 加载更多
      loadMore() {
        // 大于十五条不加载
        /*if (this.getProductCategory.length > 15) return;
        this.$store.dispatch('setLoading', true);
        if (!this.isLoadingMore) { // 是否加载中
          this.isLoadingMore = true;
          setTimeout(() => {
            this.$store.dispatch('setLoading', false);
            if (this.getProductCategory.length <= 15) {
              this.$store.dispatch('setHomepageMore', [...this.getProductCategory, ...(this.getProductCategory).slice(0, 5)]);
              // console.log(this.getProductCategory);
            }
            this.isLoadingMore = false;
          }, 1000);
        }*/
      },
      // 触发加载更多
      dispatchLoad() {
        /*var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (document.documentElement.offsetHeight <= (dscrollTop + window.innerHeight + 1)) {
          console.info('触发加载');
          this.loadMore();
        }*/
      }
    },
    components: {
      Fixednav,
      Search_top,
      One_product,
      Fixedkefu,
    }
  };
</script>
<style lang="less">
  body {
    background: #fff !important;
    .product_list{
      width: 100%;
    }
  }
</style>
<style lang="less">
  @baseBlue: #03a4ea;
  .ban_tab_sel {
    margin-top: 2px;
    display: flex;
    div.el-tabs__header {
      border-bottom: none;
    }
   .ban_tab_sel_item{
      display: flex;
     text-align: center;
    }

    .el-tabs__content {
      flex: 1;
      margin-top: 1px;
      padding-left: 2px;
    }
   /* .el-tab-pane-con {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }*/
    .el-tab-pane-con-item {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
    .el-tab-pane-con-item {

      font-size: 0.36rem;
      color: #585858;
      margin-bottom: 2px;
      border: 1px solid #b6b6b6;
      width: calc((100% - 12px) / 3);
      margin-left: 2px;
      text-align: center;
      height: 0.83rem;
      line-height: 0.83rem;
      display: flex;
      justify-content: center;
      &:nth-child(3n+1) {
        margin-left: 0;
      }
    }

    .el-tabs__nav {
      display: flex;
      flex-direction: column;
      .el-tabs__nav-scroll {

      }

      div.el-tabs__item {
        border: 1px solid #b9b9b9;
        margin: 0 0 2px 0;
        background: #e5e5e5;
        color: #585858;
        height: 1.8rem;
        font-size: 0.41rem;
        width: 2.1rem;

        .tab_wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        &.is-active {
          border: 1px solid #b9b9b9;
          background: #ffffff;
        }
        .icon {
          width: 0.55rem;
          height: 0.55rem;
          display: inline-block;

          background-size: auto 100%;
          background-repeat: no-repeat;
          margin-top: 0.2rem;
          cursor: pointer;
          margin-bottom: 0.15rem;
          &.address {
            background-image: url("../images/icon/location.png");
            background-size: auto 125%;
            background-position: center;
          }
          &.specialOffer {
            background-image: url("../images/icon/image2.png");
          }
        }
      }
    }
  }

  .index_main_category {
    width: 100%;
    overflow: hidden;
    background: #fff;
    height: 100%;
    min-height: 100%;
    .index_header {
      background: @baseBlue;
      box-sizing: border-box;
      overflow: hidden;
    }
    .space {
      width: 100%;
      height: 1.55rem;
      background: #fff;
    }
    .sub_banner {
      height: 3.6rem;
      img {
        width: auto;
        height: 100%;
      }
    }
  }

</style>
