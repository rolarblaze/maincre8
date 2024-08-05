import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { AlertsSlice } from "./alerts";
import { AuthSlice } from "./auth";
import { briefReducer } from "./brief";
import { fileUploadReducer } from "./file";
import { getPackageReducer } from "./getPackage";
import newsletterReducer from "./newsletter";
import { shopReducer } from "./shop";

import customStorage from "@/utils/createStorage";

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
  alerts: AlertsSlice.reducer,
  shop: shopReducer,
  newsletter: newsletterReducer,
  fileUpload: fileUploadReducer,
  brief: briefReducer,
  getPackageDetails: getPackageReducer,
});

const persistConfig = {
  key: "root",
  storage: customStorage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
