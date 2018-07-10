<template>
  <!-- 列表单个商家 -->
  <router-link to="/category">
    <section class="one_business clear">
      <div class="business_img">
        <!--在静态服务器的资源直接用 :src="a.imgSrc"-->
        <img :src="imageSrc[a.imgSrc]" :alt="a.description" :title="a.description">
      </div>
      <div class="business_img_desc">
        <div class="business_img_name">{{ a.name}}</div>
        <div class="business_img_subname">{{ a.subname}}</div>
      </div>
    </section>
  </router-link>
</template>

<script>
  import lvyou1 from '../../images/lvyou1.jpg'
  import lvyou2 from '../../images/lvyou2.jpg'
  import lvyou3 from '../../images/lvyou3.jpg'
  export default {
    name: 'one_business',
    props: ['a'],
    data() {
      return {
        msg: '1',
        imageSrc:{lvyou1:lvyou1,lvyou2:lvyou2,lvyou3:lvyou3}
      };
    },
    mounted() {

    },
    computed: {},
    methods: {}

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  /* 单个商家 */
  .one_business {
    background: #fff;
    margin:5px 0;
    position: relative;
    .business_img {
      width: 100%;
      height: 2.42rem;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .business_img_desc{
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: center;
    }
    .business_img_name{
      font-size: 0.6rem;
    }
    .business_img_subname{
      font-size: 0.5rem;
    }
    .business_info {
      float: right;
      width: 7.4rem;
      height: 1.6rem;
      padding: 0.4rem .2rem .4rem 0;
      .business_name {
        font-size: .35rem;
        line-height: .45rem;
        vertical-align: top;
        h3 {
          width: 5rem;
          display: inline-block;
          span {
            color: #52250a;
            background: #ffd930;
            font-size: .2rem;
            padding: .02rem;
            border-radius: 2px;
            vertical-align: top;
            margin-right: .04rem;
          }
        }

      }
      .business_code, .business_other {
        font-size: .25rem;
        margin-top: .3rem;
        line-height: .25rem;
      }

    }

  }
</style>
