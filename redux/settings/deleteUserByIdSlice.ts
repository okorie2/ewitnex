import { createSlice } from '@reduxjs/toolkit';
import { deleteUserById } from '../settings/thunkAction';

interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
}
const initialState: IState = {
    loading: 'idle',
};
const DeleteUserSlice = createSlice({
    name: 'getUserById',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(deleteUserById.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(deleteUserById.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', fetchedUser: action.payload };
            // Add user to the state array
        });
        builder.addCase(deleteUserById.rejected, (state) => {
            return { ...state, loading: 'failed' };

        });
    },
});

export const DeleteUserReducer = DeleteUserSlice.reducer;
