import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"GPT",
    initialState:{
        isGPT:false,
    },
    reducers:{
        toggleGPTSearchView:(state,action)=>{
            state.isGPT=  !state.isGPT
        },
    },
});

export const {toggleGPTSearchView}=GPTSlice.actions;
export default GPTSlice.reducer;