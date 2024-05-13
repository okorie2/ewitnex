import { createSlice } from '@reduxjs/toolkit';
import { joinWaitlist } from './thunkAction'; // Import your joinWaitlist async thunk action
import { AxiosError } from 'axios';

interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
    error: string | null;
}

const initialState: IState = {
    loading: 'idle',
    error: null,
};

export const waitlistSlice = createSlice({
    name: 'waitlist',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(joinWaitlist.pending, (state) => {
            return { ...state, loading: 'loading', error: null };
        });

        builder.addCase(joinWaitlist.fulfilled, (state) => {
            return { ...state, loading: 'successful', error: null };
        });

        builder.addCase(joinWaitlist.rejected, (state, action: any) => {
            const error: any = action.error ? action.payload?.message : 'Server error';
            return { ...state, loading: 'failed', error };
        });
    },
});

export const WaitlistReducer = waitlistSlice.reducer;
