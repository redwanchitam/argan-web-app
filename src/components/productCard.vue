<template>
  <div class="col-lg-3 col-md-4 col-6 p-0">
    <div class="p-2 m-2 mb-4 tagShadow productCard radius">
      <router-link :to="'/products/p/' + product.id">
        <div class="cardProductImg radius">
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
        <!-- <small 
          v-if="ifPrdExistInCart(product)"
          :name="'pdtBtn' + product.id"
          class="ml-auto px-2 py-1 tagBtn tagBtnSecondary tagShadow radius"
          @click="removeItem(product)">
            Remove
        </small>
        <small 
          v-else
          :name="'pdtBtn' + product.id"
          class="ml-auto px-2 py-1 tagBtn tagBtnPrimary tagShadow radius"
          @click="addItem(product)">
            Add to Cart
        </small> -->
        <small 
          class="ml-auto px-2 py-1 tagBtn tagBtnPrimary tagShadow radius"
          @click="showVariantsPopUp(product)">
            Add to Cart
        </small>
      </div>
      <div
        :name="'variantsPopUp' + product.id"
        class="variantsPopUp tagShadow radius">
        
        <div
        v-for="(variant,index) in $store.state.variants.filter(variant => variant.idProduct == product.id)"
        v-bind:variant= variant
        v-bind:key= variant.id
        v-bind:index= index
        class="row mx-2 my-1 py-2 variantPopUpItem">
          <div class="col-4">
            <div class="variantImg radius">
              <img class="img-fluid productImg" v-bind:src="product.imgsPath[0].path"/>
            </div>
          </div>
          <div class="col-8">
            <div class="row m-0 w-100 ">
                <small class="">
                  {{ variant.size }}
                </small>
            </div>
            <div class="row m-0 mt-auto w-100">
              <div class="col-6 p-0 justify-content-start">
                <small class="">
                    {{ variant.price }} $
                </small>
              </div>
              <div class="col-6 p-0 justify-content-center">
                <small 
                  class="px-2 py-1 tagBtn tagBtnPrimary tagShadow radius"
                  @click="addItem(product)">
                     + 
                </small>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
import Store from "@/store/index.js";
import $ from "jquery";
export default {
  store: Store,
  computed: {
  },
  methods: {
    showVariantsPopUp: function(product) {
      $("div[name='variantsPopUp"+ product.id +"']").toggleClass( "variantsPopUpShow" );
      // var variants = this.$store.state.variants.filter(variant => variant.idProduct == product.id);
      // variants.forEach(variant => {
      //   $("div[name='variantsPopUp"+ product.id +"']").toggleClass( "variantsPopUpShow" );
      // });
    },
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
  background-image: linear-gradient(to top, #dfd2c1 0%, #deecdd 100%);
  position: relative;
}
.variantsPopUp {
  background-image: linear-gradient(to top, #dfd2c1 0%, #deecdd 100%);
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 0rem;
  left: 10%;
  bottom: 20%;
  z-index: 1;
  transition: ease-in-out all .7s;
  // display: none;
}
.variantsPopUpShow {
  transition: ease-in-out all .7s;
  height: auto;
}
.variantPopUpItem {
  width: 100%;
  height: fit-content;
}
.variantImg {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}
</style>