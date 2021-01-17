<template>
  <div class="container">
    <div class="row w-100 m-0 mb-5 p-3 tagShadow detailsbox justify-content-center radius">
        <!-- cart header -->
        <div class="cartHeader">
            <h1>Order :</h1>
        </div>
        <!-- cart body -->
        <div class="row m-0 mt-5 w-100 cartBody">
            <cartItem
            v-for="(cartItem,index) in cart"
            v-bind:cartItem="cartItem"
            v-bind:key="cartItem.product.id"
            v-bind:index="index">
            </cartItem>
        </div>
        <!-- cart footer -->
        <div class="row m-0 px-2 w-100 cartFooter">
            <div class="row m-0 w-100 pt-2 justify-content-between">
                <div class="">
                    <h4 class="">Total :</h4>
                </div>
                <div class="">
                    <h4 class="">{{ total }} $</h4>
                </div>
            </div>
            <div class="row m-0 w-100 pt-2 justify-content-end">
                <button class="ml-2 px-2 py-1 tagBtn tagBtnSecondary tagShadow radius" @click="$router.go(-1)">Go Back</button>
                <button class="ml-2 px-2 py-1 tagBtn tagBtnPrimary tagShadow radius" @click="updateTotal" >Checkout</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import cartItem from "@/components/cartItem.vue";
import Store from "@/store/index.js";

export default {
  name: "Cart",
  store: Store,
  components: {
    cartItem
  },
  computed: {
    total () {
      var total = 0 ;
      this.$store.state.cart.forEach(cartItem => {
        total+= cartItem.product.price * cartItem.quantity;
      });
      return total;
    },
    cart () {
      return this.$store.state.cart
    }
  },
  methods: {
  }
};
</script>
