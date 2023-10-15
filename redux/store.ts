import { configureStore, ThunkDispatch, Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();