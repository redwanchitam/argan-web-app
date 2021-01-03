<template>
  <div class="col-lg-3 col-md-3 col-sm-6">
    <div class="productCard">
      <img v-bind:src="'/img/' + product.imgPath" v-bind:alt="product.name" />
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price }} $</h4>
      <router-link :to="'/products/' + product.id">add to cart</router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  props: ["product"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productCard {
  border: 1px solid orange;
  border-radius: calc(0.7rem - 1px);
}
</style>
