import api from "@/utils/axios/api";
import { setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpFormValues, UpdateInfo } from "./interface";

// Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("login/user", { email, password });
      setUserTokenCookie(response.data.access_token); // Set the user token cookie
      return response.data;
    } catch (error) {
      console.log(error);
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

export const renewRefreshToken = createAsyncThunk(
  "auth/renewRefreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.post("renew-refresh-token");
      setUserTokenCookie(response.data.access_token); // Set the new access token
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
      const response = await api.post("api/users/resend-verification-otp", {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Verify user
export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (
    { otp, email }: { otp: string; email: string },
    { rejectWithValue }
  ) => {
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
  async (
    { email, callback_url }: { email: string; callback_url: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("request-password-reset", {
        email,
        callback_url,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    {
      code,
      password,
      confirm_password,
    }: { code: string; password: string; confirm_password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.put("reset-password", {
        code,
        password,
        confirm_password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Fetch user profile
export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("user/get-profile-info");
      console.log("user Profile", response.data)
      return response.data;
    } catch (error) {
      console.log("Error fetching user profile:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);


// update user info
export const updateInfo = createAsyncThunk(
  "dashboard/updateProfile",
  async (payload: UpdateInfo, { rejectWithValue }) => {
    try {
      const response = await api.put("user/update-profile-info", {
        phone_number: payload.phone_number,
        country: payload.country,
        state: payload.state,
        address: payload.address,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
