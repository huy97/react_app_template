import { RootState } from "./../../store/index";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  token?: string;
  user?: any;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfo, setUserToken } = authSlice.actions;

export const selectAuthSelector = (state: RootState) => state?.auth;

export default authSlice.reducer;
