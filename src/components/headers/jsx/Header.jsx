import { useLocation } from 'react-router-dom';
import Navbar from '@components/navbars/jsx/Navbar';

const Header = () => {
    const location = useLocation();
    console.log(location.pathname);
    // Check if the current route is '/English-Helper/Home'
    const shouldShowNavbar = location.pathname !== '/English-helper/Home';

    return (
        <header>
            {shouldShowNavbar && <Navbar />}
        </header>
    );
};

export default Header;
