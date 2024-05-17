import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    open: false,
    message: "",
    type: "success",
    loader: false
  },
  reducers: {
    isSuccess: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = "success";
    },
    isError: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = "error";
    },
    isHideNotification: (state, action) => {
      state.open = false;
      state.message = "";
      state.type = "success";
    },
    isLoadingStarted: (state, action) => {
      state.loader = true;
    },
    isLoadingStopped: (state, action) => {
      state.loader = false;
    }
  }
});
export const {
  isSuccess,
  isError,
  isHideNotification,
  isLoadingStarted,
  isLoadingStopped
} = notificationSlice.actions;
export default notificationSlice.reducer;
