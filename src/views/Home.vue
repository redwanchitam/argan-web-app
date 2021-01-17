<template>
  <div class="container">
    <div class="">
      <div class="row w-100 m-0 my-5 p-3 align-items-center">
        <div class="col-lg-7 col-md-7 col-sm-12 p-0 homeCover radius">
          <!-- <img class="img-fluid productImg" src="@/assets/homeImgs/homeCoverImg2.png"/> -->
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="@/assets/homeImgs/homeCoverImg1.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="@/assets/homeImgs/homeCoverImg2.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="@/assets/homeImgs/homeCoverImg3.png" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="@/assets/homeImgs/homeCoverImg4.png" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 p-0 homeParag justify-content-center">
          <div class="descriptionBox">
            <p class="MainCoverParag">Discover the secret of moroccan Atlas's beauty in the bio savor of Argan</p>
          </div>
          <div class="descriptionBox">
            <p class="subCoverParag">A lot of good bio products you can find here, all made with caring and love.</p>
          </div>
          <div class="row m-0 mt-auto justify-content-around">
            <button class="tagBtn tagBtnPrimary tagShadow radius" style="height: 2rem;width: 40%" @click="$router.push('products')"> <small>Explore</small> </button>
            <button class="tagBtn tagBtnSecondary tagShadow radius" style="height: 2rem;width: 40%" @click="$router.push('contact')"> <small>Contact Us</small> </button>
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
  store: Store,
  name: "Home",
  data: function () {
    return {
      homeImgs: this.$store.state.homeImgs
    }
  },
  methods: {
  }
};
</script>
