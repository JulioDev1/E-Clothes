import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { Category } from "../models/Categories"
import { RootState } from './store'

const initialState: Category = {
    value: ' ',
    type: ' ',
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<Category>) => {
            state.value = action.payload.value;
            state.type = action.payload.type;
        },
    }
});

export const { changeCategory } = categorySlice.actions
export const selectCategory = (state: RootState) => state.category.value
export default categorySlice.reducer;