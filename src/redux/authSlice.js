import { createSlice } from '@reduxjs/toolkit';
import { registerContact } from './operations';

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
    [registerContact.fulfilled](state, action) {},
    [registerContact.rejected]: onRejected,
  },
});

export default authSlice.reducer;
