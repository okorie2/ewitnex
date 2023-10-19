import { createSlice } from '@reduxjs/toolkit';
import { loadUser } from './thunkAction';
import { IUserDetails } from 'types/user';

interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
    user: IUserDetails
}
const initialState: IState = {
    loading: 'idle',
    user:  <IUserDetails>{}
};
const UserSlice = createSlice({
    name: 'loadUser',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loadUser.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(loadUser.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', user: action.payload };
            // Add user to the state array
        });
        builder.addCase(loadUser.rejected, (state) => {
            return { ...state, loading: 'failed' };

        });
    },
});

export const UserReducer = UserSlice.reducer;
