import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getServices, getPackages } from "./features"; // Import your async actions
import { ServicesState, Service, Package } from "./interface";

const initialState: ServicesState = {
    services: [],
    packages: [],
    isLoading: false,
    error: null,
};

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle getServices action
        builder
            .addCase(getServices.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getServices.fulfilled, (state, action: PayloadAction<Service[]>) => {
                state.isLoading = false;
                state.services = action.payload;
            })
            .addCase(getServices.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });

        // Handle getPackages action
        builder
            .addCase(getPackages.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPackages.fulfilled, (state, action: PayloadAction<Package[]>) => {
                state.isLoading = false;
                state.packages = action.payload;
            })
            .addCase(getPackages.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default serviceSlice.reducer;
