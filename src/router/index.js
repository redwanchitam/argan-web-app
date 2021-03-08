import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/products/c/:id",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue"),
      props: true
  },
  {
    path: "/products/p/:id",
    name: "productDetails",
    component: () =>
      import(/* webpackChunkName: "ProductDetails" */ "../views/ProductDetails.vue"),
    props: true
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "ProductDetails" */ "../views/cart.vue"),
    props: true
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "ProductDetails" */ "../views/Profile.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
