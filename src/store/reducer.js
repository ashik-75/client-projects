import { combineReducers } from '@reduxjs/toolkit';
import { cartListReducer } from './cartList';
import { productListReducer } from './productList';

const reducer = combineReducers({
  productList: productListReducer,
  cartList: cartListReducer,
});

export default reducer;
