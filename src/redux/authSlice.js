import { createSlice } from '@reduxjs/toolkit';
import { registerContact, logIn, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const onPending = state => {
  state.isLoading = true;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerContact.pending]: onPending,
    [registerContact.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registerContact.rejected]: onRejected,

    [logIn.pending]: onPending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: onRejected,

    [logOut.pending]: onPending,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: onRejected,
  },
});

export default authSlice.reducer;
