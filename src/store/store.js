import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userProfileSlice from "./userProfileSlice";
//import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userProfile: userProfileSlice,
    // posts: postSlice,
  },
});

export default store;
