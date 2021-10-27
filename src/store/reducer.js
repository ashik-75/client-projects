import { combineReducers } from '@reduxjs/toolkit';
import { cartListReducer } from './cartList';
import { productListReducer } from './productList';
import { singleProductReducer } from './singleProduct';

const reducer = combineReducers({
  productList: productListReducer,
  cartList: cartListReducer,
  singleProduct: singleProductReducer,
});

export default reducer;
