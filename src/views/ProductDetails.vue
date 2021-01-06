<template>
  <div class="container">
    <div class="row w-100 m-0 tagShadow box detailsbox justify-content-center p-3">
      <div class="col-lg-5 col-md-6 col-sm-12 p-2">
        <div class="d-flex flex-column w-100 box subDetailsBox imgsSubDetailsBox">
          <div v-on:click="toggleActiveImg" id="pi4box" class="tagShadow activeProductImg">
            <img class="img-fluid productImg" id="pi4" src="../assets/productsImages/productImg4.png"/>
          </div>
          <div class="d-flex justify-content-around w-100 sleepingProductImgsBox">
            <div v-on:click="toggleActiveImg" id="p2box" class="tagShadow sleepingProductImg">
              <img class="img-fluid productImg" id="pi2" src="../assets/productsImages/productImg2.png" />
            </div>
            <div v-on:click="toggleActiveImg" id="pi3box" class="tagShadow sleepingProductImg">
              <img class="img-fluid productImg" id="pi3" src="../assets/productsImages/productImg3.png" />
            </div>
            <div v-on:click="toggleActiveImg" id="pi1box" class="tagShadow sleepingProductImg">
              <img class="img-fluid productImg" id="pi1" src="../assets/productsImages/productImg1.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-6 col-sm-12 m-0 p-2">
        <div class="row m-0 pt-5 h-100">
          <div class="col-lg-5 col-md-12 col-sm-12 p-2">
            <div class="w-100 box subDetailsBox infoSubDetailsBox">
              <div class="d-flex flex-column align-items-start">
                <h2 v-on:click="toggleActiveImg" >{{ this.$store.state.products[$route.params.id].name }}</h2>
                <h3>{{ this.$store.state.products[$route.params.id].category }}</h3>
                <h3>{{ this.$store.state.products[$route.params.id].rating }}</h3>
                <h3>{{ this.$store.state.products[$route.params.id].price }} $</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12 p-2">
            <div class="d-flex w-100 box subDetailsBox infoSubDetailsBox">
              <div class="tagShadow descriptionBox">
                <p>{{ this.$store.state.products[$route.params.id].description }}</p>
              </div>
            </div>
          </div>
          <div class="col-12 p-2 mt-auto">
            <div class="d-flex flex-column w-100 box subDetailsBox infoSubDetailsBox">
              <div class="row m-0">
                <div class="col-4 w-100">
                  <div class="row m-0 justify-content-start"><h4>Main Organ</h4></div>
                </div>
                <div class="col-8 w-100">
                  <div class="row m-0">
                    <span
                      class="mr-2"
                      v-for="mainOrgan in this.$store.state.products[$route.params.id].mainOrgans"
                      v-bind:key= mainOrgan
                      >
                      {{ mainOrgan }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="row m-0">
                <div class="col-4 w-100">
                  <div class="row m-0 justify-content-start"><h4>Delivery</h4></div>
                </div>
                <div class="col-8 w-100">
                  <div class="row m-0">
                    <span
                      class="mr-2"
                      v-for="deliverie in this.$store.state.products[$route.params.id].deliveries"
                      v-bind:key= deliverie
                      >
                      {{ deliverie }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="row m-0 justify-content-end mt-5">
                <button class="ml-2 tagBtn tagBtnSecondary tagShadow" style="width: 30%">Go Back</button>
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
// import $ from 'jquery';
export default {
  name: "ProductDetails",
  store: Store,
  methods: {
    toggleActiveImg : function (event) {

      // alert("blaaabla");
      // alert($("#" + event.target.id).parent().attr("id") + " | " + $("#" + event.target.id).parent().html());
      // alert($(".activeProductImg").attr("id") + " | " + $(".activeProductImg").html());

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
