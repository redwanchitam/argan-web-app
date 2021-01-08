<template>
    <div class="mt-2 px-2 d-flex flex-row justify-content-between cartItem">
        <div class="box cartItemImg">
            <img class="img-fluid productImg" v-bind:src="cartItem.product.imgsPath[0].path"/>
        </div>
        <div class="cartItemName">
            <a>{{ cartItem.product.name }}</a>
        </div>
        <div class="cartItemQuantity">
            <a>{{ cartItem.quantity }}</a>
        </div>
        <div class="btnCartItem">
            <a>{{ cartItem.quantity  * cartItem.product.price }} $</a>
        </div>
    </div>
</template>

<script>
export default {
  props: ["cartItem"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cartItemImg {
    max-width: 15%;
    height: 5rem;
    overflow: hidden;
    position: relative;
}
</style>
