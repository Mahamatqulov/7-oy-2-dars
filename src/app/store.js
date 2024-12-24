import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../app/features/userSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredPaths: ["user.user"],
  //       ignoredActions: ["user/login"],
  //     },
  //   });
  // },
});
