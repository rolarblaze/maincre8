import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import { SignUpFormValues, User } from "./interface";


// Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("login/user", { email, password });
      setUserTokenCookie(response.data.access_token); // Set the user token cookie
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);


// Signup individual users
export const signUpIndividual = createAsyncThunk(
  "auth/signUpIndividual",
  async (payload: SignUpFormValues, { rejectWithValue }) => {
    try {
      const response = await api.post("api/users/signup-individual", {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Signup business users
export const signUpBusiness = createAsyncThunk(
  "auth/signUpBusiness",
  async (payload: SignUpFormValues, { rejectWithValue }) => {
    try {
      const response = await api.post("api/users/signup-business", {
        business_name: payload.businessName,
        email: payload.email,
        password: payload.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Resend verification code
export const resendVerificationCode = createAsyncThunk(
  "auth/resendVerificationCode",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await api.post("api/users/resend-verification-otp", { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Verify user
export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async ({ otp, email }: { otp: string; email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("api/users/verify-user", { otp, email });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Forgot password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email, callback_url }: { email: string; callback_url: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("request-password-reset", { email, callback_url });
      // console.log("forgot password:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ code, password, confirm_password }: { code: string; password: string; confirm_password: string }, { rejectWithValue }) => {
    try {
      const response = await api.put("reset-password", { code, password, confirm_password });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);








