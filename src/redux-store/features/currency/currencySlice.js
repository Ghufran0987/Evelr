import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { currencies } from "../../../utils/api-method";
const currencySlice = createSlice({
    name: 'currency',
    initialState: {
      items: [],
      isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllCurrency.pending, (state) => {
          state.isLoading = true; // Remove the comma after true
        })
        .addCase(getAllCurrency.fulfilled, (state, {payload}) => {
        //   console.log("Data Payload=>",payload.response.data)  
          state.items = payload.response.data; // Use action.payload directly, remove the curly braces around payload
          state.isLoading = false; // Remove the comma after false
        });
    }
  });
  

export const getAllCurrency=createAsyncThunk('getAllCurrencies',async (_, { rejectWithValue }) => {
    try {
      // Your asynchronous logic goes here
      // For example, fetching data from an API
     const response=await currencies.getAll();
      // If the response is successful, return the data
      return response.data;
    } catch (error) {
      // If an error occurs during the asynchronous operation, reject with the error message
      return rejectWithValue(error.message);
    }
  }

)
export default currencySlice.reducer;