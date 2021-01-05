<template>
  <div class="col-lg-3 col-md-3 col-sm-6">
    <div class="p-2 tagShadow productCard">
      <router-link :to="'/products/' + product.id">
        <img class="productImg" v-bind:src="'/img/' + product.imgPath" v-bind:alt="product.name" />
        <h3>{{ product.name }}</h3>
        <h4>{{ product.price }} $</h4>
      </router-link>
      <button class="m-2 ml-auto tagBtn tagBtnSecondary tagShadow" style="">Add to Cart</button>
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
  background-color: white;
  border-radius: calc(0.7rem - 1px);
}
.productCard .tagBtn:hover {
  border: 1px solid white;
  background-color:#DD7150;
  color: white;
}
</style>
