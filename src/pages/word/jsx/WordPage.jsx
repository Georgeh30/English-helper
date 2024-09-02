import React, { useState } from 'react';
import MainLayout from '@layouts/jsx/MainLayout';
import SearchWord from '@components/searchs/jsx/SearchWord';
import SearchHistory from '@components/searchs/jsx/SearchHistory';
import '@pages/word/css/styles_wordPage.css'

const WordPage = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <MainLayout>
            <div className="p-4 mt-24 mb-6">
                <div className="word-pages-container max-w-7xl mx-auto">
                    <div className="tabs-container flex justify-center">
                        <div className="tabs flex flex-wrap space-x-2 rounded-full border dark:border-lightHover border-darkHover bg-lightNavbar dark:bg-darkNavbar p-1 max-w-full overflow-x-auto">
                            <button
                                className={`tab px-4 py-2 font-semibold rounded-full transition-all duration-300 ${activeTab === 'search'
                                    ? 'bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText shadow-md'
                                    : 'text-lightText dark:text-darkText hover:bg-lightHover dark:hover:bg-darkHover'
                                    }`}
                                onClick={() => setActiveTab('search')}
                            >
                                Buscar Palabras
                            </button>
                            <button
                                className={`tab px-4 py-2 font-semibold rounded-full transition-all duration-300 ${activeTab === 'history'
                                    ? 'bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText shadow-md'
                                    : 'text-lightText dark:text-darkText hover:bg-lightHover dark:hover:bg-darkHover'
                                    }`}
                                onClick={() => setActiveTab('history')}
                            >
                                Historial de Búsqueda
                            </button>
                        </div>
                    </div>

                    <div className="tab-content mt-6">
                        {activeTab === 'search' && <SearchWord />}
                        {activeTab === 'history' && <SearchHistory />}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default WordPage;
