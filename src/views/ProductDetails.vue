<template>
  <div class="row m-0 w-100 tagShadow box detailsbox justify-content-center p-3">
    <div class="col-lg-5 col-md-6 col-sm-12 p-2">
      <div class="d-flex flex-column w-100 box subDetailsBox imgsSubDetailsBox">
        <div class="tagShadow activeProductImg">
          <img class="img-fluid productImg" src="../assets/productsImages/productImg4.png"/>
        </div>
        <div class="d-flex justify-content-around w-100 sleepingProductImgsBox">
          <div v-on:click="toggleShift" id="sp1" class="tagShadow sleepingProductImg">
            <img class="img-fluid productImg" src="../assets/productsImages/productImg2.png" />
          </div>
          <div v-on:click="toggleShift" id="sp2" class="tagShadow sleepingProductImg">
            <img class="img-fluid productImg" src="../assets/productsImages/productImg3.png" />
          </div>
          <div v-on:click="toggleShift"  id="sp3"  class="tagShadow sleepingProductImg">
            <img class="img-fluid productImg" src="../assets/productsImages/productImg1.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7 col-md-6 col-sm-12 m-0 p-2">
      <div class="row m-0 pt-5 h-100">
        <div class="col-lg-5 col-md-12 col-sm-12 p-2">
          <div class="w-100 box subDetailsBox infoSubDetailsBox">
            <div class="d-flex flex-column align-items-start">
              <h2>{{ this.$store.state.products[2].name }}</h2>
              <h3>{{ this.$store.state.products[2].category }}</h3>
              <h3>{{ this.$store.state.products[2].rating }}</h3>
              <h3>{{ this.$store.state.products[2].price }} $</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12 p-2">
          <div class="d-flex w-100 box subDetailsBox infoSubDetailsBox">
            <div class="tagShadow descriptionBox">
              <p>{{ this.$store.state.products[2].description }}</p>
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
                    v-for="mainOrgan in this.$store.state.products[2].mainOrgans"
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
                    v-for="deliverie in this.$store.state.products[2].deliveries"
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
</template>

<script>
// @ is an alias to /src
import Store from "@/store/index.js";
import $ from 'jquery';
export default {
  name: "ProductDetails",
  store: Store,
  methods: {
    toggleShift : function(e) {
      alert(e.target.id);
      let tempo = $('.activeProductImg').html();
      console.log(tempo);
      // $('.activeProductImg').html($(this).html());
      // $(this).html(tempo);
    }
  }
};
</script>
