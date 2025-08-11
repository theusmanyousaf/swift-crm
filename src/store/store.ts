import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice'
import transactionReducer from './slices/transactionsSlice'
import productsReducer from './slices/productsSlice'
// import authReducer from './slices/authSlice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        nav: navReducer,
        // auth: authReducer,
        transactions: transactionReducer,
        products: productsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;