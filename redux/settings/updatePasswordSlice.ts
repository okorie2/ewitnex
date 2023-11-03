import { createSlice } from '@reduxjs/toolkit';
import { updatePassword } from './thunkAction';
interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
}
const initialState: IState = {
    loading: 'idle',
};
const updatePasswordSlice = createSlice({
    name: 'updatePassword',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(updatePassword.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(updatePassword.fulfilled, (state) => {
            return { ...state, loading: 'successful' };
        });
        builder.addCase(updatePassword.rejected, (state) => {
            return { ...state, loading: 'failed' };
        });
    },
});

export const UpdatePasswordReducer = updatePasswordSlice.reducer;
