import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "./thunkAction";

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
interface ForgotPasswordState {
  loading: LoadingState;
}

// Define the initial state
const initialState: ForgotPasswordState = {
  loading: initialLoadingState,
};

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(forgotPassword.pending, (state) => {
                state.loading = { status: "loading" };
            })
             .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = { status: "success" };
            })
             .addCase(forgotPassword.rejected, (state: any, action: any) => {
                state.loading = { status: "failure", error: action.payload.message };
            })
    }
})

export const forgotPasswordReducer = forgotPasswordSlice.reducer