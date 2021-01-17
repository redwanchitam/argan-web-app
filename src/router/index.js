import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue")
  },
  {
    path: "/products/p/:id",
    name: "productDetails",
    component: () =>
      import(
        /* webpackChunkName: "ProductDetails" */
        "../views/ProductDetails.vue"
      ),
    props: true
  },
  {
    path: "/user/:id/cart",
    name: "cart",
    component: () =>
      import(
        /* webpackChunkName: "ProductDetails" */
        "../views/cart.vue"
      ),
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
