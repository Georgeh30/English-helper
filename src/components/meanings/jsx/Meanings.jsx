import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Meanings = ({ meanings }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    // Mostrar solo la primera definición si no está expandido
    const displayedMeanings = expanded ? meanings : [meanings[0]];

    return (
        <div className="meanings mt-6 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold text-lightText dark:text-darkText mb-4">Meanings</h2>
            <AnimatePresence>
                {displayedMeanings.map((meaning, index) => (
                    <motion.div 
                        key={index} 
                        className="meaning-item mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md border border-gray-300 dark:border-gray-600"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-lightText dark:text-darkText mb-2">
                            {meaning.partOfSpeech}
                        </h3>
                        <ul className="list-disc pl-5">
                            {meaning.definitions.map((def, i) => (
                                <li key={i} className="mb-4">
                                    <p className="definition text-base sm:text-lg text-lightText dark:text-darkText mb-2">
                                        {def.definition}
                                    </p>
                                    {def.example && (
                                        <p className="example text-sm sm:text-base italic text-gray-600 dark:text-gray-400">
                                            Example: {def.example}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                        {meaning.synonyms.length > 0 && (
                            <div className="synonyms mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600">
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold">
                                    Synonyms:
                                </p>
                                <p className="text-lightText dark:text-darkText text-sm sm:text-base">
                                    {meaning.synonyms.join(', ')}
                                </p>
                            </div>
                        )}
                        {meaning.antonyms.length > 0 && (
                            <div className="antonyms mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600">
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold">
                                    Antonyms:
                                </p>
                                <p className="text-lightText dark:text-darkText text-sm sm:text-base">
                                    {meaning.antonyms.join(', ')}
                                </p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
            <button
                onClick={handleExpand}
                className="text-blue-500 mt-4 hover:underline focus:outline-none text-sm sm:text-base flex items-center space-x-2 transition-colors duration-300 ease-in-out"
            >
                {expanded ? (
                    <>
                        <HiChevronUp className="w-5 h-5" />
                        <span>Show Less</span>
                    </>
                ) : (
                    <>
                        <HiChevronDown className="w-5 h-5" />
                        <span>Show More</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default Meanings;
