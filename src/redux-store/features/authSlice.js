import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../utils/api-method';
export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    token: null,
    full_name: '',
    phone: '',
    country: '',
    states: '',
    city: '',
    email: '',
    username: '',
    user_type:'',
    user_role: '',
    user_info:[],
    isInfoLoaded:false
  },
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.full_name = '';
      state.phone = '';
      state.country = '';
      state.states = '';
      state.city = '';
      state.email = '';
      state.username = '';
      state.user_role = '';
      state.user_type='';
    },
    logIn: (state, { payload }) => {
      console.log("Payload In Store",payload)
      state.token = payload.token;
      state.city = payload.city;
      state.user_role = payload.user_role;
      state.user_type=payload.user_type;
      state.full_name = payload.full_name;
      state.email = payload.email;
      state.username = payload.username;
      state.country = payload.country;
      state.states = payload.states;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getUserInfo.pending,(state,{payload})=>{

      state.isInfoLoaded=true
    }).addCase(getUserInfo.fulfilled,(state,{payload})=>{
      state.user_info=payload.response.data.user
      state.isInfoLoaded=false
    })
  }
});

export const getUserInfo=createAsyncThunk("getUserInfo",async()=>{
  const response=await auth.getUser()
  console.log("Data",response)
  return response;
})

export const { logOut, logIn } = authSlice.actions;
export default authSlice.reducer;
