import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addComment: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            comments: [...post.comments, action.payload.comment],
          };
        }
        return post;
      });
    },
  },
});

export const { createPost, deletePost, setPosts, addComment } = postSlice.actions;
export default postSlice.reducer;

