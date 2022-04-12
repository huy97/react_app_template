import authSaga from "containers/Auth/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([authSaga()]);
}

