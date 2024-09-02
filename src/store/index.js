import { configureStore } from '@reduxjs/toolkit';
import wordReducer from '@store/slice/wordSlice';
import searchReducer from '@store/slice/searchSlice';

export const store = configureStore({
    reducer: {
        words: wordReducer,
        search: searchReducer,
    },
});
