import { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     status: false,
//     userData: null
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//         state.status = true;
//         state.userData = action.payload.userData;
//     },
//     logout: (state) => {
//         state.status = false;
//         state.userData = null;
//     },
//   }
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

// authSlice.js

const initialState = {
  user: JSON.parse(localStorage.getItem("user-info")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user-info", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user-info");
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user-info", JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
