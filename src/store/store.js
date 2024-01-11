import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import profileSlice from "./profileSlice";
//import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userProfile: profileSlice,
    // posts: postSlice,
  },
});

export default store;
