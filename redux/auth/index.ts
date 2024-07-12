import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    signUpIndividual,
    signUpBusiness,
} from "./features";
import { User } from "./interface";
import {
    removeUserTokenCookie,
    setUserTokenCookie,
} from "@/utils/helpers/auth/cookieUtility";


//define the interface for all the states that authslice is going to be using
export interface AuthSliceState {
    isAuthenticated: boolean;
    user: User;
    isLoading: boolean;
    isLoadingUser?: boolean;
    profile: User;
    otpMessage: string | null;
}

const initialState: AuthSliceState = {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    isLoadingUser: true,
    profile: {},
    otpMessage: null,

};

//create the slice
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


    // Redux HTTP auto reducers
    extraReducers: (builder) => {
        builder
            // Signup individual
            .addCase(signUpIndividual.pending, (state: AuthSliceState) => {
                state.isLoading = true;
            })
            .addCase(signUpIndividual.fulfilled, (state: AuthSliceState, action: PayloadAction<any>) => {
                const { otp, message } = action.payload;
                state.otpMessage = message;
                state.isLoading = false;
            })
            .addCase(signUpIndividual.rejected, (state: AuthSliceState) => {
                state.isLoading = false;
            })

            // Signup business
            .addCase(signUpBusiness.pending, (state: AuthSliceState) => {
                state.isLoading = true;
            })
            .addCase(signUpBusiness.fulfilled, (state: AuthSliceState, action: PayloadAction<any>) => {
                const { otp, message } = action.payload;
                state.otpMessage = message;
                state.isLoading = false;
            })
            .addCase(signUpBusiness.rejected, (state: AuthSliceState) => {
                state.isLoading = false;
            });
    },
});

export default AuthSlice.reducer;

export const { signOut } = AuthSlice.actions;
