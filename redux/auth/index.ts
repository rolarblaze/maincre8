import { removeUserTokenCookie, getUserTokenCookie, setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  forgotPassword,
  loginUser,
  resendVerificationCode,
  resetPassword,
  signUpBusiness,
  signUpIndividual,
  updateInfo,
  verifyUser,
  getUserProfile,
  renewRefreshToken
} from "./features";
import { User } from "./interface";

export interface AuthSliceState {
  isAuthenticated: boolean;
  user: User;
  isLoading: boolean;
  isLoadingProfile: boolean;
  profile: User;
  otpMessage: string | null;
}

const initialState: AuthSliceState = {
  isAuthenticated: !!getUserTokenCookie(),
  user: {},
  isLoading: false,
  isLoadingProfile: true,
  profile: {},
  otpMessage: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state: AuthSliceState) => {
      removeUserTokenCookie();
      state.isAuthenticated = false;
      state.user = {};
      state.profile = {};
      state.otpMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup individual
      .addCase(signUpIndividual.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        signUpIndividual.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const { otp, message } = action.payload;
          state.otpMessage = message;
          state.isLoading = false;
        }
      )
      .addCase(signUpIndividual.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })
      // Signup business
      .addCase(signUpBusiness.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        signUpBusiness.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const { otp, message } = action.payload;
          state.otpMessage = message;
          state.isLoading = false;
        }
      )
      .addCase(signUpBusiness.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })
      // Resend verification code
      .addCase(resendVerificationCode.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        resendVerificationCode.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const { message } = action.payload;
          state.otpMessage = message;
          state.isLoading = false;
        }
      )
      .addCase(resendVerificationCode.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Verify user
      .addCase(verifyUser.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        verifyUser.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          state.isAuthenticated = true;
          state.isLoading = false;
        }
      )
      .addCase(verifyUser.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Login user
      .addCase(loginUser.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const user = action.payload;
          state.user = user;
          state.isAuthenticated = true;
          state.isLoading = false;
        }
      )
      .addCase(loginUser.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Forgot password
      .addCase(forgotPassword.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        forgotPassword.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const { message } = action.payload;
          state.otpMessage = message;
          state.isLoading = false;
        }
      )
      .addCase(forgotPassword.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Reset password
      .addCase(resetPassword.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        resetPassword.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          state.isLoading = false;
        }
      )
      .addCase(resetPassword.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Renew refresh token
      .addCase(renewRefreshToken.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        renewRefreshToken.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const { access_token } = action.payload;
          setUserTokenCookie(access_token);
          state.isAuthenticated = true;
          state.isLoading = false;
        }
      )
      .addCase(renewRefreshToken.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
        removeUserTokenCookie();
        state.isAuthenticated = false;
        state.user = {};
        state.profile = {};
      })

      // Update user info
      .addCase(updateInfo.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        updateInfo.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          state.profile = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(updateInfo.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Fetch user profile
      .addCase(getUserProfile.pending, (state: AuthSliceState) => {
        state.isLoadingProfile = true;
      })
      .addCase(
        getUserProfile.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          state.profile = action.payload;
          state.isLoadingProfile = false;
        }
      )
      .addCase(getUserProfile.rejected, (state: AuthSliceState) => {
        state.isLoadingProfile = false;
        removeUserTokenCookie();
        state.isAuthenticated = false;
        state.user = {};
        state.profile = {};
      });
  },
});

export default AuthSlice.reducer;

export const { signOut } = AuthSlice.actions;
