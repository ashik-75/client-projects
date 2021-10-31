import {configureStore} from "@reduxjs/toolkit";
import { addToCartReducer } from "./addToCart";
import { funApi } from "./funApi";
import { removePostReducer } from "./removePost";


const funStore = configureStore({
    reducer: {
        [funApi.reducerPath]: funApi.reducer,
        addToCart: addToCartReducer,
        removePost: removePostReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(funApi.middleware)
})

export default funStore