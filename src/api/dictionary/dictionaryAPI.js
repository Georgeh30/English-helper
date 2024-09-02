import { createAsyncThunk } from '@reduxjs/toolkit';
import { translateWord } from '@api/translation/translationAPI';
import { setTranslation } from '@store/slice/wordSlice';

const specializedTerms = ['quantum', 'cryptocurrency', 'nanotechnology']; // Add more as needed
const slangWords = ['selfie', 'emoji', 'meme']; // Add more as needed

const isProperNoun = (word) => /^[A-Z][a-z]*$/.test(word);
const isVeryShortWord = (word) => word.length <= 1;
const isSpecializedTerm = (word) => specializedTerms.includes(word.toLowerCase());
const isSlangWord = (word) => slangWords.includes(word.toLowerCase());

export const fetchWordInfo = createAsyncThunk('word/fetchWordInfo', async (word, { dispatch }) => {
    // Primero, traducir la palabra del español al inglés
    const translatedWord = await dispatch(translateWord(word)).unwrap();
    
    // Actualiza el estado para mostrar la traducción en la interfaz
    dispatch(setTranslation(translatedWord));
    
    // Validar la palabra traducida
    if (isVeryShortWord(translatedWord) || isProperNoun(translatedWord) || isSpecializedTerm(translatedWord) || isSlangWord(translatedWord)) {
        throw new Error('The translated word is not acceptable for the dictionary API.');
    }

    // Luego, buscar la información de la palabra traducida en inglés
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${translatedWord}`);
    if (!response.ok) {
        throw new Error('Failed to fetch word information.');
    }
    const data = await response.json();
    return data[0];
});