import { createSlice } from '@reduxjs/toolkit';
import { getUserById } from './thunkAction';
import { IUserDetails } from 'types/user';

interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
    fetchedUser: IUserDetails
}
const initialState: IState = {
    loading: 'idle',
    fetchedUser:  <IUserDetails>{}
};
const GetUserSlice = createSlice({
    name: 'getUserById',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUserById.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(getUserById.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', fetchedUser: action.payload };
            // Add user to the state array
        });
        builder.addCase(getUserById.rejected, (state) => {
            return { ...state, loading: 'failed' };

        });
    },
});

export const GetUserReducer = GetUserSlice.reducer;
