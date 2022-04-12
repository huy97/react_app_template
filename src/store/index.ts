import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "containers/Auth/authSlice";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
