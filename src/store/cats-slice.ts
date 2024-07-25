import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CatState, CatListState, AppActions, REPLACE_CATS, ADD_CAT, DELETE_CAT, UPDATE_CAT } from './types';

const initialState: CatListState = {
    cats: []
};

const catsSlice = createSlice({
    name: 'cats',
    initialState: initialState,
    reducers: {
        replaceCats: (state, action: PayloadAction<CatListState>) => {
            state.cats = action.payload.cats;
        },
        addCat: (state, action: PayloadAction<CatListState>) => {
            // state.cats.push(action.payload);
        },
        deleteCat: (state, action: PayloadAction<CatListState>) => {
            // state.cats = state.cats.filter(cat => cat.id !== action.payload);
        },
        updateCat: (state, action: PayloadAction<CatListState>) => {
            // const { id, name, breed, age, color, gender, location } = action.payload;
            // const catIndex = state.cats.findIndex(cat => cat.id === id);
            // if (catIndex !== -1) {
            //     state.cats[catIndex] = { id, name, breed, age, color, gender, location };
            // }
        }
    }
});

export default catsSlice.reducer;
export const catsActions = catsSlice.actions;