import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { country } from "../../../utils/api-method";
import { useDebugValue } from "react";
const countrySlice=createSlice({
    name:'country',
    initialState:{
        items:[],
        isLoading:false,
    },
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(getCountry.pending,(state,{payload})=>{

            state.isLoading=true
        })
        builders.addCase(getCountry.fulfilled,(state,{payload})=>{
            state.items=payload.response.data.countries
            state.isLoading=false
        })
    }
})

export const getCountry=createAsyncThunk('getCurrency',async()=>{

    const response=await country.getAll()
    return response;
})

export default countrySlice.reducer; 