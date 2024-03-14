import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config/api';
import { useAxios } from 'utitlities/hooks/useAxios';
import { IJoinWaitlistFormData, IJoinWaitlistRes } from './../../fragments/waitlist';

export const joinWaitlist = createAsyncThunk(
    'wait_list',
    async (data: IJoinWaitlistFormData, thunkAPI) => {
        try {
            const response = await useAxios({
                url: `${config.API_BASE_URL}/wait_list`,
                method: 'POST',
                data,
            });

            return response.data.data as IJoinWaitlistRes;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const message = error.response.data as { error: string };
                console.log(message.error, "error message");
                localStorage.setItem('error', message.error);
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue(String(error));
            }
        }
    }
);
