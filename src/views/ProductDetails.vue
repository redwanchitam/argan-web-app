<template>
  <div class="row m-0 w-100 tagShadow box detailsbox justify-content-center">
    <div class="col-lg-5 col-md-5 col-sm-12 p-2">
      <div
        class="d-flex flex-column w-100 p-3 box subDetailsBox imgsSubDetailsBox"
      >
        <div class="tagShadow">
          <img
            class="productImg activeProductImg"
            src="../assets/productsImages/productImg1.png"
          />
        </div>
        <div
          class="d-flex justify-content-around w-100 px-3 pt-3 sleepingProductImgsBox"
        >
          <div class="tagShadow">
            <img class="productImg sleepingProductImg" src="../assets/productsImages/productImg2.png" />
          </div>
          <div class="tagShadow">
            <img class="productImg sleepingProductImg" src="../assets/productsImages/productImg3.png" />
          </div>
          <div class="tagShadow">
            <img class="productImg sleepingProductImg" src="../assets/productsImages/productImg4.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7 col-md-7 col-sm-12 m-0 p-0">
      <div class="row m-0">
        <div class="col-lg-5 col-md-5 col-sm-12 p-2">
          <div class="w-100 p-3 box subDetailsBox infoSubDetailsBox">
            <div class="d-flex flex-column align-items-start pt-5">
              <h2>{{ this.$store.state.products[2].name }}</h2>
              <h3>{{ this.$store.state.products[2].category }}</h3>
              <h3>{{ this.$store.state.products[2].rating }}</h3>
              <h3>{{ this.$store.state.products[2].price }} $</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12 p-2">
          <div class="d-flex flex-column w-100 p-3 box subDetailsBox infoSubDetailsBox">
            blabla
            {{ $route.params.id }}
          </div>
        </div>
        <div class="col-12 p-2">
          <div class="d-flex flex-column w-100 p-3 box subDetailsBox infoSubDetailsBox">
            blabla
            {{ $route.params.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from "@/store/index.js";
export default {
  name: "ProductDetails",
  store: Store
};
</script>
