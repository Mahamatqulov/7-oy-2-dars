import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authReady: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {},
    authReadyAct: (state) => {
      state.authReady = true;
    },
  },
});

export const { login, logout, authReadyAct } = userSlice.actions;
export default userSlice.reducer;
