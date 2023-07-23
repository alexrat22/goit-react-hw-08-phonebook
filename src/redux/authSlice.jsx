import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { registerContact, logIn, logOut, fetchCurrentUser } from './operations';

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

    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
