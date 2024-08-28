import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordInfo, setWord } from '@store/slice/wordSlice';
import MainLayout from '@layouts/jsx/MainLayout';
import Phonetics from '@components/phonetics/jsx/Phonetics';
import Meanings from '@components/meanings/jsx/Meanings';
import { motion } from 'framer-motion';

const WordPage = () => {
    const dispatch = useDispatch();
    const { word, info, status } = useSelector((state) => state.words);

    useEffect(() => {
        if (word) {
            dispatch(fetchWordInfo(word));
        }
    }, [dispatch, word]);

    const handleInputChange = (e) => {
        dispatch(setWord(e.target.value));
    };

    return (
        <MainLayout>
            <div className="p-4 mt-28 mb-6">
                <motion.div
                    className="w-full max-w-xl flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.input
                        type="text"
                        value={word}
                        onChange={handleInputChange}
                        placeholder="Enter a word"
                        className="w-96 border-2 border-lightBorder dark:border-darkBorder rounded-lg p-3 text-lg bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                    />
                </motion.div>
                {status === 'loading' && <p className="text-lightText dark:text-darkText">Loading...</p>}
                {status === 'succeeded' && info && (
                    <motion.div
                        className="word-info bg-lightCard dark:bg-darkCard p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-lightText dark:text-darkText">{info.word}</h2>
                        {info.phonetics.length > 0 && <Phonetics phonetics={info.phonetics} />}
                        {info.meanings.length > 0 && <Meanings meanings={info.meanings} />}
                        {info.sourceUrls && (
                            <p className="source text-lightText dark:text-darkText mt-4">
                                Source: <a href={info.sourceUrls[0]} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:underline">{info.sourceUrls[0]}</a>
                            </p>
                        )}
                    </motion.div>
                )}
                {status === 'failed' && <p className="text-red-500 dark:text-red-400">Error loading word information.</p>}
            </div>
        </MainLayout>
    );
};

export default WordPage;
