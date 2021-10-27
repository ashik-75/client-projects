import { createSlice } from '@reduxjs/toolkit';
import START_API_CALL from './startCall';

const singleProduct = createSlice({
  name: 'singleProduct',
  initialState: {
    product: {},
    loading: false,
    error: null,
  },
  reducers: {
    PRODUCT_REQUEST_START: (state, action) => {
      state.loading = true;
    },
    PRODUCT_REQUEST_SUCCESS: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    PRODUCT_REQUEST_FAILED: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const singleProductReducer = singleProduct.reducer;

const {
  PRODUCT_REQUEST_START,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILED,
} = singleProduct.actions;

export const loadProduct = (id) => {
  return START_API_CALL({
    url: `/products/${id}/?format=json`,
    onStart: PRODUCT_REQUEST_START.type,
    onSuccess: PRODUCT_REQUEST_SUCCESS.type,
    onError: PRODUCT_REQUEST_FAILED.type,
  });
};
