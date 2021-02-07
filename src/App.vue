<template>
  <div class="w-100 d-flex p-0">
    <nav class="pt-5 px-3 tagNav" id="nav">
      <router-link class="mb-5 navbar-brand logo" to="/" >Arganica</router-link>
      <div class="mb-5 d-flex justify-content-center">
        <!-- <small 
          id="btnMenu"
          @click="toggleMenu"
          class="navbar-toggler tagBtn tagBtnMenu tagShadow"
          type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">+
        </small> -->
        <button
          tag="button"
          id="btnMenu"
          @click="ShowMenu"
          class="navbar-toggler tagBtn tagBtnMenu tagShadow"
          type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">+
        </button>
      </div>
      <div class="d-flex justify-content-center collapse navbar-collapse" id="navbarNavBox">
        <div class="" id="navbarNav">
          <ul class="navbar-nav align-items-start">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link to="/">Home</router-link>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li
              v-for="category in this.$store.state.categories"
              v-bind:key="category.id"
              v-bind:category="category"
              class="nav-item">
                <a class="nav-link">
                  <router-link
                  :to="'/products/c/' + category.id">
                  {{ category.name }}</router-link>
                </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/contact">Contact Us</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="d-flex flex-column mainContent ">
      <nav class="d-flex flex-column mb-2 navbar">
        <div class="d-flex ml-auto navbar-nav">
          <div class="nav-item form-inline">
            <div class="topnav">
              <div class="tagShadow radius search-container">
                <form class="form-inline" action="/action_page.php">
                  <input class="tagInputSearch radius" type="text" placeholder="Search.." name="search">
                  <button class="tagBtnSearch radius" type="submit"><i class="fa fa-search"></i></button>
                </form>
              </div>
            </div>
            <router-link to="/user/8/cart" >
              <button class="ml-2 tagBtn tagBtnMenu tagBtnPrimary tagShadow" type="button">
                  <small>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>({{ count }})
                  </small>
              </button>
            </router-link>
            <router-link to="/user/8/profil" >
              <button class="ml-2 tagBtn tagBtnMenu tagBtnPrimary tagShadow" type="button">A</button>
            </router-link>
          </div>
        </div>
        <div class="d-flex py-1 px-3 justify-content-center radius pubBox">
          <p>
            here will be some publicity
          </p>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import Store from "@/store/index.js";
import $ from "jquery";
export default {
  store: Store,
  computed: {
    count () {
      return this.$store.state.cart.length
    }
  },
  methods: {
    showMenu : function() {
      $("#navbarNavBox").css({"height": " 50vh", "align-items": "center"});
      $(".btnMenu").html("-");
    },
    hideMenu : function() {
      $("#navbarNavBox").css({"height": " inset", "align-items": "inset"});
      $(".btnMenu").html("+");
    }
  }
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?&family=Gruppo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kufam:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400&family=Open+Sans:wght@300;400&display=swap');

.search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  height: 3rem;
  font-size: 17px;
  border: none;
}


.topnav .search-container button:hover {
  background: #D87556;
  transition: ease-in-out all .7s;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
}

