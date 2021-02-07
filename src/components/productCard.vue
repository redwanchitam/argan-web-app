<template>
  <div class="col-lg-3 col-md-4 col-6 p-0">
    <div @mouseleave="hideVariantsPopUp(product)" class="p-2 m-2 mb-4 tagShadow productCard radius">
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
        <small 
          class="ml-auto px-2 py-1 tagBtn tagBtnPrimary tagShadow radius"
          @click="toggleVariantsPopUp(product)">
            Check
        </small>
      </div>
      <div
        @mouseleave="hideVariantsPopUp(product)"
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
            <div class="d-flex">
              <a class=""> {{ variant.size }} </a>
            </div>
            <div class="d-flex justify-content-between align-items-baseline">
              <a class=""> {{ variant.price }} $ </a>
              <small 
              v-if="ifPrdVarExistInCart(variant)"
              :name="'pdtBtn' + variant.id"
              class="px-2 tagBtn tagBtnSecondary tagShadow radius"
              @click="removeItem(variant)">
                 - 
              </small>
              <small 
                v-else
                :name="'pdtBtn' + variant.id"
                class="px-2 tagBtn tagBtnPrimary tagShadow radius"
                @click="addItem(variant)">
                   + 
              </small>
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
      $("div[name='variantsPopUp"+ product.id +"']").addClass( "variantsPopUpShow" );
    },
    hideVariantsPopUp: function(product) {
      $("div[name='variantsPopUp"+ product.id +"']").removeClass( "variantsPopUpShow" );
    },
    toggleVariantsPopUp: function(product) {
      $("div[name='variantsPopUp"+ product.id +"']").toggleClass( "variantsPopUpShow" );
    },
    ifPrdVarExistInCart : function(productVariant) {
      if (this.$store.state.cart.find(cartItem => cartItem.productVariant.id === productVariant.id) === undefined){
        return false;
      }else{
        return true;
      }
    },
    removeItem : function(productVariant) {
      this.$store.commit("removeItem",productVariant.id);
    },
    addItem : function(productVariant) {
      this.$store.commit("addItem",productVariant);
    }
  },
  props: ["product"]
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productCard {
  background-color: #FFFFFF;
  position: relative;
}
.variantsPopUp {
  background-color: #FFFFFF;
  position: absolute;
  overflow: hidden;
  width: 130%;
  height: 0rem;
  left: 5%;
  bottom: 20%;
  z-index: 1;
  transition: ease-in-out all .7s;
}
.variantsPopUpShow {
  transition: ease-in-out all .7s;
  height: fit-content;
}
.variantPopUpItem {
  height: fit-content;
}
.variantImg {
  width: auto;
  height: 2.5rem;
  overflow: hidden;
  position: relative;
}
</style>