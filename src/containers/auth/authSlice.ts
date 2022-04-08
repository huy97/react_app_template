import { RootState } from "../../store/index";
import { createSlice } from "@reduxjs/toolkit";

import { CognitoUserAttribute } from "amazon-cognito-identity-js";

interface UserData {
  id: string;
  username: string;
  attributes: CognitoUserAttribute;
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

export const { setUserInfo } = authSlice.actions;

export const selectUserSelector = (state: RootState) => state?.auth?.user;

export default authSlice.reducer;
