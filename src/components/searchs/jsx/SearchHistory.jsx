import { useDispatch, useSelector } from 'react-redux';
import { getSearchHistory, filterSearchHistory, searchWord } from '@store/slice/searchSlice';
import { useEffect, useState } from 'react';

const SearchHistory = () => {
    const dispatch = useDispatch();
    const { searchHistory, filteredHistory, status, error, searchResults } = useSelector((state) => state.search);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(getSearchHistory());
    }, [dispatch]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        dispatch(filterSearchHistory(term));
    };

    const handleWordClick = (word) => {
        dispatch(searchWord(word));  // Llama al thunk searchWord con la palabra seleccionada
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Buscar en historial..."
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md mb-4 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900"
            />
            {status === 'loading' && <div className="text-gray-500 dark:text-gray-400">Cargando...</div>}
            {status === 'failed' && <div className="text-red-500">{error}</div>}
            {status === 'succeeded' && (
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Historial de Búsquedas</h2>
                    {searchHistory.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-md font-medium text-gray-800 dark:text-gray-200">Historial Completo:</h3>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                {searchHistory.map((entry) => (
                                    <li
                                        key={entry.id}
                                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 cursor-pointer"
                                        onClick={() => handleWordClick(entry.word)} // Ejecuta la búsqueda al hacer clic en la palabra
                                    >
                                        <div className="text-gray-900 dark:text-gray-100 font-semibold">{entry.word} - {entry.translation}</div>
                                        <span className="text-gray-600 dark:text-gray-400">{new Date(entry.date).toLocaleDateString()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <h3 className="text-md font-medium text-gray-800 dark:text-gray-200">Resultados Filtrados:</h3>
                    {filteredHistory.length === 0 ? (
                        <div className="text-gray-500 dark:text-gray-400">No se encontraron resultados.</div>
                    ) : (
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            {filteredHistory.map((entry) => (
                                <li
                                    key={entry.id}
                                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 cursor-pointer"
                                    onClick={() => handleWordClick(entry.word)} // Ejecuta la búsqueda al hacer clic en la palabra
                                >
                                    <div className="text-gray-900 dark:text-gray-100 font-semibold">{entry.word} - {entry.translation}</div>
                                    <span className="text-gray-600 dark:text-gray-400">{new Date(entry.date).toLocaleDateString()}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {/* Muestra los resultados de la búsqueda */}
            {searchResults.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Resultados de la Búsqueda</h2>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        {searchResults.map((result, index) => (
                            <li key={index} className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700">
                                <div className="text-gray-900 dark:text-gray-100 font-semibold">{result.word} - {result.meaning}</div>
                                <span className="text-gray-600 dark:text-gray-400">{result.example}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchHistory;
