import { configureStore } from '@reduxjs/toolkit';
import catsSlice from './cats-slice';

const store = configureStore({
    reducer: {
        cats: catsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;