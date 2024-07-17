import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import GPTReducer from "./GPTSlice"
import configReducer from "./configSlice"
import viewReducer from "./viewSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesReducer,
    GPT:GPTReducer,
    config:configReducer,
    view:viewReducer,
  },
});

export default appStore;
