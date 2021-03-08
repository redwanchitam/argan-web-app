<template>
  <div class="w-100 d-flex p-0">
    <div class="w-100 d-flex flex-column">
      <div class="px-5 py-2 searhBar radius">
        <form class="form-inline justify-content-center" action="">
          <input class="tagInputSearch radius" type="text" placeholder="Search.." name="search">
          <button class="tagBtnPrimary tagBtnSearch radius" type="submit"><i class="fa fa-search"  style='color:white'></i></button>
        </form>
      </div>
      <router-view class="mainContent" />
      <!-- Internet Connection Status-->
      <div class="internet-connection-status" id="internetStatus"></div>
      <!-- Footer Nav-->
      <div class="footer" id="footerNav">
        <div class="container h-100 px-0">
          <div class="suha-footer-nav h-100">
            <ul class="h-100 px-5 d-flex align-items-center justify-content-between ps-0">
              <li class="active">
                <router-link to="/" >
                  <a alt="home"><i class="fas fa-store-alt"></i></a>
                </router-link>
              </li>
              <li>
                <router-link to="/products/c/1">
                  <a alt="products"><i class="fas fa-vials"></i></a>
                </router-link>
              </li>
              <li>
                <router-link to="/user/8/cart" >
                  <a alt="cart"><i class="fas fa-shopping-cart"></i>({{ count }})</a>
                </router-link>
              </li>
              <li>
                <router-link to="/" >
                  <a alt="profile"><i class="fas fa-user-alt"></i></a>
                </router-link>
                </li>
            </ul>
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
    count () {
      return this.$store.state.cart.length
    }
  },
  methods: {
    showMenu : function() {
      $(".tagNav").css({"width": "20rem"});
      // $("#navbarNavBox").css({"height": " 50vh", "align-items": "center"});
      $(".btnMenu").text("-");
    },
    hideMenu : function() {
      $(".tagNav").css({"width": "5rem"});
      // $("#navbarNavBox").css({"height": " inset", "align-items": "inset"});
      $(".btnMenu").value("+");
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
a:hover{
  color: #e6957d ;
  text-decoration: none;
}
ul li {
    list-style: none;
    text-decoration: none;
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
  margin-bottom: 58px; 
}
// inputs
.tagInputSearch {
  border-top-right-radius: unset !important;
  border-bottom-right-radius: unset !important;
  height: 2.5rem;
  border: none
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
  font-size: 15px;
  border: none;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-top-left-radius: unset !important;
  border-bottom-left-radius: unset !important;
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
  height: 50vh;
  overflow-y: scroll;
}
.cartFooter{
  border-top: 1px solid #171E0F;
}

//footer
.footer {
  transition-duration: 500ms;
  background-color: #ffffff;
  width: 100%;
  height: 58px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>