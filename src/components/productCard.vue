<template>
  <div class="col-lg-3 col-md-4 col-6 p-0">
    <div class="p-2 m-2 mb-4 tagShadow productCard">
      <router-link :to="'/products/p/' + product.id">
        <div class="cardProductImg">
          <img class="img-fluid productImg" v-bind:src="product.imgsPath[0].path"/>
        </div>
        <div class="row m-0 w-100 align-items-baseline justify-content-start">
          <a>{{ product.name }}</a>
          <div class="d-flex flex-row mb-2 ml-auto productInfosItem">
            <div class="unitRating unitRatingOn"></div>
            <div class="unitRating unitRatingOn"></div>
            <div class="unitRating unitRatingOn"></div>
            <div class="unitRating unitRatingOn"></div>
            <div class="unitRating unitRatingOff"></div>
          </div>
        </div>
      </router-link>
        <div class="d-flex w-100 align-items-baseline justify-content-around">
          <a>{{ product.price }} $</a>
          <small 
            v-if="ifPrdExistInCart(product)"
            :name="'pdtBtn' + product.id"
            class="ml-auto px-2 py-1 tagBtn tagBtnSecondary tagShadow"
            @click="removeItem(product)">
              Remove
          </small>
          <small 
            v-else
            :name="'pdtBtn' + product.id"
            class="ml-auto px-2 py-1 tagBtn tagBtnPrimary tagShadow"
            @click="addItem(product)">
              Add to Cart
          </small>
        </div>
    </div>
  </div>
</template>

<script>
import Store from "@/store/index.js";
export default {
  store: Store,
  computed: {
  },
  methods: {
    ifPrdExistInCart : function(product) {
      if (this.$store.state.cart.find(cartItem => cartItem.product.id === product.id) === undefined){
        return false;
      }else{
        return true;
      }
    },
    removeItem : function(product) {
      this.$store.commit("removeItem",product.id);
    },
    addItem : function(product) {
      this.$store.commit("addItem",product);
    }
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