<template>
  <div class="container">
    <div class="products">
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

      <!-- CATEGORIES -->
      <div class="mt-5 productsWithCateg">
        <div class="row m-0 justify-content-center">
          <ul class="p-0 d-flex w-100 navCateg justify-content-around">
            <a
              v-for="category in this.$store.state.categories"
              v-bind:key="category.id"
              v-bind:category="category"
              class="nav-item"
              href="#"
            >
              {{ category.name }}
            </a>
          </ul>
        </div>
        <div class="row m-0 justify-content-center productsByCategBox">
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
export default {
  name: "Products",
  store: Store,
  components: {
    productCard
  },
  props: ["category"]
};
</script>
