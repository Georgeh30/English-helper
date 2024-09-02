// redux/searchSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://api.example.com'; // URL base de la API que se usará en el futuro

// Thunks para manejar las peticiones asíncronas
export const searchWord = createAsyncThunk(
    'search/searchWord',
    async (word, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/search?word=${word}`);
            if (!response.ok) {
                throw new Error('Error al buscar la palabra');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getSearchHistory = createAsyncThunk(
    'search/getSearchHistory',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/history`);
            if (!response.ok) {
                throw new Error('Error al obtener el historial');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const filterSearchHistory = createAsyncThunk(
    'search/filterSearchHistory',
    async (term, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/history?filter=${term}`);
            if (!response.ok) {
                throw new Error('Error al filtrar el historial');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const saveSearchHistory = createAsyncThunk(
    'search/saveSearchHistory',
    async (wordInfo, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/history`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wordInfo),
            });
            if (!response.ok) {
                throw new Error('Error al guardar en el historial');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);