import React, {useState} from 'react'
import App from '../../App';
import {Link} from "react-router-dom";


const Navbar = () => {

        const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <h3 className="logo">Logo</h3>
            <ul className={isMobile? "nav-links-mobile": "nav-links"}
            onClick={() => setIsMobile(false)}
            >
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/" className="contact">
                    <li>Contact</li>
                </Link>
                <Link to="/" className="signup">
                    <li>Sign Up</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (
                < i className="fas fa-times"></i>
                ) : (
                <i className="fas fa-bars"></i>
                )}
            </button>
        </nav>
    );
};

export default Navbar;