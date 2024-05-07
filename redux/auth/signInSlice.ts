import { createSlice } from "@reduxjs/toolkit";
import { signIn, signInWithGoogle } from "./thunkAction";

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
interface SignInState {
  loading: LoadingState;
  loggedIn: boolean;
  googleSignIn: LoadingState;
}

// Define the initial state
const initialState: SignInState = {
  loading: initialLoadingState,
  loggedIn: false,
  googleSignIn: initialLoadingState,
};

// Create the auth slice
const signInSlice = createSlice({
  name: "signIn",
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
      .addCase(signInWithGoogle.pending, (state) => {
        state.googleSignIn = { status: "loading" };
      })
      .addCase(signInWithGoogle.fulfilled, (state) => {
        state.googleSignIn = { status: "success" };
        state.loggedIn = true; // Assuming Google sign-in also logs in the user
      })
      .addCase(signInWithGoogle.rejected, (state: any, action: any) => {
        state.googleSignIn = { status: "failure", error: action?.payload.message };
      });
  },
});

export const SignInReducer = signInSlice.reducer;
