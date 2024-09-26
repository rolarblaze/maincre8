import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AlertsSlice } from "./alerts";
import { AuthSlice } from "./auth";
import { briefReducer } from "./brief";
import { fileUploadReducer } from "./file";
import { getPackageReducer } from "./getPackage";
import { OrderSlice } from "./order";
import servicesSlice from "./servicesTracker";
import { shopReducer } from "./shop";
import { trackerReducer } from "./servicesTracker/tracker";
import {
  contactFormReducer,
  newsletterReducer,
} from "./newsletter_n_contactform";

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
    getPackageDetails: getPackageReducer,
    order: OrderSlice.reducer,
    services: servicesSlice,
    tracker: trackerReducer,
    contactForm: contactFormReducer,
  },
});

// define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
