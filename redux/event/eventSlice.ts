import { createSlice } from '@reduxjs/toolkit';
import { deleteEventById, getEventById } from './thunkAction';
interface IState {
    loading: 'failed' | 'loading' | 'successful' | 'idle';
}
const initialState: IState = {
    loading: 'idle',
};
const EventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getEventById.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(getEventById.fulfilled, (state) => {
            return { ...state, loading: 'successful'};
        });
        builder.addCase(getEventById.rejected, (state) => {
            return { ...state, loading: 'failed' };
        });
        builder.addCase(deleteEventById.pending, (state) => {
            return { ...state, loading: 'loading' };
        });

        builder.addCase(deleteEventById.fulfilled, (state) => {
            return { ...state, loading: 'successful'};
        });
        builder.addCase(deleteEventById.rejected, (state) => {
            return { ...state, loading: 'failed' };
        });
    },
});

export const EventReducer = EventSlice.reducer;
