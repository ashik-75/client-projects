import { createSlice } from '@reduxjs/toolkit';
import products from '../products';

const cartItemFromStorage = localStorage.getItem('cartList')
  ? JSON.parse(localStorage.getItem('cartList'))
  : [];

console.log('Cart from storage', cartItemFromStorage);

const cartList = createSlice({
  name: 'cartList',
  initialState: {
    cart: cartItemFromStorage,
    loading: 'load data',
    newList: [5],
  },
  reducers: {
    ADD_ITEM_TO_CART: (state, action) => {
      const existsItem = state.cart.find(
        (prod) => prod.id === action.payload.id
      );

      if (existsItem) {
        state.cart = state.cart.map((prod) =>
          prod.id === existsItem.id ? action.payload : prod
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter((prod) => prod.id !== action.payload.id);
    },
  },
});

export const cartListReducer = cartList.reducer;
const { ADD_ITEM_TO_CART, REMOVE_FROM_CART } = cartList.actions;

export const addToCart = (id, qty) => (dispatch, getState) => {
  console.log('id is here ', id);
  const newProd = products.find((prod) => prod.id === id);

  const newPayload = {
    id,
    title: newProd.title,
    price: newProd.price,
    countInStock: newProd.countInStock,
    qty,
  };

  // localStorage.setItem('cartList');
  dispatch({ type: ADD_ITEM_TO_CART.type, payload: newPayload });

  localStorage.setItem('cartList', JSON.stringify(getState().cartList.cart));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  console.log('here is remove id ', id);
  dispatch({ type: REMOVE_FROM_CART.type, payload: { id } });
  localStorage.setItem('cartList', JSON.stringify(getState().cartList.cart));
};
