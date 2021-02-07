import { createStore } from "vuex";
import $ from "jquery";

export default createStore({
  state: {
    homeImgs: [
      {
        id:1,
        Path: require('../assets/homeImgs/homeCoverImg1'+'.png')
      },
      {
        id:2,
        Path: require('../assets/homeImgs/homeCoverImg2'+'.png')
      },
      {
        id:3,
        Path: require('../assets/homeImgs/homeCoverImg3'+'.png')
      },
      {
        id:4,
        Path: require('../assets/homeImgs/homeCoverImg4'+'.png')
      }
    ],
    products: [
      // ARGAN
      {
        id: 1,
        imgsPath: [
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
          { 
            id: 4,
            path: require('../assets/productsImages/productImg4'+'.png')
          },
        ],
        name: "بشرة",
        price: 13,
        rating: "80",
        categoryId: 1,
        mainOrgans: ["argan"],
        deliveries: ["morroco", "usa", "germany"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 2,
        imgsPath: [
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
          { 
            id: 4,
            path: require('../assets/productsImages/productImg4'+'.png')
          },
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
        ],
        name: "شعر",
        price: 17,
        rating: "80",
        categoryId: 1,
        mainOrgans: ["argan"],
        deliveries: ["morroco", "china", "england"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 3,
        imgsPath: [
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
          { 
            id: 4,
            path: require('../assets/productsImages/productImg4'+'.png')
          },
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
        ],
        name: "تدليك",
        price: 15,
        rating: "80",
        categoryId: 1,
        mainOrgans: ["argan"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 4,
        imgsPath: [
          { 
            id: 4,
            path: require('../assets/productsImages/productImg4'+'.png')
          },
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
        ],
        name: "أكل",
        price: 14,
        rating: "80",
        categoryId: 1,
        mainOrgans: ["argan"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      // AMLOU
      {
        id: 5,
        imgsPath: [
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
        ],
        name: "أملو - لوز",
        price: 29,
        rating: "80",
        categoryId: 2,
        mainOrgans: ["almonds","argan"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 6,
        imgsPath: [
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
        ],
        name: "أملو - كاوكاو",
        price: 21,
        rating: "80",
        categoryId: 2,
        mainOrgans: ["Peanuts","argan"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      // HONEY
      {
        id: 7,
        imgsPath: [
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
        ],
        name: "عسل - دغموس",
        price: 51,
        rating: "80",
        categoryId: 3,
        mainOrgans: ["HONEY"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 8,
        imgsPath: [
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
        ],
        name: "عسل - أعشاب",
        price: 49,
        rating: "80",
        categoryId: 3,
        mainOrgans: ["HONEY"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 9,
        imgsPath: [
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
        ],
        name: "عسل - زعتر",
        price: 50,
        rating: "80",
        categoryId: 3,
        mainOrgans: ["honey"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      // MARGARINE
      {
        id: 10,
        imgsPath: [
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
        ],
        name: "سمن - بقر",
        price: 49,
        rating: "80",
        categoryId: 4,
        mainOrgans: ["margarine"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
      {
        id: 11,
        imgsPath: [
          { 
            id: 5,
            path: require('../assets/productsImages/productImg5'+'.png')
          },
          { 
            id: 1,
            path: require('../assets/productsImages/productImg1'+'.png')
          },
          { 
            id: 2,
            path: require('../assets/productsImages/productImg2'+'.png')
          },
          { 
            id: 3,
            path: require('../assets/productsImages/productImg3'+'.png')
          },
        ],
        name: "سمن - ماعز",
        price: 49,
        rating: "80",
        categoryId: 4,
        mainOrgans: ["margarine"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
    ],
    variants: [
      {
        id:1,
        idProduct:1,
        size: "30 ml",
        color: "",
        price: 85
      },
      {
        id:2,
        idProduct:1,
        size: "60 ml",
        color: "",
        price: 150
      },
      {
        id:3,
        idProduct:2,
        size: "250 ml",
        color: "",
        price: 75
      },
      {
        id:4,
        idProduct:2,
        size: "500 ml",
        color: "",
        price: 140
      },
      {
        id:5,
        idProduct:2,
        size: "1000 ml",
        color: "",
        price: 260
      },
      {
        id:6,
        idProduct:3,
        size: "40 ml",
        color: "",
        price: 35
      },{
        id:7,
        idProduct:3,
        size: "70 ml",
        color: "",
        price: 60
      },{
        id:8,
        idProduct:3,
        size: "100 ml",
        color: "",
        price: 150
      },
    ],
    categories: [
      {
        id: 1,
        name: "Argan"
      },
      {
        id: 2,
        name: "Amlou"
      },
      {
        id: 3,
        name: "Honey"
      },
      {
        id: 4,
        name: "Margarine"
      },
      {
        id: 5,
        name: "Personal care"
      }
    ],
    cart: [],
  },
  mutations: {
    removeItem (state,productVariantId) {
      try{
        var itemToRemove = state.cart.find(cartItem => cartItem.productVariant.id === productVariantId);
        state.cart.splice( state.cart.indexOf(itemToRemove),1);
        $("small[name='pdtBtn"+ productVariantId+"']").html(" + ");
        $("small[name='pdtBtn"+ productVariantId +"']").removeClass("tagBtnSecondary");
        $("small[name='pdtBtn"+ productVariantId+"']").addClass("tagBtnPrimary");
      }catch{
        alert("removing product failed");
      }
    },
    addItem (state,productVariant) {
      try {
        state.cart.push(
          {
            productVariant: productVariant,
            quantity: 1
          }
        );
        $("small[name='pdtBtn"+ productVariant.id +"']").html(" - ");
        $("small[name='pdtBtn"+ productVariant.id +"']").removeClass("tagBtnPrimary");
        $("small[name='pdtBtn"+ productVariant.id +"']").addClass("tagBtnSecondary");
      }catch{
        alert("adding product failed");
      }
    },
    updateQuantity (state,{productVariantId,updatedQuantity}){
      try {  
        var currentCartItem = state.cart.find(cartItem => cartItem.productVariant.id === productVariantId);
        currentCartItem.quantity = updatedQuantity;
      } catch (error) {
        alert("updating quantity failed");
      }
    }
  },
  actions: {},
  modules: {}
});
