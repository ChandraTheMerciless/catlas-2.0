import React from'react';
import { Link } from 'react-router-dom';

import "styles/layout/_header.scss"

const MainNavigation = () => {
    return (
        <header>
            <div className="logo-wrapper">
                {/* <img src="assets/images/vecteezy_vector-isolated-cat-silhouette-logo-print-decorative-sticker_catLogo.jpg" alt="Catlas Logo" /> */}
                <img src={require('assets/images/vecteezy_vector-isolated-cat-silhouette-logo-print-decorative-sticker_catLogo.jpg')} alt="Catlas Logo" />
                <h1><Link to='/'>Catlas</Link></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/map'>Map</Link>
                    </li>
                    <li>
                        <Link to='/cat-finder'>Cat Finder</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;