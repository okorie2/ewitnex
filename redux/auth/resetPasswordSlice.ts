import { createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "./thunkAction";

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
interface ResetPasswordState {
    loading: LoadingState;
}

// Define the initial state
const initialState: ResetPasswordState = {
    loading: initialLoadingState,
};

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetPassword.pending, (state) => {
                state.loading = { status: "loading" };
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.loading = { status: "success" };
            })
            .addCase(resetPassword.rejected, (state: any, action: any) => {
                state.loading = { status: "failure", error: action.payload.message };
            })
    }
})

export const resetPasswordReducer = resetPasswordSlice.reducer