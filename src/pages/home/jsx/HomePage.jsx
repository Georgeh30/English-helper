import { useState, useEffect } from 'react';
import MainLayout from '@layouts/jsx/MainLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <MainLayout>
            <div className="flex-grow flex items-center justify-center flex-col p-4">
                {/* Botón de alternancia de tema en la esquina superior derecha */}
                <button
                    type="button"
                    onClick={toggleDarkMode}
                    className="fixed top-4 right-4 p-2 rounded-full bg-lightNavbar dark:bg-darkNavbar text-lightNavbarText dark:text-darkNavbarText shadow-lg transition-transform transform hover:scale-110"
                >
                    <span className="sr-only">Toggle Dark Mode</span>
                    {darkMode ? (
                        <SunIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MoonIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>

                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-lightText dark:text-darkText"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to My English Learning App
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-center text-lightText dark:text-darkText mb-6 sm:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Explore various features to enhance your English vocabulary and skills.
                </motion.p>
                <motion.div
                    className="modules flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Link
                        to="/English-Helper/Word"
                        className="module-item border rounded-lg p-4 sm:p-6 text-center bg-blue-500 text-white hover:bg-blue-600 transition transform hover:scale-105 shadow-lg dark:bg-blue-700 dark:hover:bg-blue-600 w-full sm:w-64 md:w-80 max-w-xs"
                    >
                        <FaBookOpen className="text-4xl sm:text-5xl mb-3 mx-auto" />
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Word Search</h2>
                        <p className="text-sm sm:text-base">Search and learn new words efficiently with our interactive tool.</p>
                    </Link>
                    {/* Más módulos aquí */}
                </motion.div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
