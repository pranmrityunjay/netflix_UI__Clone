import { createSlice } from "@reduxjs/toolkit";

const viewSlice=createSlice({
    name:'view',
    initialState:{
        isView:false,
        movieDetail:null,
        movieKey:null,
        movieDetails:null,
    },
    reducers:{
        addView:(state,action)=>{
            state.isView=action.payload;
        },
        addMovieDetail:(state,action)=>{
            state.movieDetail=action.payload;
        },
        addMovieKey:(state,action)=>{
            state.movieKey=action.payload;

        },
        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload;
        },
    },
});

export const {addView,addMovieDetail,addMovieKey,addMovieDetails}=viewSlice.actions;
export default viewSlice.reducer;


