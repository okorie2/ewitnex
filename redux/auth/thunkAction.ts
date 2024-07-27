import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config/api';
import { useAxios } from 'utitlities/hooks/useAxios';
import { ISignInRes, ISignUpRes } from 'types/user';
import { IFormData } from 'pages/auth/signup/form';
import { ISignInFormData } from 'pages/auth/signin/form';
import { setCookie } from "nookies";
import { useGoogleLogin } from '@react-oauth/google';

// Define the response type for the API call
interface ChangePasswordResponse {
    success: boolean;
    message?: string;
}

export const signUp = createAsyncThunk('auth/signup', async (data: IFormData, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/auth/signup`,
            method: 'POST',
            data: data,
        });

        const signUpData: any = response.data.data;
        localStorage.setItem('user', JSON.stringify(signUpData));
        sessionStorage.setItem('token', signUpData.token);
        setCookie(null, 'auth', signUpData.token, {
            path: '/',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60, // 24 hours
        });
        return signUpData;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else {
            return thunkAPI.rejectWithValue(error);
        }
    }
});

export const signUpWithGoogle = createAsyncThunk(
    'auth/signupWithGoogle',
    async (tokenResponse: any, thunkAPI) => {
        try {
            // Call the backend API to sign up with Google
            const response = await axios.post(`${config.API_BASE_URL}/auth/signup/google`, {
                accessToken: tokenResponse?.access_token,
            });

            // Handle the response as needed
            // For example, you can store the user data in the state or local storage
            const signUpData = response.data;

            localStorage.setItem('user', JSON.stringify(signUpData));
            sessionStorage.setItem('token', signUpData.token);
            setCookie(null, 'auth', signUpData.token, {
                path: '/',
                sameSite: 'strict',
                maxAge: 24 * 60 * 60, // 24 hours
            });

            return signUpData;
        } catch (error: any) {
            // Check if the error has a response property before accessing its data
            if (error.response) {
                // Return the error response data
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                // Return the error message as a string
                return thunkAPI.rejectWithValue('An error occurred during sign-up.');
            }
        }
    }
);

export const signIn = createAsyncThunk('auth/signin', async (data: ISignInFormData, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/auth/signin`,
            method: 'post',
            data: data,
        });
        const signInData: ISignInRes = response.data.data;
        sessionStorage.setItem('token', response.data?.token);
        localStorage.setItem('user', JSON.stringify(signInData));
        setCookie(null, "auth", response.data?.token, {
            path: "/",
            sameSite: "strict",
            maxAge: 24 * 60 * 60,
        });
        return signInData;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else {
            return thunkAPI.rejectWithValue(error);
        }
    }
});

export const signInWithGoogle = createAsyncThunk(
    'auth/signInWithGoogle',
    async (tokenResponse: any, thunkAPI) => {
        try {
            // Call the backend API to sign up with Google
            const response = await axios.post(`${config.API_BASE_URL}/auth/signin/google`, {
                accessToken: tokenResponse.access_token,
            });

            // Handle the response as needed
            // For example, you can store the user data in the state or local storage
            const signUpData = response.data;

            localStorage.setItem('user', JSON.stringify(signUpData));
            sessionStorage.setItem('token', signUpData.token);
            setCookie(null, 'auth', signUpData.token, {
                path: '/',
                sameSite: 'strict',
                maxAge: 24 * 60 * 60, // 24 hours
            });

            return signUpData;
        } catch (error: any) {
            // Check if the error has a response property before accessing its data
            if (error.response) {
                // Return the error response data
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                // Return the error message as a string
                return thunkAPI.rejectWithValue('An error occurred during sign-in.');
            }
        }
    }
);

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (data: { identifier: string }, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/auth/forgot_password`,
            method: 'post',
            data
        });

        const forgotPasswordData = response.data.data;
        return forgotPasswordData
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else {
            return thunkAPI.rejectWithValue(error);
        }
    }
})

export const resetPassword = createAsyncThunk('auth/resetPassword', async (data: { newPassword: string }, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/auth/reset_password`,
            method: 'post',
            data
        });

        const forgotPasswordData = response.data.data;
        return forgotPasswordData
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else {
            return thunkAPI.rejectWithValue(error);
        }
    }
})

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async (data: { pin: string, email: string }, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/auth/verify_otp`,
            method: 'post',
            data
        });

        const verifyOTPdata = response.data.data;
        // localSto
        return verifyOTPdata
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else {
            return thunkAPI.rejectWithValue(error);
        }
    }
})

export const logout = createAsyncThunk('auth/logout', async (data: string, thunkAPI) => {
    try {
        const response = await useAxios({
            url: `${config.API_BASE_URL}/auth/logout`,
            method: 'get',
        });

        return response.data.message;

    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else {
            return thunkAPI.rejectWithValue(error);
        }
    }
});