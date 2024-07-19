import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { AuthSlice } from "./auth";
import { AlertsSlice } from "./alerts";
import { shopReducer } from "./shop";
import newsletterReducer from "./newsletter";

// configure the store with all reducers
export const store = configureStore({
  reducer: {
    // all your slice reducers goes here
    auth: AuthSlice.reducer,
    alerts: AlertsSlice.reducer,
    shop: shopReducer,
    newsletter: newsletterReducer,
  },
});

export const persistor = persistStore(store);

// define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// create hooks for use in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;