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
        builder.addCase(logout.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(logout.fulfilled, (state) => {
            return { ...state, loading: 'successful' };
            // Add user to the state array
        });
        builder.addCase(logout.rejected, (state) => {
            return { ...state, loading: 'failed' };

            // Add user to the state array
        });
    },
});

export const LogoutReducer = logoutSlice.reducer;
