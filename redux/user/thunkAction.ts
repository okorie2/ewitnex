import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config/api';
import { useAxios } from 'utitlities/hooks/useAxios';
import { ILoadUser, IUserDetails } from 'types/user';

export const loadUser = createAsyncThunk('user/loadUser', async (data: string, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/load-user`,
            method: 'get',
        });

        const userData:ILoadUser = response.data;
        localStorage.setItem('user', JSON.stringify(userData.user));
        return userData.user
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

        const userData:ILoadUser = response.data;
        console.log(userData)
        return response.data.user
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

export const deleteUserById = createAsyncThunk('user/getUserById', async (data: string, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/delete-user/${data}`,
            method: 'get',
        });

        // return response.data.user
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