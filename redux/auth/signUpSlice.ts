import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './thunkAction';
interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
}
const initialState: IState = {
    loading: 'idle',
};
const signUpSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(signUp.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(signUp.fulfilled, (state) => {
            return { ...state, loading: 'successful' };
            // Add user to the state array
        });
        builder.addCase(signUp.rejected, (state) => {
            return { ...state, loading: 'failed' };

            // Add user to the state array
        });
    },
});

export const SignUpReducer = signUpSlice.reducer;
