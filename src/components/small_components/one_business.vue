<template>
  <!-- 列表单个商家 -->
  <router-link :to="'/business' + a.id">
    <section class="one_business clear">
      <div class="business_img">
        <img src="../../images/lvyou1.jpg" :alt="a.description" :title="a.description">
      </div>
      <div class="business_img_desc">
        <div class="business_img_name">{{ a.name}}</div>
        <div class="business_img_subname">{{ a.subname}}</div>
      </div>
    </section>

  </router-link>

</template>

<script>
  export default {
    name: 'one_business',
    props: ['a'],
    data() {
      return {
        msg: '1'

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
  @baseBlue: #03a4ea;
  @com_gray1: #666;
  @com_gray2: #999;
  .com_gray1 {
    color: @com_gray1;
  }

  .com_gray2 {
    color: @com_gray2;
  }

  .com_blue {
    color: @baseBlue;
  }

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
        .bzp {
          width: .3rem;
          height: .3rem;
          font-size: .26rem;
          text-align: center;
          line-height: .3rem;
          display: inline-block;
          color: @com_gray2;
          border: 0.01rem solid #ddd;
          padding: 0.01rem;
          border-radius: 3px;
          i {
            font-style: normal;
          }

        }
      }
      .business_code, .business_other {
        font-size: .25rem;
        margin-top: .3rem;
        line-height: .25rem;
      }

    }
    .code_num {
      svg {
        width: .3rem;
        height: .3rem;
        fill: #ffaa0c;
      }
    }
    .zsd {
      font-size: .25rem;
      height: .35rem;
      line-height: .3rem;
      padding: 0 0.05rem;
      display: inline-block;
      color: @baseBlue;
      background: #fff;
      border: 0.01rem solid @baseBlue;
      box-sizing: border-box;
      border-radius: 3px;
    }
    .fnzs {
      font-size: .25rem;
      height: .35rem;
      padding: 0 0.05rem;
      line-height: .3rem;
      display: inline-block;
      background: @baseBlue;
      color: #fff;
      border: 0.01rem solid @baseBlue;
      box-sizing: border-box;
      border-radius: 3px;
    }
  }
</style>
