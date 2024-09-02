import { createSlice } from '@reduxjs/toolkit';
import { searchWord, getSearchHistory, filterSearchHistory, saveSearchHistory } from '@api/english/englishHelperAPI';

// Slice de Redux
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        searchHistory: [],
        filteredHistory: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchWord.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchWord.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchResults = action.payload;
            })
            .addCase(searchWord.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getSearchHistory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSearchHistory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchHistory = action.payload;
                state.filteredHistory = action.payload;
            })
            .addCase(getSearchHistory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(filterSearchHistory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(filterSearchHistory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.filteredHistory = action.payload;
            })
            .addCase(filterSearchHistory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(saveSearchHistory.fulfilled, (state, action) => {
                // Actualiza el historial con la nueva búsqueda guardada
                state.searchHistory.push(action.payload);
            });
    },
});

export default searchSlice.reducer;
export { searchWord, getSearchHistory, filterSearchHistory, saveSearchHistory };