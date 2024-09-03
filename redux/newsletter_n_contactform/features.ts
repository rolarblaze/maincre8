import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { AxiosError } from "axios";
import { FormResponse } from "./interface";

// Subscribe to newsletter
export const subscribeToNewsletter = createAsyncThunk<
  FormResponse,
  { email: string },
  { rejectValue: { errorMessage: string } }
>("newsletter/subscribe", async ({ email }, { rejectWithValue }) => {
  try {
    const response = await api.post("newsletter/subscribe", { email });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.data && error.response.data.detail) {
        return rejectWithValue({ errorMessage: error.response.data.detail });
      }
    }
    const errorMessage = handleAxiosError(error);
    return rejectWithValue({ errorMessage });
  }
});

// Send Contact message
export const submitContactForm = createAsyncThunk<
  FormResponse,
  {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    message: string;
  },
  { rejectValue: { errorMessage: string } }
>("contacts/contact-us", async (contactData, { rejectWithValue }) => {
  try {
    const response = await api.post("contacts/contact-us", contactData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.data && error.response.data.detail) {
        return rejectWithValue({ errorMessage: error.response.data.detail });
      }
    }
    const errorMessage = handleAxiosError(error);
    return rejectWithValue({ errorMessage });
  }
});
