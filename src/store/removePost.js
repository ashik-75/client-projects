import {createSlice} from "@reduxjs/toolkit";


const removePost = createSlice({
    name: "removePost",
    initialState: {
        posts: []
    },
    reducers: {
        ADD_POST: (state,action) => {
            state.posts = action.payload
        }
    }
})


export const removePostReducer = removePost.reducer;
const {ADD_POST} = removePost.actions


export const removePostClick = (count) => (dispatch)=>{
    dispatch({type:ADD_POST.type,payload: count })
}