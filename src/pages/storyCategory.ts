import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { Category } from "../models/Categories"
import { RootState } from './store'

const initialState: Category = {
    order: 0,
    name: ' ',
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<Category>) => {
            state.order = action.payload.order;
            state.name = action.payload.name;
        },
    }
});

export const { changeCategory } = categorySlice.actions
export const selectCategory = (state: RootState) => state.category.name
export default categorySlice.reducer;