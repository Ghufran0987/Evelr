import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../../../utils/api-method";

export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async (category_id = null, { rejectWithValue }) => {
    try {
      const response = await post.getAll(category_id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPostById = createAsyncThunk(
  "post/getPostById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await post.getById({ id });
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    items: [],
    isPostLoading: false,
    postDetails: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(getAllPost.fulfilled, (state, { payload }) => {
        state.items = payload.response.data.posts;
        state.isPostLoading = false;
      })
      .addCase(getAllPost.rejected, (state, { payload }) => {
        state.error = payload;
        state.isPostLoading = false;
      })
      .addCase(getPostById.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(getPostById.fulfilled, (state, { payload }) => {
        state.postDetails = payload.response.data;
        state.isPostLoading = false;
      })
      .addCase(getPostById.rejected, (state, { payload }) => {
        state.error = payload;
        state.isPostLoading = false;
      });
  },
});

// export const { rest_post_detail } = postSlice.actions;
export default postSlice.reducer;
