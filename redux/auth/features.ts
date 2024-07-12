import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import {  SignUpFormValues, User } from "./interface";


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
        console.log("individual reg:", response.data);
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
        console.log("business reg:", response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(handleAxiosError(error));
      }
    }
  );








