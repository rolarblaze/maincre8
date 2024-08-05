import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


import { AlertsSlice } from "./alerts";
import { AuthSlice } from "./auth";
import { briefReducer } from "./brief";
import { fileUploadReducer } from "./file";
import newsletterReducer from "./newsletter";
import { shopReducer } from "./shop";

// configure the store with all reducers
export const store = configureStore({
  reducer: {
    // all your slice reducers goes here
    auth: AuthSlice.reducer,
    alerts: AlertsSlice.reducer,
    shop: shopReducer,
    newsletter: newsletterReducer,
    fileUpload: fileUploadReducer,
    brief: briefReducer,
  },
});



// define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// create hooks for use in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
