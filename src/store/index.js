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
        mainOrgan: ["argan"],
        delivery: ["morroco", "china", "england"],
        description: "a"
      },
      {
        id: 2,
        imgPath: "../assets/logo.png",
        name: "Prod 2",
        price: 17,
        rating: "80",
        category: "category 2",
        mainOrgan: ["argan", "Almonds"],
        delivery: ["morroco", "china", "england"],
        description: "a"
      },
      {
        id: 3,
        imgPath: "../assets/logo.png",
        name: "Prod 3",
        price: 15,
        rating: "80",
        category: "category 3",
        mainOrgan: ["olive"],
        delivery: ["morroco", "china", "england"],
        description: "a"
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
