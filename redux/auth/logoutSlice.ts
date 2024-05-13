import { createSlice } from '@reduxjs/toolkit';
import { logout } from './thunkAction';

interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
}

const initialState: IState = {
    loading: 'idle',
};

const logoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(logout.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = 'successful'
            })
            .addCase(logout.rejected, (state: any, action: any) => {
               state.loading = { status: "failure", error: action.payload.message };
            });
    },
});

export const LogoutReducer = logoutSlice.reducer;
