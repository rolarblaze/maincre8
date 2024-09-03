import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { submitContactForm, subscribeToNewsletter } from "./features";
import { CreateFormSliceOptions, FormState } from "./interface";

// Reusable function to create a slice
export function createFormSlice<
  ThunkPayload,
  ThunkResponse extends { detail: string }
>({ name, asyncThunk }: CreateFormSliceOptions<ThunkPayload, ThunkResponse>) {
  const initialState: FormState = {
    message: null,
    isLoading: false,
    error: null,
  };

  return createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(asyncThunk.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(
          asyncThunk.fulfilled,
          (state, action: PayloadAction<ThunkResponse>) => {
            state.message = action.payload.detail;
            state.isLoading = false;
          }
        )
        .addCase(asyncThunk.rejected, (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          state.isLoading = false;
        });
    },
  });
}

// News Letter slice
const newsletterSlice = createFormSlice({
  name: "newsletter",
  asyncThunk: subscribeToNewsletter,
});

export const contactFormSlice = createFormSlice({
  name: "contactForm",
  asyncThunk: submitContactForm,
});

export const newsletterReducer = newsletterSlice.reducer;
export const contactFormReducer = contactFormSlice.reducer;
