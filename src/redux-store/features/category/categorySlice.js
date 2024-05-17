import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { category } from "../../../utils/api-method";

export const getAllCategory = createAsyncThunk("post/getAllCategory", async () => {
  const response = await category.getAll();
  return response.response.data; // Adjust this line to return the correct nested data
});



const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    items: [],
    isCategoryLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getAllCategory.pending, (state) => {
        state.isCategoryLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, { payload }) => {
        state.items=payload
        state.isPostLoading = false;
      })
      .addCase(getAllCategory.rejected, (state, { payload }) => {
        state.error = payload;
        state.isCategoryLoading = false;
      });
  },
});

// export const { rest_post_detail } = postSlice.actions;
export default categorySlice.reducer;
