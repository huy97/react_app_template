import { RootState } from "../../store/index";
import { createAction, createSlice } from "@reduxjs/toolkit";

interface UserData {
  id: string;
  username: string;
  attributes: any;
  accessToken: string;
  idToken: string;
  refreshToken: string;
}
export interface AuthState {
  user?: UserData;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const logout = createAction("auth/logout");

export const { setUserInfo } = authSlice.actions;

export const selectUserSelector = (state: RootState) => state?.auth?.user;

export default authSlice.reducer;
