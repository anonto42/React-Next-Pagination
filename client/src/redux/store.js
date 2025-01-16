import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducer/auth';
import userSlice from './reducer/user';
import api from './api/api';

const store = configureStore({
    reducer:{
        [ authSlice.name ] : authSlice.reducer,
        [ userSlice.name ] : userSlice.reducer
    },
    middleware: ( defaultMiddleware ) => [...defaultMiddleware(),api.middleware]
});





export { store }