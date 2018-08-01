<template>
  <div class="custom-service">
   <!-- <router-link to="/customService">
      <div class="icon" :style="'background-image:url('+getAvatar+')'"></div>
    </router-link>-->
    <!--http://www.gxgzjt.com/-->
    <a href="/mall/chat/user">
      <div class="icon" :style="'background-image:url('+getAvatar+')'"></div>
    </a>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  import {proxyapi} from '../../staticData/proxyapi';
  export default {
    name: "custom-service",
    mounted() {
      if(this.getCustomerServiceAavatar) return;
      this.getHomeBannerInfoEvt();
    },
    computed: {
      ...mapGetters([
        'getCustomerServiceAavatar',
      ]),
      getAvatar(){

        if(!this.getCustomerServiceAavatar) return null;
        var avatar=this.getCustomerServiceAavatar
        if(avatar.indexOf('http://')==-1){
          avatar=this.proxyapi+avatar;
        }
        return avatar
      }
    },
    methods: {
      ...mapActions(['getHomeBannerInfoEvt']),
    },
  }
</script>

<style lang="less">
  .custom-service {
    position: fixed;
    right: 0.5rem;
    bottom: 1.8rem;
    z-index: 2000;
    a{
      width: .9rem;
      height: .9rem;
      display: block;
      cursor: pointer;
    }

    .icon {
      width: .9rem;
      height: .9rem;
      display: block;
      border-radius: 50%;
      margin: .2rem auto .1rem;
      background-size: 100% auto;
      background-position:center;
      background-image: url("../../images/icon/kefu.jpg");
    }
  }

</style>
