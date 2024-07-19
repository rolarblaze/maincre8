import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { subscribeToNewsletter } from "./features";
import { NewsletterState, NewsletterResponse } from "./interface";

// Initial state for the newsletter slice
const initialState: NewsletterState = {
    message: null,
    isLoading: false,
    error: null,
};

// Create the newsletter slice
const newsletterSlice = createSlice({
    name: "newsletter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(subscribeToNewsletter.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(subscribeToNewsletter.fulfilled, (state, action: PayloadAction<NewsletterResponse>) => {
                state.message = action.payload.detail;
                state.isLoading = false;
            })
            .addCase(subscribeToNewsletter.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export default newsletterSlice.reducer;
