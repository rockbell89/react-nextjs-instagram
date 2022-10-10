import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import loggerMiddleware from "../middlewares/looger";
import logger from "redux-logger";

// import rootReducer from "./modules";
import counter from "./modules/counter";
import todos from "./modules/todos";

const store = (context) =>
  configureStore({
    reducer: {
      // update combineReducers leagcy
      counter,
      todos,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== "production",
});