body {
  background-color:#FCE9E2 ;
  color: #13291D;
}
#app {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  text-align: center;
}
.h1 {
  font-weight: 400 !important;
}
.h2 {
  font-weight: 400 !important;
}
.h3 {
  font-weight: 400 !important;
}
.h4 {
  font-weight: 400 !important;
}
.h5 {
  font-weight: 400 !important;
}
.h6 {
  font-weight: 400 !important;
}
a {
  color: #13291D;
}
a:hover {
  color: #293F33;
}
button {
  outline: 0 !important;
}
input {
  outline: 0 !important;
}
.tagNav {
  a {
      text-align: justify;
      color: #FCE9E2 ;
    &.router-link-exact-active {
      color: #D87556 ;
    }
  }
  a:hover {
    color: #DD9D7F ;
  }
}
a:hover{
  color: #e6957d ;
  text-decoration: none;
}
.tagNav {
  height: 100vh;
  width: 20%;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #13291D;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.logo {
  color: #D87556 !important;
}
.pubBox {
    width: 100%;
    height: 9rem;
    margin-top: 1.25rem;
    border: 1px solid #13291D ;
}
.mainContent {
  width: 80%;
}
// inputs
.tagInputSearch {
  border-top-right-radius: unset !important;
  border-bottom-right-radius: unset !important;
}
// buttons
.tagBtn {
  cursor: pointer;
  transition: ease-in-out all .7s;
  outline: none !important;
}
.tagBtnSearch {
  float: right;
  padding: 6px 10px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-top-left-radius: unset !important;
  border-bottom-left-radius: unset !important;
  background: #DD9D7F;
  transition: ease-in-out all .7s;
}
.tagBtnSearch:hover {
  background: #D87556;
  transition: ease-in-out all .7s;
}
.tagBtnPrimary {
  border: 1px solid transparent !important;
  background-color: #DD7150 !important;
  color: white !important;
}
.tagBtnSecondary {
  border: 1px solid #171E0F !important;
  background-color: white !important;
  color: #171E0F !important;
}
.tagBtnRemove {
  outline: none;
  height:fit-content;
  width: fit-content;
  justify-content: center;
  align-items: center;
}
.tagBtnMenu {
  outline: none;
  width: 3rem;
  height: 3rem;
  border: 1px solid #171E0F;
  background-color:white;
  color: #171E0F;
  border-radius: 50% !important;
  justify-content: center;
  align-items: center;
}

//inputs
.tagInput {
  background: transparent;
  border: none;
}

// shadow
.tagShadow{
  box-shadow: 0px 0px 3px rgb(65, 54, 42);
  transition: ease all .7s;
}
.tagShadow:hover {
  box-shadow: 0px 0px 12px rgb(65, 54, 42);
  transition: ease all .7s;
}
.radius {
  border-radius: calc(0.7rem - 1px); 
}

//home
.homeCover {
  width: 100%;
  height: 65vh;
  overflow: hidden;
  position: relative;
}
.carousel {
    position: unset !important;
}
.homeCover .productImg {
  width: 100% !important;
  height: auto !important;
}
.MainCoverParag{
  margin: 0;
  font-size: 30px;
}
.subCoverParag{
  margin: 0;
  font-size: 15px;
}
// products
.topSellingBox {
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
}
.navCateg {
  position: relative;
  overflow: hidden;
}
// product
.cardProductImg {
  width: 100%;
  height: 12rem;
  overflow: hidden;
  position: relative;
}
.productImg {
  max-width: 100%;
  height: auto;
  transition: ease all .7s;
}
// productDetails
.detailsbox {
  background-color: white;
}
.activeProductImg {
  max-width: 100%;
  height: 20rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 3px rgb(65, 54, 42);
 
}
.activeProductImg:hover .productImg{
  -ms-transform: translateY(-15%);
  transform: translateY(-15%);
  -ms-transform: translateX(-15%);
  transform: translateX(-15%);
  max-width: 130% !important;
  transition: ease-in-out all .7s;
}
.sleepingProductImgsBox {
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.sleepingProductImg {
  max-width: 25%;
  height: 4rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 3px rgb(65, 54, 42);
}
.sleepingProductImg:hover .productImg{
  -ms-transform: translateY(-15%);
  transform: translateY(-15%);
  -ms-transform: translateX(-15%);
  transform: translateX(-15%);
  max-width: 130% !important;
  transition: ease-in-out all .7s;
}
.productInfosItem {
  width: fit-content;
}
.descriptionBox {
  justify-self: start;
  padding: 1rem;
}
//cart
.cartItem {
  height: 8rem;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}
.cartBody {
  border-top: 1px solid #171E0F;
  height: 40vh;
  overflow-y: scroll;
}
.cartFooter{
  border-top: 1px solid #171E0F;
}
</style>