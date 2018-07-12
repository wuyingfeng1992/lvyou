<template>
  <div>
    <Backbar title="常用联系人">
      <router-link to="/associate/insert" class="button" slot="button">添加</router-link>
    </Backbar>
    <div class="top-space"></div>
    <div class="list-associates" v-if="getContactUser">
      <div class="some_bar" v-for="item in getContactUser.tusers">
        <router-link :to="'/associate/'+item.tuid">
          <span class="v-md">{{item.name}}</span>
          <span class="v-mc">{{item.phone}}</span>
          <!--<span class="v-all">查看全部订单></span>-->
        </router-link>

      </div>
      <!--<div class="some_bar">
        <router-link to="/associate/id002">
          <span class="v-md">黎明2</span>
          <span class="v-mc">18533264595</span>
          &lt;!&ndash;<span class="v-all">查看全部订单></span>&ndash;&gt;
        </router-link>

      </div>-->
    </div>
    <Fixedkefu></Fixedkefu>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  import Backbar from './small_components/Back_bar';
  import Fixedkefu from './small_components/Fixed_kefu';
  export default {
    name: "associates",
    components: {
      Backbar,
      Fixedkefu,
    },
    mounted() {
      this.getContactUserEvt();
    },
    computed: {
      ...mapGetters([
        'getContactUser',
      ])
    },
    methods: {
      ...mapActions(['getContactUserEvt']),

    },
  }
</script>

<style lang="less">
  .list-associates{

  }
  div.some_bar {
    background: #fff;
    padding: 0 0.3rem;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    margin-top: 10px;
    font-size: .36rem;
    line-height: 1.1rem;
    border-bottom: 1px solid #dedede;
    color: #000;

    a{
      display: flex;
    }
   /* justify-content: space-between;*/
    align-items: center;
    .v-md{
      width: 28%;
      flex: none;
    }
    .v-all {
      font-size: .32rem;
      font-weight: 500;
      line-height: 0.8rem;
      vertical-align: baseline;
      color: #666;
    }
  }
</style>
