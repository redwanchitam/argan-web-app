<template>
  <div class="container">
    <div class="products">
      <!-- TOP SELLING -->
      <a class="nav-link" href="#">TOP SELLING</a>
      <div class="row justify-content-center">
        <productCard
          v-for="(product, index) in this.$store.state.products"
          v-bind:product="product"
          v-bind:index="index"
          v-bind:key="product.id"
        >
        </productCard>
      </div>

      <!-- CATEGORIES -->
      <ul class="nav justify-content-center">
        <li
          v-for="(category, index) in this.$store.state.categories"
          v-bind:index="index"
          v-bind:key="category.id"
          v-bind:categorie="category"
          class="nav-item"
          href="#"
        >
          <a class="nav-link" href="#">{{ category.name }}</a>
        </li>
      </ul>
      <div class="row justify-content-center">
        <productCard
          v-for="(product, index) in this.$store.state.products"
          v-bind:product="product"
          v-bind:index="index"
          v-bind:key="product.id"
        >
        </productCard>
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
