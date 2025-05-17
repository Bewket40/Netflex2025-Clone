import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState} from 'react';
import '../assets/Header.css';
import logo from '../assets/images/logo.png'

    function Header() {
        const [isScrolled, setIsScrolled] = useState(false);
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const dropdownRef = useRef();
        const [query, setQuery] = useState('');
        const navigate = useNavigate();
        const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        setQuery('');
    }
    };

    useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
    <div className="header-left"> 
        <img src={logo} alt="Netflix Logo" className="logo"/>
        <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv">TV Shows</Link>
        <Link to="/Latest-Movies">Latest</Link>
        <Link to="/watched-Lists">MyLists</Link>
        </nav>
    </div>

    <div className="header-right" ref={dropdownRef}>
        <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="search-input"
        />
        <i className="fas fa-bell"></i>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
            className="profile-avatar"
            onClick={() => setDropdownOpen(!dropdownOpen)}/> 
        <i className="fas fa-caret-down"></i>
        {dropdownOpen && (
            <div className="profile-dropdown">
            <Link to="/profile">My Profile</Link>
            <Link to="/settings">Settings</Link>
            <button onClick={() => alert('Logged out')}>Logout</button>
            </div>
        )}
    </div>
    </header>
    );
}

export default Header;


// This code defines a React component called Header that serves as the navigation bar for the application. It includes a title ("Netflix Clone") and three navigation links: Home, Movies, and TV Shows. The component is styled using an external CSS file (Header.css). The links are currently set to navigate to different pages within the application, but they can be further enhanced with routing functionality using react-router-dom.
// The Header component can be improved by adding more links, such as links to user profiles, watchlists, and search functionality. This will enhance the overall user experience and provide users with easy access to different sections of the application.
// The component can also be made responsive to ensure it looks good on different screen sizes, and additional styling can be applied to match the look and feel of popular streaming services like Netflix. Overall, this code provides a solid foundation for the header section of a Netflix clone application built with React.