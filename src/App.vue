<template>
  <div class="tagNav sticky-top p-0 py-2 mb-5" id="nav">

    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Arganica</a>
      <div class="ml-auto">
        <button class="navbar-toggler tagBtnMenu tagShadow" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          +
        </button>
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
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?&family=Gruppo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  text-align: center;
  color: #171E0F;
}
.h1 {
  font-weight: 200 !important;
}
.h2 {
  font-weight: 200 !important;
}
.h3 {
  font-weight: 200 !important;
}
.h4 {
  font-weight: 200 !important;
}
.h5 {
  font-weight: 200 !important;
}
.h6 {
  font-weight: 200 !important;
}
a {
    color: #171E0F;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
#nav {
  background-color:#EDBB96;
  box-shadow: 0px 0px 12px rgb(65, 54, 42);
  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.tagShadow{
  border-radius: calc(0.7rem - 1px);
  box-shadow: 0px 0px 3px rgb(65, 54, 42);
  transition: ease all .7s;
}
.tagShadow:hover {
  box-shadow: 0px 0px 12px rgb(65, 54, 42);
  transition: ease all .7s;
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
// productDetails
.box {
  width: 80%;
  // border: 1px solid orange;
  border-radius: calc(0.7rem - 1px);
}
.detailsbox {
  background-color: white;
}
.subDetailsBox {
  // justify-content: center;
}
.productImg {
  max-width: 100%;
  height: auto;
  border-radius: calc(0.7rem - 1px);
  transition: ease all .7s;
}
.activeProductImg {
  max-width: 100%;
  height: 20rem;
  overflow: hidden;
  position: relative;
}
.cardProductImg {
  max-width: 100%;
  height: 12rem;
  overflow: hidden;
  position: relative;
}
.activeProductImg .productImg {
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.activeProductImg:hover .productImg{
  max-width: 125% !important;
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
}
.productInfosItem {
  width: fit-content;
}
.descriptionBox {
  justify-self: start;
  padding: 1rem;
}
.tagBtn {
  border-radius: calc(0.7rem - 1px);
  transition: ease-in-out all .7s;
}
.tagBtnPrimary {
  border: 1px solid white !important;
  background-color: #DD7150 !important;
  color: white !important;
}
.tagBtnSecondary {
  border: 1px solid #DD7150 !important;
  background-color:white !important;
  color: #DD7150 !important;
}
.tagBtnMenu {
  width: 3rem;
  height: 3rem;
  border: 1px solid #DD7150;
  background-color:white;
  color: #DD7150;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: ease-in-out all .7s;
}
</style>
