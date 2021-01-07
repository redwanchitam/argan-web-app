<template>
  <div class="container">
    <div class="row w-100 m-0 tagShadow box detailsbox justify-content-center p-3">
      <!-- details images -->
      <div class="col-lg-5 col-md-6 col-sm-12 p-2">
        <div class="d-flex flex-column w-100 box subDetailsBox imgsSubDetailsBox">
          <!-- active products image -->
          <div :id="'imgBox' + currentProduct.imgsPath[0].id" class="tagShadow activeProductImg">
            <img class="img-fluid productImg" id="pi4" :src="currentProduct.imgsPath[0].path"/>
          </div>
          <!-- sleeping products images -->
          <div class="d-flex justify-content-around w-100 sleepingProductImgsBox">
            <div
              v-for="(imgPath,index) in currentProduct.imgsPath.slice(1)"
              v-bind:imgPath= imgPath
              v-bind:key= imgPath.id
              v-bind:index= index
              v-on:click="toggleActiveImg" :id="'imgBox' + imgPath.id" class="tagShadow sleepingProductImg">
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
                  <h5 class="productInfosItem ml-auto">{{ currentProduct.rating }}</h5>
                  <h4 class="productInfosItem ml-auto">{{ currentProduct.price }} $</h4>
                </div>
              </div>

            </div>
          </div>
          <!-- description -->
          <div class="col-lg-7 col-md-12 col-sm-12 p-2">
            <div class="d-flex w-100 box subDetailsBox infoSubDetailsBox">
              <div class="tagShadow descriptionBox">
                <p>{{ currentProduct.description }}</p>
              </div>
            </div>
          </div>
          <!-- subInfos and buttons -->
          <div class="col-12 p-2 mt-auto">
            <div class="d-flex flex-column w-100 box subDetailsBox infoSubDetailsBox">
              <!-- main organs -->
              <div class="row m-0">
                <div class="col-5 justify-content-start pl-0">
                  <div class="row m-0">
                    <h6 class="productInfosItem">Main Organ</h6>
                  </div>
                </div>
                <div class="col-7 justify-content-start pl-0">
                  <span
                    class="mr-2"
                    v-for="mainOrgan in this.$store.state.products[$route.params.id-1].mainOrgans"
                    v-bind:key= mainOrgan
                    >
                    {{ mainOrgan }}
                  </span>
                </div>
              </div>
              <!-- deliveries -->
              <div class="row m-0">
                <div class="col-5 justify-content-start pl-0">
                  <h6 class="productInfosItem">Delivery</h6>
                </div>
                <div class="col-7 justify-content-start pl-0">
                  <div class="row m-0">
                    <span
                      class="mr-2"
                      v-for="deliverie in this.$store.state.products[$route.params.id-1].deliveries"
                      v-bind:key= deliverie
                      >
                      {{ deliverie }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- buttons -->
              <div class="row m-0 justify-content-end mt-5">
                <button class="ml-2 tagBtn tagBtnSecondary tagShadow" style="width: 30%" @click="$router.go(-1)">Go Back</button>
                <button class="ml-2 tagBtn tagBtnPrimary tagShadow" style="width: 30%">Confirm</button>
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
      currentProduct: this.$store.state.products[this.$route.params.id-1]
    }
  },
  methods: {
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
