import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config/api';
import { useAxios } from 'utitlities/hooks/useAxios';

export const updatePassword = createAsyncThunk('auth/changePassword', async (data: { newPassword: string }, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/auth/reset_password`,
            method: 'post',
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

export const deleteUserById = createAsyncThunk('user/getUserById', async (data: string, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/delete-account/${data}`,
            method: 'delete',
        });

        console.log(response.data.message)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const message = error.response.data as { error: string };
            console.log(message.error, "error message")
            return thunkAPI.rejectWithValue(error.message);
        } else {
            return thunkAPI.rejectWithValue(String(error));
        }
    }
});