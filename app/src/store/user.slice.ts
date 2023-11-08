import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  role: '',
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isAuth = true;
    },
    setLogout: (state) => {
      state.id = '';
      state.email = '';
      state.role = '';
      state.isAuth = false;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
