<template>
    <!-- 我只是个头 -->
  <div class="back_box">
    <div class="back_arrow" @click="back_one">
      <span class="back_arrow-icon"></span>
    </div>
    <h3>{{ title }}</h3>
    <slot name="button">

    </slot>
  </div>

</template>

<script>
export default {
  name: 'back_bar',
  props: ['title'],
  data () {
    return {

    };
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    back_one () {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.back_box{
  width:100%;
  height:1.08rem;
  line-height:1.08rem;
  position:fixed;
  background:#fff;
  top:0;
  left:0;
  right:0;
  z-index: 999;
  border: 1px solid #dcdcdc;
  z-index: 3000;
  display: flex;
  .button{
    font-size: 0.36rem;
    width: 15%;
    text-align: center;
    color:#03a4ea;
    cursor: pointer;
  }
  h3{
    color:#1c1a16;
    width:100%;
    display:block;
    font-size:.48rem;
    text-align:center;
    font-weight: normal;
  }
  div.back_arrow{
    width:1rem;
    height:1rem;
    position:absolute;
    left:0;
    top:0;
    cursor: pointer;
    svg{
      width:.6rem;
      height:.6rem;
      position:absolute;
      left:50%;
      top:50%;
      margin-left: -.3rem;
      margin-top: -.3rem;
    }
    .back_arrow-icon{
      width:.24rem;
      height:.7rem;
      position:absolute;
      left:50%;
      top:50%;
      margin-left: -.3rem;
      margin-top: -.3rem;
      display: inline-block;
      background-image: url("../../images/icon/arrow.png");
      background-size:100% auto;
      background-position:center;

      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
}
</style>
