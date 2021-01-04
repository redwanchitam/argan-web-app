import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        imgPath: "productImg1.png",
        name: "Prod 1",
        price: 13,
        rating: "80",
        category: "category 1",
        mainOrgans: ["argan"],
        deliveries: ["morroco", "usa", "germany"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 2,
        imgPath: "../assets/logo.png",
        name: "Prod 2",
        price: 17,
        rating: "80",
        category: "category 2",
        mainOrgans: ["argan", "Almonds"],
        deliveries: ["morroco", "china", "england"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 3,
        imgPath: "../assets/logo.png",
        name: "Prod 3",
        price: 15,
        rating: "80",
        category: "category 3",
        mainOrgans: ["olive"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      }
    ],
    categories: [
      {
        id: 1,
        name: "FACE"
      },
      {
        id: 2,
        name: "BODY"
      },
      {
        id: 3,
        name: "HAIR"
      },
      {
        id: 4,
        name: "MASSAGE"
      },
      {
        id: 5,
        name: "FEEDING"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
