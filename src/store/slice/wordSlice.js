import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWordInfo = createAsyncThunk('word/fetchWordInfo', async (word) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    return data[0];
});

const wordSlice = createSlice({
    name: 'word',
    initialState: {
        word: '',
        info: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        setWord: (state, action) => {
            state.word = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWordInfo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWordInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(fetchWordInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setWord } = wordSlice.actions;

export default wordSlice.reducer;
