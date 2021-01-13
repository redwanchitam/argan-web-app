<template>
    <div class="row m-0 w-100 mt-2 px-2 cartItem">
        <div class="col-2 w-100 pl-2 p-0" style="height: fit-content;">
            <div class="justify-content-start box cartItemImg">
                <img class="img-fluid productImg" v-bind:src="cartItem.product.imgsPath[0].path"/>
            </div>
        </div>
        <div class="d-flex col-4 w-100 p-0 justify-content-start cartItemName" style="height: fit-content;">
            <h4>{{ cartItem.product.name }}</h4>
        </div>
        <div class="col-2 w-100 p-0 justify-content-center  cartItemQuantity" style="height: fit-content;">
            <div class="d-flex">
                <input  @change="itemTotal(cartItem.product.id)" :value="cartItem.quantity" class="w-100 text-center" min="1" max="5" :name="'itemQuantity' + cartItem.product.id" type="number">
            </div>
        </div>
        <div class="d-flex col-2 w-100 p-0 justify-content-center btnCartItem" style="height: fit-content;">
            <h4>{{ cartItem.quantity * cartItem.product.price }} $</h4>
        </div>
        <div class="d-flex col-2 w-100 p-0 justify-content-center btnCartItem">
            <small tag="button" class="badge badge-dark tagBtn tagBtnRemove"  @click="removeItem(cartItem.product.id)">remove</small>
        </div>
    </div>
</template>

<script>
import Store from "@/store/index.js";
import $ from "jquery";
export default {
    store: Store,
    computed: {
    },
    data: function () {
    return {
        quantity: 1,
    }
  },
    methods: {
        itemTotal : function (productId) {
            var updatedQuantity = $("input[name='itemQuantity"+ productId+"']").val();
            this.$store.commit("updateQuantity",{productId,updatedQuantity});
        },
        removeItem : function (product){
            this.$store.commit("removeItem",product);
        }
    },
    props: ["cartItem"]
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cartItemImg {
    max-width: 40%;
    overflow: hidden;
    position: relative;
}
</style>