import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user-info")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    setUser: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
