<template>
  <div class="">
    <div class="row w-100 m-0 mt-5  mb-5 p-3 tagShadow box detailsbox justify-content-center radius">
      <!-- details images -->
      <div class="col-lg-5 col-md-6 col-sm-12 p-2">
        <div class="d-flex flex-column w-100 subDetailsBox imgsSubDetailsBox radius">
          <!-- active products image -->
          <div :id="'imgBox' + currentProduct.imgsPath[0].id" class="tagShadow activeProductImg radius">
            <img class="img-fluid productImg" id="pi4" :src="currentProduct.imgsPath[0].path"/>
          </div>
          <!-- sleeping products images -->
          <div class="d-flex justify-content-around w-100 sleepingProductImgsBox">
            <div
              v-for="(imgPath,index) in currentProduct.imgsPath.slice(1)"
              v-bind:imgPath= imgPath
              v-bind:key= imgPath.id
              v-bind:index= index
              v-on:click="toggleActiveImg" :id="'imgBox' + imgPath.id" class="sleepingProductImg radius">
              <img class="img-fluid productImg" :id="imgPath.id" :src="imgPath.path" />
            </div>
          </div>
        </div>
      </div>
      <!-- details text -->
      <div class="col-lg-7 col-md-6 col-sm-12 m-0 p-2">
        <div class="row m-0 h-100">
          <!-- product infos -->
          <div class="col-lg-5 col-md-12 col-sm-12 p-2">
            <div class="w-100 box subDetailsBox infoSubDetailsBox">
              <div class="row m-0 justify-content-around">
                <div class="col-lg-12 col-md-12 col-sm-6">
                  <h3 class="productInfosItem">{{ currentProduct.name }}</h3>
                  <h4 class="productInfosItem">{{ currentProduct.category }}</h4>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-6 pr-auto">
                  <div class="d-flex flex-row align-items-center mb-2 ml-auto productInfosItem">
                    <div class="unitRating unitRatingOn"></div>
                    <div class="unitRating unitRatingOn"></div>
                    <div class="unitRating unitRatingOn"></div>
                    <div class="unitRating unitRatingOn"></div>
                    <div class="unitRating unitRatingOff"></div>
                  </div>
                  <h4 class="productInfosItem ml-auto">from {{ minPrice(currentProduct) }} $</h4>
                </div>
              </div>

            </div>
          </div>
          <!-- description -->
          <div class="col-lg-7 col-md-12 col-sm-12 p-2">
            <div class="d-flex w-100 box subDetailsBox infoSubDetailsBox">
              <div class="tagShadow descriptionBox radius">
                <p>{{ currentProduct.description }}</p>
              </div>
            </div>
          </div>
          <!-- subInfos and buttons -->
          <div class="col-12 p-2 mt-auto">
            <div class="d-flex flex-column w-100 box subDetailsBox infoSubDetailsBox">
              <!-- main organs -->
              <div class="row m-0">
                <div class="col-4 justify-content-start pr-0">
                  <div class="row m-0">
                    <h6 class="productInfosItem">Main Organ</h6>
                    <h6 class="ml-auto">:</h6>
                  </div>
                </div>
                <div class="col-8">
                  <div class="row m-0">
                    <span
                      class="mr-2 mb-1 badge badge-dark"
                      v-for="mainOrgan in currentProduct.mainOrgans"
                      v-bind:key= mainOrgan
                      >
                      {{ mainOrgan }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- deliveries -->
              <div class="row m-0">
                <div class="col-4 justify-content-start pr-0">
                  <div class="row m-0">
                    <h6 class="productInfosItem">Delivery</h6>
                    <h6 class="ml-auto">:</h6>
                  </div>
                </div>
                <div class="col-8">
                  <div class="row m-0">
                    <span
                      class="mr-2 mb-1 badge badge-dark"
                      v-for="delivery in currentProduct.deliveries"
                      v-bind:key= delivery
                      >
                      {{ delivery }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- buttons -->
              <div class="row m-0 justify-content-end mt-5">
                <button class="ml-2 tagBtn tagBtnSecondary tagShadow radius" style="width: 30%" @click="$router.go(-1)">Go Back</button>
                <button
                  v-if="ifPrdVarExistInCart(currentProduct)"
                  @click="removeItem(currentProduct)"
                  :name="'pdtBtn' + currentProduct.id"
                  class="ml-2 tagBtn tagBtnSecondary tagShadow radius"
                  style="width: 30%"
                  >
                  Remove
                </button>
                <button
                  v-else
                  :name="'pdtBtn' + currentProduct.id"
                  class="ml-2 tagBtn tagBtnPrimary tagShadow radius"
                  style="width: 30%"
                  @click="toggleVariantsPopUp(currentProduct)">
                    Check
                </button>
                <div
                    @mouseleave="hideVariantsPopUp(currentProduct)"
                    :name="'variantsPopUp' + currentProduct.id"
                    class="variantsPopUp tagShadow radius">
                    <div
                    v-for="(variant,index) in $store.state.variants.filter(variant => variant.idProduct == currentProduct.id)"
                    v-bind:variant= variant
                    v-bind:key= variant.id
                    v-bind:index= index
                    class="row mx-2 my-1 py-2 variantPopUpItem">
                      <div class="col-4">
                        <div class="variantImg radius">
                          <img class="img-fluid productImg" v-bind:src="currentProduct.imgsPath[0].path"/>
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="d-flex text-left">
                          <small class=""> {{ variant.size }} 
                            <small 
                              v-for="(extraO,index) in variant.extraOrgan"
                              v-bind:extraO= extraO
                              v-bind:key= extraO
                              v-bind:index= index> +{{ extraO }}</small> 
                          </small>
                        </div>
                        <div class="d-flex justify-content-between align-items-baseline">
                          <small class=""> {{ variant.price }} $ </small>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from "@/store/index.js";
import $ from "jquery";

export default {
  name: "ProductDetails",
  store: Store,
  data: function () {
    return {
      currentProduct: this.$store.state.products.find(product => product.id == this.$route.params.id)
    }
  },
  methods: {
    minPrice: function (product) {
      var variants = this.$store.state.variants.filter(variant => variant.idProduct == product.id);
      var prices = [];
      console.log(variants.length);
      if (variants.length<1) {
        return product.price;
      }
      variants.forEach(variant => {
        prices.push(variant.price);
      });
      return Math.min(...prices);
    },
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
    removeItem : function(product) {
      this.$store.commit("removeItem",product.id);
    },
    addItem : function(product) {
      this.$store.commit("addItem",product);
    },
    toggleActiveImg : function (event) {

      var imgBoxId = $("#" + event.target.id).parent().attr("id");
      var imgHtml = $("#" + event.target.id).parent().html();

      $("#" + event.target.id).parent().attr("id", $(".activeProductImg").attr("id") );
      $("#" + event.target.id).parent().html($(".activeProductImg").html());

      $(".activeProductImg").attr("id", imgBoxId);
      $(".activeProductImg").html(imgHtml);
    }
  }
};
</script>