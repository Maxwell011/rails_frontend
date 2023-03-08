import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import messageSlice from "./messages/messages";

const rootReducer = {
  reducer: {
    messages: messageSlice,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
