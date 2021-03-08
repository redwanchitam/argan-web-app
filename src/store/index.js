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
        name: "Skin",
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
        name: "Hair",
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
        name: "Massage",
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
        name: "Nutrition",
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
        name: "Amolu - Almonds",
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
        name: "Amlou - Peanuts",
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
        name: "Honey - Daghmous",
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
        name: "Honey - Herbs",
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
        name: "Honey - Thyme",
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
        name: "Margarine - Cow",
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
        name: "Margarine - Goat",
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
        extraOrgan: [],
        size: "30 ml",
        color: "",
        price: 85
      },
      {
        id:2,
        idProduct:1,
        extraOrgan: [],
        size: "60 ml",
        color: "",
        price: 150
      },
      {
        id:3,
        idProduct:1,
        extraOrgan: [],
        size: "100 ml",
        color: "",
        price: 75
      },
      {
        id:4,
        idProduct:2,
        extraOrgan: [],
        size: "30 ml",
        color: "",
        price: 140
      },
      {
        id:5,
        idProduct:2,
        extraOrgan: [],
        size: "60 ml",
        color: "",
        price: 260
      },
      {
        id:6,
        idProduct:2,
        extraOrgan: [],
        size: "100 ml",
        color: "",
        price: 35
      },
      {
        id:7,
        idProduct:3,
        extraOrgan: [],
        size: "30 ml",
        color: "",
        price: 60
      },
      {
        id:8,
        idProduct:3,
        extraOrgan: [],
        size: "60 ml",
        color: "",
        price: 100
      },
      {
        id:9,
        idProduct:3,
        extraOrgan: [],
        size: "100 ml",
        color: "",
        price: 150
      },
      {
        id:10,
        idProduct:4,
        extraOrgan: [],
        size: "500 ml",
        color: "",
        price: 150
      },
      {
        id:11,
        idProduct:4,
        extraOrgan: [],
        size: "1000 ml",
        color: "",
        price: 290
      },
      {
        id:12,
        idProduct:5,
        extraOrgan: [],
        size: "500 g",
        color: "",
        price: 180
      },
      {
        id:13,
        idProduct:5,
        extraOrgan: ["honey"],
        size: "1000 g",
        color: "",
        price: 350
      },
      {
        id:14,
        idProduct:6,
        extraOrgan: [],
        size: "500 g",
        color: "",
        price: 140
      },
      {
        id:15,
        idProduct:6,
        extraOrgan: ["honey"],
        size: "1000 g",
        color: "",
        price: 260
      },
      {
        id:16,
        idProduct:7,
        extraOrgan: [],
        size: "500 g",
        color: "",
        price: 120
      },
      {
        id:17,
        idProduct:7,
        extraOrgan: [],
        size: "1000 g",
        color: "",
        price: 230
      },
      {
        id:18,
        idProduct:8,
        extraOrgan: [],
        size: "500 g",
        color: "",
        price: 145
      },
      {
        id:19,
        idProduct:8,
        extraOrgan: [],
        size: "1000 g",
        color: "",
        price: 280
      },
      {
        id:20,
        idProduct:9,
        extraOrgan: [],
        size: "500 g",
        color: "",
        price: 170
      },
      {
        id:21,
        idProduct:9,
        extraOrgan: [],
        size: "1000 g",
        color: "",
        price: 320
      },
      {
        id:22,
        idProduct:10,
        extraOrgan: [],
        size: "500 g",
        color: "",
        price: 80
      },
      {
        id:23,
        idProduct:10,
        extraOrgan: [],
        size: "1000 g",
        color: "",
        price: 150
      },
      {
        id:24,
        idProduct:11,
        extraOrgan: [],
        size: "100 g",
        color: "",
        price: 65
      },
      {
        id:25,
        idProduct:11,
        extraOrgan: [],
        size: "250 g",
        color: "",
        price: 120
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
