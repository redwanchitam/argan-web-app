<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?&family=Gruppo&display=swap');
#app {
  font-family: 'Gruppo', cursive;
  // font-family: 'Redressed', cursive;
  // font-family: 'Marck Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #171E0F;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.tagShadow{
  border-radius: calc(0.7rem - 1px);
  box-shadow: 0px 0px 8px rgb(65, 54, 42);
  transition: ease all .7s;
}
.tagShadow:hover {
  box-shadow: 0px 0px 16px rgb(65, 54, 42);
  transition: ease all .7s;
}


// productDetails
.box {
  width: 90%;
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
}
.activeProductImg {
  max-width: 100%;
  height: 25rem;
  overflow: hidden;
}
.sleepingProductImgsBox {
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.sleepingProductImg {
  max-width: 25%;
  height: 5rem;
  overflow: hidden;
}
.descriptionBox {
  justify-self: start;
  padding: 1rem;
}
.tagBtn {
  border-radius: calc(0.7rem - 1px);
}
.tagBtnPrimary {
  border: 1px solid white;
  background-color: #DD7150;
  color: white;
}
.tagBtnSecondary {
  border: 1px solid #DD7150;
  background-color:white;
  color: #DD7150;
}
</style>
