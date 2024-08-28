import { AsyncThunk } from "@reduxjs/toolkit";

export interface FormState {
  message: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface FormResponse {
  detail: string;
}

export interface CreateFormSliceOptions<ThunkPayload, ThunkResponse> {
  name: string;
  asyncThunk: AsyncThunk<
    ThunkResponse,
    ThunkPayload,
    { rejectValue: { errorMessage: string } }
  >;
}
