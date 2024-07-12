"use client";
import React from "react";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import LoadingPage from "@/components/LoadingPage";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store} loading={<LoadingPage />}>
      
        {children}
     
    </Provider>
  );
}
