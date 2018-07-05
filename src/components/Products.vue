<template>
  <div class="specialOffer">
    <!--<Backbar title="特价商品"></Backbar>
    <div class="top-space"></div>
    <div class="list-product">
      <One_product></One_product>
      <One_product></One_product>
    </div>-->
    <Productlist :title="getKeyword()"></Productlist>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import Fixednav from './small_components/Fixed_nav';
  import Fixedkefu from './small_components/Fixed_kefu';
  import Productlist from './small_components/Product_list';

  export default {
    name: "products",
    data() {
      return {}
    },
    methods: {
      getKeyword() {
        var keyword = this.$route.params.id;
        return keyword
      }
    },
    computed: {},
    components: {
      Fixednav,
      Productlist,
      Fixedkefu,
    }
  }
</script>

<style lang="less">
  .list-product {
    .order_one {
      border: none;
    }

  }
</style>
