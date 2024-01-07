import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userProfileReducer from "./userProfileSlice";
//import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userProfile: userProfileReducer,
    // posts: postSlice,
  },
});

export default store;
