import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordInfo, setWord } from '@store/slice/wordSlice';
import MainLayout from '@layouts/jsx/MainLayout';
import Phonetics from '@components/phonetics/jsx/Phonetics';
import Meanings from '@components/meanings/jsx/Meanings';
import { motion } from 'framer-motion';

const WordPage = () => {
    const dispatch = useDispatch();
    const { word, translation, info, status, error } = useSelector((state) => state.words);
    const [inputValue, setInputValue] = useState(word);
    const [searchWord, setSearchWord] = useState('');
    
    // Maneja el cambio en el input restringiendo a una sola palabra
    const handleInputChange = (e) => {
        const value = e.target.value;
        // Permitir solo caracteres alfanuméricos y espacios, y restringir a una sola palabra
        const restrictedValue = value.replace(/\s+/g, ' ').trim(); // Eliminar espacios extra
        setInputValue(restrictedValue);
    };

    // Maneja la búsqueda
    const handleSearch = () => {
        if (inputValue.trim() && !/\s/.test(inputValue)) { // Asegurarse de que sea una sola palabra
            setSearchWord(inputValue);
            dispatch(setWord(inputValue));
            dispatch(fetchWordInfo(inputValue));
        } else {
            alert("Please enter a single word.");
        }
    };

    // Maneja el evento de presionar "Enter"
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <MainLayout>
            <div className="p-4 mt-28 mb-6">
                <motion.div
                    className="w-full max-w-xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter a word in Spanish"
                        className="flex-grow border-2 border-lightBorder dark:border-darkBorder rounded-lg p-3 text-lg bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                    />
                    <button
                        onClick={handleSearch}
                        className="sm:ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Search
                    </button>
                </motion.div>
                
                {translation && (
                    <div className="mt-4">
                        <p className="text-lightText dark:text-darkText">Translation: {translation}</p>
                    </div>
                )}

                {status === 'loading' && <p className="text-lightText dark:text-darkText mt-4">Loading...</p>}
                {status === 'succeeded' && info && (
                    <motion.div
                        className="word-info bg-lightNavbar text-lightNavbarText dark:bg-darkNavbar dark:text-darkNavbarText p-6 rounded-lg shadow-lg mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl mb-4 text-lightText dark:text-darkText"><strong>Word in English: </strong>[{info.word}]</h2>
                        {info.phonetic && <p className="text-lg text-lightText dark:text-darkText"><strong>Phonetics: </strong>{info.phonetic}</p>}
                        {info.phonetics.length > 0 && <Phonetics phonetics={info.phonetics} />}
                        {info.meanings.length > 0 && <Meanings meanings={info.meanings} />}
                        {info.sourceUrls && (
                            <p className="source text-lightText dark:text-darkText mt-4">
                                Source: <a href={info.sourceUrls[0]} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:underline">{info.sourceUrls[0]}</a>
                            </p>
                        )}
                    </motion.div>
                )}
                {status === 'failed' && error && (
                    <p className="text-red-500 dark:text-red-400 mt-4">{error}</p>
                )}
                <div className="mt-6 text-lightText dark:text-darkText">
                    <p>Note: The dictionary API may not have results for:</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Highly specialized or technical terms.</li>
                        <li>Proper nouns (e.g., names of people or places).</li>
                        <li>Very short words (e.g., single letters).</li>
                        <li>Newly coined words or slang that may not be included in the dictionary.</li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default WordPage;
