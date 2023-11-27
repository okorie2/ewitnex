import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './thunkAction';
import { IUserDetails } from 'types/user';

interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
}
const initialState: IState = {
    loading: 'idle',
};
const updateUserSlice = createSlice({
    name: 'updateUser',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(updateUser.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(updateUser.fulfilled, (state, action) => {
            return { ...state, loading: 'successful' };
            // Add user to the state array
        });
        builder.addCase(updateUser.rejected, (state) => {
            return { ...state, loading: 'failed' };

        });
    },
});

export const UpdateUserReducer = updateUserSlice.reducer;
