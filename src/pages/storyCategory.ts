import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { Category } from "../models/Categories"
import { RootState } from './store'

const initialState: Category = {
    value: ' ',
    type: ' ',
    name: ' ',
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<Category>) => {
            state.value = action.payload.value;
            state.type = action.payload.type;
            state.name = action.payload.name;
        },
    }
});

export const { changeCategory } = categorySlice.actions
export const selectCategory = (state: RootState) => state.category.value
export default categorySlice.reducer;