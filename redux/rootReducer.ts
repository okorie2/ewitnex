import { combineReducers } from '@reduxjs/toolkit';
import { SignUpReducer } from './auth/signUpSlice';
import { SignInReducer } from './auth/signInSlice';


export const rootReducer = combineReducers({
    signUp: SignUpReducer,
    signIn: SignInReducer,
})

