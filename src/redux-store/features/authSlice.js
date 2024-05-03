import { createSlice } from '@reduxjs/toolkit';

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
    user_role: ''
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
    },
    logIn: (state, { payload }) => {
      state.token = payload.token;
      state.city = payload.city;
      state.user_role = payload.user_role;
      state.full_name = payload.full_name;
      state.email = payload.email;
      state.username = payload.username;
      state.country = payload.country;
      state.states = payload.states;
    }
  }
});

export const { logOut, logIn } = authSlice.actions;
export default authSlice.reducer;
