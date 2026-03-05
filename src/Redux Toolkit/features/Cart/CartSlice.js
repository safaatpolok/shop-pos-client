import { createSlice } from "@reduxjs/toolkit";

// const { disconnect } = require("node:cluster");
// const { timeStamp } = require("node:console");
// const { access } = require("node:fs");
// const { type } = require("node:os");

const initialState = {
  items: [],
  selecdCustomer: null,
  note: '',
  discount: { type: "persentage", value: 0 },
  paymentMethod: "cash",
  heldOrders: [],
  currentOrders: null


}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const productWithQuantity = {
          ...product,
          quantity: 1
        }
        state.items.push(productWithQuantity)
      }
    },
    updateCartItemQuantit: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity
        }
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    clearCart: (state) => {
      state.items = [];
      state.selecdCustomer = null,
        state.note = ""
      state.discount = { type: "percentage", value: 0 }
      state.paymentMethod = "cash"
      state.currentOrders = null

    },

    setSelectedCustomer: (state, action) => {
      state.selecdCustomer = action.payload;
    },
    setNote: (state, action) => {
      state.note = action.payload
    },

    setDiscount: (state, action) => {
      state.discount = action.payload
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
    },

    holdOrders: (state) => {
      if (state.items.length > 0) {

        const heldOrder = {
          id: Date.now(),
          items: state.items,
          customer: state.selecdCustomer,
          note: state.note,
          discount: state.discount,
          timeStamp: new Date(),
        };
        state.heldOrders.push(heldOrder)
        state.items = [];
        state.selecdCustomer = null;
        state.note = " ",
          state.discount = { type: "percentage", value: 0 }

      }
    },
    resumeOrder: (state, action) => {
      const order = action.payload;
      state.items = order.items;
      state.selecdCustomer = order.customer;
      state.note = order.note;
      state.discount = order.discount

      state.heldOrders = state.heldOrders.filter((o) => o.id !== order.id)
    },
    setCuurentOrder: (state, action) => {
      state.currentOrders = action.payload
    },
    resetOrder: (state) => {
      state.items = [];
      state.selecdCustomer = null;
      state.note = "";
      state.discount = { type: "percentage", value: 0 };
      state.paymentMethod = "cash";
      state.currentOrders = null;
    },

  },


});

export const selectCartItems = (state) => state.cart.iteme;
export const selectCartItemsCount = (state) => state.cart.items.length;
export const selectSelectedCustomer = (state) => state.cart.selectSelectedCustomer;
export const selectNote = (state) => state.cart.note;
export const selectDiscount = (state) => state.cart.disconnect;
export const selectPaymentMethod = (state) => state.cart.paymentMethod;
export const selectHeldOrders = (state) => state.cart.heldOrders;
export const selectCurrentOrder = (state) => state.cart.currentOrders;



export const selectSubtotal = (state) => {
  return state.cart.items.reduce((total, item) => total + item.
    sellingPrice * item.quantity, 0)
}

export const selectTax = (state) => {
  const subtotal = selectSubtotal(state);
  return subtotal * 0.18
};

export const selectDiscountAmount = (state) => {
  const subtotal = selectSubtotal(state);
  const discount = state.cart.discount;

  if (discount.type === "percentage") {
    return subtotal * (discount.value / 100)
  } else {
    return discount.value
  }


}
export const selectTotal = (state) => {
  const subtotal = selectSubtotal(state);
  const tax = selectTax(state);
  const discountAmount = selectDiscountAmount(state);

  return subtotal + tax - discountAmount;

}

export const {
  addToCart,
  updateCartItemQuantit,
  removeFromCart,
  clearCart,
  setSelectedCustomer,
  setNote,
  setDiscount,
  setPaymentMethod,
  holdOrders,
  resumeOrder,
  setCuurentOrder,
  resetOrder
} = cartSlice.actions;

export default cartSlice.reducer;
