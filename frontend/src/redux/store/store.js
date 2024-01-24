import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';

export const store = configureStore({
    redux : {
        user : userSlice,
    },
})