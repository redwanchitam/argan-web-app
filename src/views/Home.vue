<template>
  <div class="container">
      <div class="row m-0 py-1 px-3 justify-content-center radius pubBox">
          <p>
            here will be some publicity
          </p>
      </div>
    <div class="">
      <div class="row w-100 m-0 my-5 p-3 align-items-center">
        <!-- <div class="col-lg-7 col-md-7 col-sm-12 p-0 radius">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li 
                v-for="(product,index) in this.$store.state.products"
                v-bind:product="product"
                v-bind:key="product.id"
                v-bind:index="index"
                data-target="#carouselExampleIndicators"
                :data-slide-to="index">
              </li>
            </ol>
            <div class="carousel-inner">
              <productCard
                class="carousel-item active"
                v-bind:product="this.$store.state.products[0]"
                v-bind:key="this.$store.state.products[0].id"
              >
              </productCard>
              <productCard
                class="carousel-item"
                v-for="(product,index) in this.$store.state.products.slice(1)"
                v-bind:product="product"
                v-bind:key="product.id"
                v-bind:index="index"
              >
              </productCard>
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
        </div> -->
        <div class="col-12 p-0 homeParag justify-content-center">
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
      <div class="row w-100 m-0 my-5 p-3 align-items-center">
        <!--RECENT -->
        <a class="nav-link">RECENT</a>
        <div class="d-flex topSellingBox">
          <productCard
            v-for="(product,index) in this.$store.state.products"
            v-bind:product="product"
            v-bind:key="product.id"
            v-bind:index="index"
          >
          </productCard>
        </div>
      </div>
      <div class="row w-100 m-0 my-5 p-3 align-items-center">
        <!-- TOP SELLING -->
        <a class="nav-link">TOP SELLING</a>
        <div class="d-flex topSellingBox">
          <productCard
            v-for="(product,index) in this.$store.state.products"
            v-bind:product="product"
            v-bind:key="product.id"
            v-bind:index="index"
          >
          </productCard>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import productCard from "@/components/productCard.vue";
import Store from "@/store/index.js";
import $ from "jquery";

export default {
  mounted: function () {
    $(".topSellingBox").scrollLeft(200)
  },
  store: Store,
  name: "Home",
  components: {
    productCard
  },
  data: function () {
    return {
      homeImgs: this.$store.state.homeImgs
    }
  },
  methods: {
  }
};
</script>
