import { createSlice } from '@reduxjs/toolkit';
import { fetchWordInfo } from '@api/dictionary/dictionaryAPI';

const wordSlice = createSlice({
    name: 'word',
    initialState: {
        word: '',
        translation: '', // Estado para almacenar la traducción
        info: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        setWord: (state, action) => {
            state.word = action.payload;
            state.info = null;  // Limpia la información previa
            state.translation = ''; // Limpia la traducción previa
            state.error = null; // Limpia el error previo
        },
        setTranslation: (state, action) => {
            state.translation = action.payload; // Almacena la traducción
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
                state.error = null;
            })
            .addCase(fetchWordInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.info = null; // Limpia la información si ocurre un error
                state.error = action.error.message;
            });
    },
});

export { fetchWordInfo };
export const { setWord, setTranslation } = wordSlice.actions;
export default wordSlice.reducer;
