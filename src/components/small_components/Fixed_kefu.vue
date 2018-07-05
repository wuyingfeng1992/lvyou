<template>
  <div class="custom-service">
    <router-link to="/customService">
      <div class="icon"></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "custom-service"
  }
</script>

<style lang="less">
  .custom-service {
    position: fixed;
    right: 0.5rem;
    bottom: 1.8rem;
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
