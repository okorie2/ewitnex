import { createSlice } from '@reduxjs/toolkit';
import { joinWaitlist } from './thunkAction'; // Import your joinWaitlist async thunk action

interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
}

const initialState: IState = {
    loading: 'idle',
};

export const waitlistSlice = createSlice({
    name: 'waitlist',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(joinWaitlist.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(joinWaitlist.fulfilled, (state) => {
            return { ...state, loading: 'successful' };
            // You may update state here if necessary
        });

        builder.addCase(joinWaitlist.rejected, (state) => {
            return { ...state, loading: 'failed' };
            // You may handle errors or update state here if necessary
        });
    },
});

export const WaitlistReducer = waitlistSlice.reducer;
