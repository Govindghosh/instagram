import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    addPost: (state, action) => {
      state.userProfile.posts = [action.payload.id, ...state.userProfile.posts];
    },
    deletePost: (state, action) => {
      state.userProfile.posts = state.userProfile.posts.filter((id) => id !== action.payload);
    },
  },
});

export const { setUserProfile, addPost, deletePost } = userProfileSlice.actions;
export const userProfileReducer = userProfileSlice.reducer;

