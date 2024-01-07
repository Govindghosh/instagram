import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: null,
};
const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.userProfile.posts = state.userProfile.posts.filter(
        (postId) => postId !== action.payload
      );
    },
  },
});
export const { setUserProfile, addPost, deletePost } = profileSlice.actions;
export default profileSlice.reducer;
