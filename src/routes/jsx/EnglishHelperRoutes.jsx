import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '@pages/home/jsx/HomePage';
import WordPage from '@pages/word/jsx/WordPage';;

const EnglishHelperRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate replace to="Home" />}
            />
            <Route
                key="/Home"
                path="/Home"
                element={<HomePage />}
            />
            <Route
                key="/Word"
                path="/Word"
                element={<WordPage />}
            />
        </Routes>
    );
}

export default EnglishHelperRoutes;
