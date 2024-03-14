import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config/api';
import { useAxios } from 'utitlities/hooks/useAxios';
import { ISignInRes, ISignUpRes } from 'types/user';
import { IFormData } from 'pages/auth/signup/form';
import { ISignInFormData } from 'pages/auth/signin/form';
import { setCookie } from "nookies";

export const signUp = createAsyncThunk('auth/signup', async (data: IFormData, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/create-user`,
            method: 'post',
            data: data,
        });

        const signUpData: ISignUpRes = response.data;
        localStorage.setItem('user', JSON.stringify(signUpData.data.user));
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const message = error.response.data as { error: string };
            console.log(message.error, "error message")
            localStorage.setItem('error', message.error )
            return thunkAPI.rejectWithValue(error.message);
        } else {
            return thunkAPI.rejectWithValue(String(error));
        }
    }
});

export const signIn = createAsyncThunk('auth/signin', async (data: ISignInFormData, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/login`,
            method: 'post',
            data: data,
        });
        const signInData: ISignInRes = response.data;
        sessionStorage.setItem('token', signInData.token);
        localStorage.setItem('user', JSON.stringify(signInData.user));
        setCookie(null, "auth", signInData.token, {
            path: "/",
            sameSite: "strict",
            maxAge: 24 * 60 * 60,
          });
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.log(error.response);
            const message = error.response.data as {error:string};
            localStorage.setItem('error', message.error)
            return thunkAPI.rejectWithValue(error.message);
        } else {
            return thunkAPI.rejectWithValue(String(error));
        }
    }
});

export const logout = createAsyncThunk('auth/logout', async (data:string, thunkAPI) => {
    try{
        const response = await useAxios({
            url: `${config.API_BASE_URL}/users/logout`,
            method: 'get',
        });

        return response.data.message;

    }catch(error){
        if (axios.isAxiosError(error) && error.response) {
            console.log(error.response);
            const message = error.response.data as {error:string};
            console.log('error', message.error)
            return thunkAPI.rejectWithValue(error.message);
        } else {
            return thunkAPI.rejectWithValue(String(error));
        }
    }
})
