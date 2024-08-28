import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import EnglishHelperRoutes from '@routes/jsx/EnglishHelperRoutes';
import NotFoundPage from '@pages/not_found/jsx/NotFoundPage';

const RoutesHandle = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to="/English-helper" />}
                />
                <Route
                    path="/English-helper/*"
                    element={<EnglishHelperRoutes />}
                />
                <Route 
                    path="/*" 
                    element={<NotFoundPage />}
                />
            </Routes>
        </Router>
    );
}

export default RoutesHandle;
