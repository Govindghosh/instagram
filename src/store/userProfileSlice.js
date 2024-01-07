import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: null,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload.userProfile;
    },
    addPost: (state, action) => {
      state.userProfile.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.userProfile.posts = state.userProfile.posts.filter(
        (postId) => postId !== action.payload
      );
    },
  },
});

export const { setUserProfile, addPost, deletePost } = userProfileSlice.actions;
export const selectUserProfile = (state) => state.userProfile.userProfile;
export default userProfileSlice.reducer;
