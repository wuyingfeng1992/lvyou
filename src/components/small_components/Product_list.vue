<template>
  <div>
    <Backbar :title="title"></Backbar>
    <div class="top-space"></div>
    <div class="list-product">
      <One_product v-for="item in data" :data="item"></One_product>
    </div>
  </div>
</template>

<script>
  import One_product from './One_product';
  import Backbar from './Back_bar';
  export default {
    name: "product_list",
    props: ['title','data'],
    components:{
      One_product,
      Backbar,
    }
  }
</script>

<style scoped>

</style>
