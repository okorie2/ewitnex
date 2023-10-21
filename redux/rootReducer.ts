import { combineReducers } from '@reduxjs/toolkit';
import { SignUpReducer } from './auth/signUpSlice';
import { SignInReducer } from './auth/signInSlice';
import { LogoutReducer } from './auth/logoutSlice';
import { UserReducer } from './user/userSlice';
import { GetUserReducer } from './user/getUserByIdSlice';
import { UpdatePasswordReducer } from './settings/updatePasswordSlice';
import { DeleteUserReducer } from './settings/deleteUserByIdSlice';


export const rootReducer = combineReducers({
    signUp: SignUpReducer,
    signIn: SignInReducer,
    logout: LogoutReducer,
    user: UserReducer,
    getUserById: GetUserReducer,
    deleteUserById: DeleteUserReducer,
    updatePassword: UpdatePasswordReducer,
})
