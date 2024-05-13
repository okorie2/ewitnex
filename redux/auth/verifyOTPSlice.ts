import { createSlice } from "@reduxjs/toolkit";
import { verifyOTP } from "./thunkAction";

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
interface verifyOTPState {
    loading: LoadingState;
}

// Define the initial state
const initialState: verifyOTPState = {
    loading: initialLoadingState,
};

const verifyOTPSlice = createSlice({
    name: 'verifyOTP',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(verifyOTP.pending, (state) => {
                state.loading = { status: "loading" };
            })
            .addCase(verifyOTP.fulfilled, (state) => {
                state.loading = { status: "success" };
            })
            .addCase(verifyOTP.rejected, (state: any, action: any) => {
                state.loading = { status: "failure", error: action.payload.message };
            })
    }
})

export const verifyOTPReducer = verifyOTPSlice.reducer