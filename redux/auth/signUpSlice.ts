import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUpWithGoogle } from "./thunkAction";

// Define types for loading status and error
type LoadingStatus = "idle" | "loading" | "success" | "failure";
interface LoadingState {
    status: LoadingStatus;
    error?: string;
}

// Define the initial loading state
const initialLoadingState: LoadingState = {
    status: "idle",
    error: undefined,
};

// Define the initial state interface
interface SignUpState {
    loading: LoadingState;
    loggedIn: boolean;
    googleSignUp: LoadingState;
}

// Define the initial state
const initialState: SignUpState = {
    loading: initialLoadingState,
    loggedIn: false,
    googleSignUp: initialLoadingState,
};

// Create the auth slice
const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Reducers for regular sign-in
            .addCase(signIn.pending, (state) => {
                state.loading = { status: "loading" };
            })
            .addCase(signIn.fulfilled, (state) => {
                state.loading = { status: "success" };
                state.loggedIn = true;
            })
            .addCase(signIn.rejected, (state: any, action: any) => {
                state.loading = { status: "failure", error: action.payload.message };
            })
            // Reducers for sign-in with Google
            .addCase(signUpWithGoogle.pending, (state) => {
                state.googleSignUp = { status: "loading" };
            })
            .addCase(signUpWithGoogle.fulfilled, (state) => {
                state.googleSignUp = { status: "success" };
                state.loggedIn = true; // Assuming Google sign-in also logs in the user
            })
            .addCase(signUpWithGoogle.rejected, (state: any, action: any) => {
                state.googleSignUp = { status: "failure", error: action?.payload ? action?.payload.message : '' };
            });
    },
});

export const SignUpReducer = signUpSlice.reducer;
