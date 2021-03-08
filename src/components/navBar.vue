<template>
    <div class="navBar">
        <nav class="d-flex flex-column pt-5 tagNav" id="nav">
            <div class="m-2 d-flex justify-content-center">
            <button
                tag="button"
                id="btnMenu"
                @click="ShowMenu"
                class="navbar-toggler tagBtn tagBtnMenu tagShadow"
                type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">+
            </button>
            </div>
            <div class="d-flex justify-content-center collapse navbar-collapse" id="navbarNavBox">
            <div class="" id="navbarNav">
                <ul class="navbar-nav align-items-center">
                <li class="nav-item active">
                    <a class="nav-link">
                    <router-link to="/">Home</router-link>
                    <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li
                    v-for="category in $store.state.categories"
                    v-bind:key="category.id"
                    v-bind:category="category"
                    class="nav-item">
                    <a class="nav-link">
                        <router-link
                        :to="'/products/c/' + category.id">
                        {{ category.name }}</router-link>
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
        </nav>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Store from "@/store/index.js";
    import $ from "jquery";

    export default {
    store: Store,
    name: "navBar",
    methods: {
        showMenu : function() {
        $(".tagNav").css({"width": "20rem"});
        // $("#navbarNavBox").css({"height": " 50vh", "align-items": "center"});
        $(".btnMenu").text("-");
        },
        hideMenu : function() {
        $(".tagNav").css({"width": "5rem"});
        // $("#navbarNavBox").css({"height": " inset", "align-items": "inset"});
        $(".btnMenu").value("+");
        }
    }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .navBar {
        background-color: chocolate;
        width: 0%;
        position: absolute;
        height: 100vh;
        z-index: 99;
    }
</style>