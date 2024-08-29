import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY; // Accede a la variable de entorno

export const translateWord = createAsyncThunk('word/translateWord', async (word) => {
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            q: word,
            source: 'es',
            target: 'en',
            format: 'text'
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
        return data.data.translations[0].translatedText;
    } else {
        throw new Error(data.error.message || 'Translation failed');
    }
});
