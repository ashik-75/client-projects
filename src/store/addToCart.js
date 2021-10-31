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
        }
    }
})


export const addToCartReducer = addToCart.reducer;
const {ADD_TO_CART} = addToCart.actions


export const addItemToCart = (id,qty) => (dispatch,getState) => {
    // console.log(id,qty);

    // const filtered = getState();

    // console.log(filtered)
    console.log(getState())

    dispatch({type: ADD_TO_CART.type,payload: {id:1,title:"tomato",qty}})
    // console.log(id,qty)
    // const {data,isLoading,isError} = useGetProductsQuery();
    // console.log(data)
    // if(!isLoading) {
        // const getProduct = data.find(dt => dt.id === id);
        // dispatch({type: ADD_TO_CART.type,payload: {
        //     id: getProduct.id,
        //     title: getProduct.title,
        //     desc: getProduct.description,
        //     price: getProduct.price,
        //     qty
        // }})
    // }

    // localStorage.setItem("cartItems",JSON.stringify(getState().addToCart.cartItems))

} 