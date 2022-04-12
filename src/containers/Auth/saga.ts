import { call, put, takeLatest } from "redux-saga/effects";
import { logout, setUserInfo } from "./authSlice";
import aws from "services/aws";

function* handleLogout(): any {
  try {
    yield call(aws.logout);
    yield put(setUserInfo(null));
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeLatest(logout, handleLogout);
}
