<template>
  <div class="container">
    <div class="row w-100 m-0 mb-5 tagShadow box detailsbox justify-content-center p-3">
        <!-- cart header -->
        <div class="cartHeader">
            <h1>Your cart :</h1>
        </div>
        <!-- cart body -->
        <div class="row m-0 mt-5 cartBody">
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
                    <h4 class="">576 $</h4>
                </div>
            </div>
            <div class="row m-0 w-100 pt-2 justify-content-end">
                <button class="ml-2 px-2 py-1 tagBtn tagBtnSecondary tagShadow" @click="$router.go(-1)">Go Back</button>
                <button class="ml-2 px-2 py-1 tagBtn tagBtnPrimary tagShadow" @click="updateTotal" >Checkout</button>
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
  data: function () {
    return {
      cart:  this.$store.state.cart
    }
  },
  methods: {}
};
</script>
