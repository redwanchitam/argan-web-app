<template>
    <div class="row m-0 mx-2 mt-3 px-2 w-100 cartItem align-items-center radius tagShadow">
        <div class="col-3 p-1  w-100">
            <div class="justify-content-start cartItemImg radius">
                <img class="img-fluid productImg" v-bind:src="$store.state.products.find(product => product.id == cartItem.productVariant.idProduct).imgsPath[0].path"/>
            </div>
        </div>
        <div class="col-9 p-0 w-100">
            <div class="row m-0 w100">
                <div class="col-lg-4 col-md-4 col-sm-12 p-0 w-100 cartItemName" >
                    <h5 class="text-justify">
                        {{ $store.state.products.find(product => product.id == cartItem.productVariant.idProduct).name }} ( {{ cartItem.productVariant.size }} )
                    </h5>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 p-0 w-100 ">
                    <div class="row m-0">
                        <div class="col-4 p-0 justify-content-center cartItemQuantity">
                            <div class="d-flex align-items-center radius">
                                <h6 tag="button" class="m-0 badge badge-dark tagBtn" @click="quantityDown(cartItem.productVariant.id)"> - </h6>
                                <input
                                    class="w-100 mx-1 text-center tagInput"
                                    @change="itemTotal(cartItem.productVariant.id)"
                                    :value="cartItem.quantity"
                                    :name="'itemQuantity' + cartItem.productVariant.id" type="number">
                                <h6 tag="button" class="m-0 badge badge-dark tagBtn" @click="quantityUp(cartItem.productVariant.id)"> + </h6>
                            </div>
                        </div>
                        <div class="col-5 p-0 w-100 justify-content-center" style="height: fit-content;">
                            <h6>{{ cartItem.quantity * cartItem.productVariant.price }} $</h6>
                        </div>
                        <div class="col-3 p-0 w-100 justify-content-center btnCartItem">
                            <h6 tag="button" class="badge badge-dark tagBtn tagBtnRemove px-1"  @click="removeItem(cartItem.productVariant.id)"> Remove </h6>
                        </div>
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
        currentProduct (productVariant) {
            return this.$store.state.products.find(product => product.id == productVariant.idProduct)
        }
    },
    data: function () {
    return {
        quantity: 1,
    }
  },
    methods: {
        quantityUp: function (productVariantId) {
            var updatedQuantity = $("input[name='itemQuantity"+ productVariantId+"']").val();
            updatedQuantity++;
            $("input[name='itemQuantity"+ productVariantId+"']").val(updatedQuantity);
            this.$store.commit("updateQuantity",{productVariantId,updatedQuantity});
        },
        quantityDown: function (productVariantId) {
            var updatedQuantity = $("input[name='itemQuantity"+ productVariantId+"']").val();
            updatedQuantity--;
            $("input[name='itemQuantity"+ productVariantId+"']").val(updatedQuantity);
            this.$store.commit("updateQuantity",{productVariantId,updatedQuantity});
        },
        itemTotal : function (productVariantId) {
            var updatedQuantity = $("input[name='itemQuantity"+ productVariantId+"']").val();
            this.$store.commit("updateQuantity",{productVariantId,updatedQuantity});
        },
        removeItem : function (productVariant){
            this.$store.commit("removeItem",productVariant);
        }
    },
    props: ["cartItem"]
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cartItemImg {
    width: 80%;
    height: 6rem;
    overflow: hidden;
    position: relative;
}
.cartItemImg .poductImg {
    width: 100%;
    height: auto;
}
</style>