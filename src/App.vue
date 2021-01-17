<template>
  <div class="tagNav sticky-top p-0 mb-5" id="nav">
    <nav class="justify-content-between align-items-start navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/" >Arganica</router-link>
      <div class="d-flex flex-row" id="navbarNavBox">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link to="/">Home</router-link>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/products">Products</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/about">About</router-link>
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
      <div class="d-flex flex-row">
        <button 
          id="btnMenu"
          @click="toggleMenu"
          class="navbar-toggler tagBtn tagBtnMenu tagShadow"
          type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">+
        </button>
        <router-link to="/user/8/cart" >
          <button class="ml-2 tagBtn tagBtnMenu tagBtnPrimary tagShadow" type="button">
              <small>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>({{ count }})
              </small>
          </button>
        </router-link>
      </div>
    </nav>
  </div>
  <router-view />
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
    toggleMenu : function() {
      switch ($("#btnMenu").text()) {
        case '+':
          console.log("menu on");
          $("#navbarNavBox").css({"height": " 50vh", "align-items": "center"});
          $("#btnMenu").text("-")
          break;
        case "-":
          console.log("menu off");
          $("#navbarNavBox").css({"height": " inset", "align-items": "inset"});
          $("#btnMenu").text("+")
          break;
        default:
          console.log($("#btnMenu").text());
          break;
      }
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

#app {
  font-family: 'Sofia', cursive;
  font-weight: 400;
  text-align: center;
  color: #171E0F;
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
    color: #171E0F;
    &.router-link-exact-active {
      color: #DD7150 ;
    }
  }
#nav {
  background-color:rgb(255,255, 255);
  box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.7);
  a {
    &.router-link-exact-active {
      color: #DD7150 ;
    }
  }
}
// buttons
.tagBtn {
  cursor: pointer;
  transition: ease-in-out all .7s;
  outline: none !important;
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
  background-image: linear-gradient(120deg,  rgba(208, 100, 67, 0.8) 0%, rgb(208, 100, 67) 100%);
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