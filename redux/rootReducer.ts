import { combineReducers } from '@reduxjs/toolkit';
import { SignUpReducer } from './auth/signUpSlice';
import { SignInReducer } from './auth/signInSlice';
import { LogoutReducer } from './auth/logoutSlice';
import { UserReducer } from './user/userSlice';
import { GetUserReducer } from './user/getUserByIdSlice';
import { UpdatePasswordReducer } from './settings/updatePasswordSlice';
import { DeleteUserReducer } from './settings/deleteUserByIdSlice';
import { HostEventReducer } from './event/hostEventSlice';
import { EventReducer } from './event/eventSlice';
import { UpdateUserReducer } from './user/updateUserSlice';
import { WaitlistReducer } from './waitlist/joinWaitlist';


export const rootReducer = combineReducers({
    signUp: SignUpReducer,
    signIn: SignInReducer,
    logout: LogoutReducer,
    user: UserReducer,
    updateUser: UpdateUserReducer,
    getUserById: GetUserReducer,
    deleteUserById: DeleteUserReducer,
    updatePassword: UpdatePasswordReducer,
    hostEvent: HostEventReducer,
    event: EventReducer,
    joinWaitlist: WaitlistReducer
})

