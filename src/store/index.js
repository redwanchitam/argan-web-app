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
        name: "Product 1",
        price: 13,
        rating: "80",
        category: "category 1",
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
        name: "Product 2",
        price: 17,
        rating: "80",
        category: "category 2",
        mainOrgans: ["argan", "Almonds"],
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
        name: "Product 3",
        price: 15,
        rating: "80",
        category: "category 3",
        mainOrgans: ["olive"],
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
        name: "Product 4",
        price: 14,
        rating: "80",
        category: "category 4",
        mainOrgans: ["olive"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      },
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
        name: "Product 5",
        price: 21,
        rating: "80",
        category: "category 5",
        mainOrgans: ["olive"],
        deliveries: ["morroco", "mexico", "middle east"],
        description: "Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      }
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
    ],
    cart: [],
  },
  mutations: {
    removeItem (state,productId) {
      try{
        var itemToRemove = state.cart.find(cartItem => cartItem.product.id === productId);
        state.cart.splice( state.cart.indexOf(itemToRemove),1);
        $("small[name='pdtBtn"+ productId+"']").html("Add to Cart");
        $("small[name='pdtBtn"+ productId +"']").removeClass("tagBtnSecondary");
        $("small[name='pdtBtn"+ productId+"']").addClass("tagBtnPrimary");
      }catch{
        alert("adding product failed");
      }
    },
    addItem (state,product) {
      try {
        state.cart.push(
          {
            product: product,
            quantity: 1
          }
        );
        $("small[name='pdtBtn"+ product.id +"']").html("Remove");
        $("small[name='pdtBtn"+ product.id +"']").removeClass("tagBtnPrimary");
        $("small[name='pdtBtn"+ product.id +"']").addClass("tagBtnSecondary");
      }catch{
        alert("removing product failed");
      }
    },
    updateQuantity (state,{productId,updatedQuantity}){
      try {  
        var currentCartItem = state.cart.find(cartItem => cartItem.product.id === productId);
        currentCartItem.quantity = updatedQuantity;
      } catch (error) {
        alert("updating quantity failed");
      }
    }
  },
  actions: {},
  modules: {}
});
