import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AlertsSlice } from "./alerts";
import { AuthSlice } from "./auth";
import { briefReducer } from "./brief";
import { fileUploadReducer } from "./file";
import { getPackageReducer } from "./getPackage";
import { OrderSlice } from "./order";
import { tabsSlice } from "./legal";
import { PageDataSlice } from "./shop";

import { trackerReducer } from "./servicesTracker/tracker";
import servicesSlice from "./servicesTracker";
import serviceSlice from "./services";
import {
  contactFormReducer,
  newsletterReducer,
} from "./newsletter_n_contactform";
import cartReducer from "./cart";

import formSlice from "./myServices/index"

// configure the store with all reducers
export const store = configureStore({
  reducer: {
    // all your slice reducers goes here
    auth: AuthSlice.reducer,
    alerts: AlertsSlice.reducer,
    pageViewData: PageDataSlice.reducer,
    newsletter: newsletterReducer,
    fileUpload: fileUploadReducer,
    brief: briefReducer,
    getPackageDetails: getPackageReducer,
    order: OrderSlice.reducer,
    services: servicesSlice,
    tracker: trackerReducer,
    contactForm: contactFormReducer,
    tabs: tabsSlice.reducer,
    cart: cartReducer,
    service: serviceSlice,
    forms: formSlice
  },
});



// define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;