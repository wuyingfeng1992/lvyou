<template>
  <div>
    <Backbar :title="title" v-if="header!=='no'"></Backbar>
    <div class="top-space" v-if="header!=='no'"></div>
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
    props: ['title','data','header'],
    components:{
      One_product,
      Backbar,
    }
  }
</script>

<style scoped>

</style>
