import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
