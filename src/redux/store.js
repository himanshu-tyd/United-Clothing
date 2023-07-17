import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export default store;
