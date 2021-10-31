import {createSlice} from "@reduxjs/toolkit";
import { useGetProductsQuery } from "./funApi";

const getCartDataFromCart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): [] 

const addToCart = createSlice({
    name: "addToCart",
    initialState: {
        cartItems: getCartDataFromCart
    },
    reducers: {
        ADD_TO_CART: (state,action) => {
            const existsItem = state.cartItems.find(cartItem => cartItem.id ===action.payload.id);
            if(existsItem){
                const newData = state.cartItems.map(dt => dt.id === action.payload.id ? action.payload: dt);
                state.cartItems = newData
            }else{
                state.cartItems.push(action.payload)
            }
        },
        REMOVE_ITEM_FROM_CART: (state,action) => {
            state.cartItems = state.cartItems.filter(prod => prod.id !== action.payload.id)
        }
    }
})


export const addToCartReducer = addToCart.reducer;
const {ADD_TO_CART,REMOVE_ITEM_FROM_CART} = addToCart.actions


export const addItemToCart = (cartData) => (dispatch,getState) => {
    dispatch({type: ADD_TO_CART.type,payload: cartData})
    localStorage.setItem("cartItems",JSON.stringify(getState().addToCart.cartItems))
} 

export const removeItemFromCart = (id) =>(dispatch,getState)=>{
    dispatch({type: REMOVE_ITEM_FROM_CART.type,payload: {id}});
    localStorage.setItem("cartItems",JSON.stringify(getState().addToCart.cartItems))
}