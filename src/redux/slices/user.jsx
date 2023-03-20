import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // name: '',
  // email: '',
  // role: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    removeToken: (state) => {
      state.token = '';
    },
    // changeUser: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    //   state.role = action.payload.role;
    // },
  },
});

export const { setToken, removeToken } = userSlice.actions;
export default userSlice.reducer;
