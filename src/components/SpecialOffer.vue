<template>
  <div class="specialOffer">
    <!--<Backbar title="特价商品"></Backbar>
    <div class="top-space"></div>
    <div class="list-product">
      <One_product></One_product>
      <One_product></One_product>
    </div>-->
    <Productlist title="特价商品" :data="getFeatureProduct.rows" header="no" ></Productlist>
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
  import {getFeatureProduct} from '../axioser/request';
  var sw


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
      window.addEventListener('scroll',function(){
        console.log('adddddd')
        // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
        // console.log(document.body.scrollTop); // 滚动高度
        // console.log(document.body.offsetHeight); // 文档高度
        // 判断是否滚动到底部
        if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
          // console.log(sw);
          // 如果开关打开则加载数据
          if(sw==true){
            // 将开关关闭
            sw = false;
            getFeatureProduct({offset:0})
              .then(function(response){
                console.log(JSON.parse(response.data));
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                this.getFeatureProduct=this.getFeatureProduct.concat(data)
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error){
                console.log(error);
              });
          }
        }
      });
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
