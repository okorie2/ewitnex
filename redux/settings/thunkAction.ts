import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config/api';
import { useAxios } from 'utitlities/hooks/useAxios';
import { IUpdatePassword } from 'fragments/settings/changePassword';

export const updatePassword = createAsyncThunk('user/getUserById', async (data: IUpdatePassword, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/update-user-password`,
            method: 'put',
            data: data
        });
        console.log(response.data.message)
        return response.data.message
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const message = error.response.data as { error: string };
            console.log(message.error, "error message")
            localStorage.setItem('error', message.error)
            return thunkAPI.rejectWithValue(error.message);
        } else {
            return thunkAPI.rejectWithValue(String(error));
        }
    }
});