import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/authSlice";
import { noteReducer } from "./slice/noteSlice";
// import { settingsReducer } from "./slice/settingsSlice";
// import { financeReducer } from "./slice/financeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    note: noteReducer,
    // settings: settingsReducer,
    // finance: financeReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
