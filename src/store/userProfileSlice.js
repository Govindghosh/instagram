import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userProfile: null,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    addPost: (state, action) => {
      if (state.userProfile) {
        state.userProfile.posts = [
          action.payload.id,
          ...state.userProfile.posts,
        ];
      }
    },
    deletePost: (state, action) => {
      if (state.userProfile) {
        state.userProfile.posts = state.userProfile.posts.filter(
          (id) => id !== action.payload
        );
      }
    },
  },
});

export const { setUserProfile, addPost, deletePost } = userProfileSlice.actions;
export default userProfileSlice.reducer;
