<template>
  <div class="col-lg-3 col-md-4 col-6 p-0">
    <div class="p-2 m-2 mb-4 tagShadow productCard">
      <router-link :to="'/products/p/' + product.id">
        <div class="cardProductImg">
          <img class="img-fluid productImg" v-bind:src="product.imgsPath[0].path"/>
        </div>
        <div class="d-flex w-100 justify-content-start">
          <a>{{ product.name }}</a>
        </div>
      </router-link>
        <div class="d-flex w-100 align-items-baseline justify-content-around">
          <a>{{ product.price }} $</a>
          <a class="ml-auto px-2 py-1 tagBtn tagBtnPrimary tagShadow"><small>Add to Cart</small></a>
        </div>
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
</style>
