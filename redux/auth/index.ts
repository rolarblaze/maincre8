import {
  removeUserTokenCookie,
  getUserTokenCookie,
  setUserTokenCookie,
} from "@/utils/helpers/auth/cookieUtility";
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
  renewRefreshToken,
  signUpIndividualByGoogle,
  signUpBusinessByGoogle,
  loginWithGoogle,
  uploadProfilePhoto,
  fetchActivityStatistics,
  updatePassword,
} from "./features";
import { User } from "./interface";
import { Transaction } from "../shop/interface";

export interface AuthSliceState {
  isAuthenticated: boolean;
  user: User;
  isLoading: boolean;
  isLoadingProfile: boolean;
  profile: {
    business_name?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    transactions: Transaction[];
    user: User;
  };
  otpMessage: string | null;
}

const initialState: AuthSliceState = {
  isAuthenticated: !!getUserTokenCookie(),
  user: {
    transactions: [],
  },
  isLoading: false,
  isLoadingProfile: true,
  profile: {
    business_name: null,
    first_name: null,
    last_name: null,
    transactions: [],
    user: {
      transactions: [],
    },
  },
  otpMessage: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state: AuthSliceState) => {
      removeUserTokenCookie();
      state.isAuthenticated = false;
      state.user = {
        transactions: [],
      };
      state.profile = {
        business_name: null,
        first_name: null,
        last_name: null,
        transactions: [],
        user: {
          transactions: [],
        },
      };

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
          state.otpMessage = otp;
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

      // update password
      .addCase(updatePassword.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        updatePassword.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          state.isLoading = false;
        }
      )
      .addCase(updatePassword.rejected, (state: AuthSliceState) => {
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
        state.user = {
          transactions: [],
        };
        state.profile = {
          business_name: null,
          first_name: null,
          last_name: null,
          transactions: [],
          user: {
            transactions: [],
          },
        };
      })


      // Google Signup individual
      .addCase(signUpIndividualByGoogle.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        signUpIndividualByGoogle.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const { access_token } = action.payload;
          setUserTokenCookie(access_token);
          state.isAuthenticated = true;
          state.isLoading = false;
        }
      )
      .addCase(signUpIndividualByGoogle.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Google Signup business
      .addCase(signUpBusinessByGoogle.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        signUpBusinessByGoogle.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const { access_token } = action.payload;
          setUserTokenCookie(access_token);
          state.isAuthenticated = true;
          state.isLoading = false;
        }
      )
      .addCase(signUpBusinessByGoogle.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      })

      // Google Login
      .addCase(loginWithGoogle.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        loginWithGoogle.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          const user = action.payload;
          state.user = user;
          state.isAuthenticated = true;
          state.isLoading = false;
        }
      )
      .addCase(loginWithGoogle.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
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

      //upload user profile photo
      .addCase(uploadProfilePhoto.fulfilled, (state, action: PayloadAction<any>) => {
        if (state.profile && state.profile.user.profile) {
          state.profile.user.profile.profile_image_link = action.payload.file_link;
        }
        state.isLoading = false;
      })
      .addCase(uploadProfilePhoto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadProfilePhoto.rejected, (state) => {
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
        state.user = {
          transactions: [],
        };
        state.profile = {
          business_name: null,
          first_name: null,
          last_name: null,
          transactions: [],
          user: {
            transactions: [],
          },
        };
      })

      // Fetch activity statistics
      .addCase(fetchActivityStatistics.pending, (state: AuthSliceState) => {
        state.isLoading = true;
      })
      .addCase(
        fetchActivityStatistics.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          state.profile.user.activityStatistics = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchActivityStatistics.rejected, (state: AuthSliceState) => {
        state.isLoading = false;
      });
  },
});

export default AuthSlice.reducer;

export const { signOut } = AuthSlice.actions;
