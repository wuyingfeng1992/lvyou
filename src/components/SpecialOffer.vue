<template>
  <div class="specialOffer">
    <!--<Backbar title="特价商品"></Backbar>
    <div class="top-space"></div>
    <div class="list-product">
      <One_product></One_product>
      <One_product></One_product>
    </div>-->
    <Productlist title="特价商品" :data="getFeatureProduct.rows"></Productlist>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import Fixedkefu from './small_components/Fixed_kefu';
  import Fixednav from './small_components/Fixed_nav';
  import Productlist from './small_components/Product_list';
  import {mapGetters,mapActions} from 'vuex';


  export default {
    name: "special-offer",
    props:['dataTitle'],
    components: {
      Fixednav,
      Productlist,
      Fixedkefu,
    },
    mounted() {
      this.getFeatureProductEvt();
    },
    computed: {
      ...mapGetters([
        'getFeatureProduct',
      ])
    },
    methods: {
      ...mapActions(['getFeatureProductEvt']),

    },

  }
</script>

<style  lang="less">
  .list-product{
    .order_one{
      border: none;
    }

  }
</style>
