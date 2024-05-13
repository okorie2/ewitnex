import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updatePassword } from "./thunkAction";

interface updatePasswordState {
    loading: "idle" | "loading" | "successful" | "failed";
    error: string | null;
}

const initialState: updatePasswordState = {
    loading: "idle",
    error: null,
};

const updatePasswordSlice = createSlice({
    name: "updatePassword",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updatePassword.pending, (state) => {
                state.loading = "loading";
                state.error = null;
            })
            .addCase(updatePassword.fulfilled, (state) => {
                state.loading = "successful";
                state.error = null;
            })
            .addCase(updatePassword.rejected, (state, action: any) => {
                const error: any = action.error ? action.payload?.message : 'Server error';
                state.loading = "failed";
                state.error = error;
            });
    },
});

// Export the reducer
export const UpdatePasswordReducer = updatePasswordSlice.reducer;