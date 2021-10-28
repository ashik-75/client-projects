import { createSlice } from '@reduxjs/toolkit';
import START_API_CALL from './startCall';

const productList = createSlice({
  name: 'productList',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    PRODUCT_LIST_REQUEST: (state, action) => {
      state.loading = true;
    },
    PRODUCT_LIST_REQUEST_SUCCESS: (state, action) => {
      console.log("action payload",action.payload)
      state.loading = false;
      state.products = action.payload;
    },
    PRODUCT_LIST_REQUEST_FAILED: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productListReducer = productList.reducer;

const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_REQUEST_SUCCESS,
  PRODUCT_LIST_REQUEST_FAILED,
} = productList.actions;

export const loadProducts = () => {
  return START_API_CALL({
    url: '/products/?format=json',
    onStart: PRODUCT_LIST_REQUEST.type,
    onSuccess: PRODUCT_LIST_REQUEST_SUCCESS.type,
    onError: PRODUCT_LIST_REQUEST_FAILED.type,
  });
};
