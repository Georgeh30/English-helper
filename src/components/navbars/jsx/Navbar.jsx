import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import '@components/navbars/css/styles_navbar.css';

const navigation = [
    { name: 'Home', href: '/English-helper/Home' },
    { name: 'Word', href: '/English-helper/Word' },
];

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const NavbarFloating = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

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
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 p-2 px-4 rounded-3xl border z-50 bg-lightNavbar text-lightNavbarText dark:bg-darkNavbar dark:text-darkNavbarText dark:border-lightHover border-darkHover navbar-floating">
            <div className="flex items-center justify-between space-x-2">
                {/* Nombre de la aplicación */}
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold px-2 py-1 mr-2">
                    <Link to="/">English-Helper</Link>
                </div>
                {/* Enlaces de navegación */}
                <div className="flex space-x-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            aria-current={item.href === currentPath ? 'page' : undefined}
                            className={classNames(
                                item.href === currentPath
                                    ? 'bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg'
                                    : 'text-lightNavbarText dark:text-darkNavbarText hover:bg-lightHover dark:hover:bg-darkBg',
                                'px-1 sm:px-2 md:px-3 py-1 rounded-xl sm:rounded-2xl nav-item transition-all duration-200'
                            )}
                            onClick={() => setCurrentPath(item.href)}
                        >
                            <span className="text-sm sm:text-base md:text-lg">{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/* Botón de alternancia de tema */}
                <button
                    type="button"
                    onClick={toggleDarkMode}
                    className='ml-2 px-1 sm:px-2 md:px-3 py-1 rounded-xl sm:rounded-2xl dark:hover:bg-darkBg hover:bg-lightHover toggle-dark-mode transition-all duration-200'
                >
                    <span className="sr-only">Toggle Dark Mode</span>
                    {darkMode ? (
                        <SunIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" aria-hidden="true" />
                    ) : (
                        <MoonIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" aria-hidden="true" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default NavbarFloating;
