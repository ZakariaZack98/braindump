import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "../../api/getPosts"

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  error: null,
}

export const fetchPosts = createAsyncThunk('/posts/fetch', async () => {
  return await getPosts()
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = true;
      state.error = false;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    })
    .addCase(fetchPosts.rejected, (state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    })
  }
})

export default postSlice.reducer;