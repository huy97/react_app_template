import { createAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";

import { setUserInfo, setUserToken } from "./authSlice";

export const login = createAction("auth/login");
export const logout = createAction("auth/logout");

function* loginSaga(action: any) {
  yield localStorage.setItem("token", action.payload);
  yield put(setUserToken(action.payload));
}

function* logoutSaga() {
  yield localStorage.removeItem("token");
  yield put(setUserInfo(null));
  yield put(setUserToken(null));
}

export function* todoSaga() {
  yield takeLatest(logout, logoutSaga);
  yield takeLatest(login, loginSaga);
}
