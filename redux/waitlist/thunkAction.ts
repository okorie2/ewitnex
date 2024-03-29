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
                console.log(error)
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error);
            }
        }
    }
);