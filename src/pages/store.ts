import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './storyCategory';

const store = configureStore({
    reducer: {
        category: categoryReducer,
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispacth