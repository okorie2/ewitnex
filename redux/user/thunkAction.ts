import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config/api';
import { useAxios } from 'utitlities/hooks/useAxios';
import { ILoadUser, IUserDetails, ReqUpdateUser } from 'types/user';


export const loadUser = createAsyncThunk('user/loadUser', async (data:string, thunkAPI) => {
    try {
        const response = await useAxios({
        url: `${config.API_BASE_URL}/users/load-user`,
            method: 'get',
        });

        return response.data.data
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

export const updateUser = createAsyncThunk('user/updateUser', async (data: {userId:string, form: ReqUpdateUser}, thunkAPI) => {
    try {
        const response = await useAxios({
        url: `${config.API_BASE_URL}/users/update-user/${data.userId}`,
            method: 'put',
            data: data.form
        });

        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data.data
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

export const getUserById = createAsyncThunk('user/getUserById', async (data: string, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/user-details/${data}`,
            method: 'get',
        });
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

