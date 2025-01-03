import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducer/auth';
import userSlice from './reducer/user';

const store = configureStore({
    reducer:{
        [ authSlice.name ] : authSlice.reducer,
        [ userSlice.name ] : userSlice.reducer
    }
});





export { store }