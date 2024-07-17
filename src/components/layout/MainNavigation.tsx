import React from'react';
import { Link, NavLink } from 'react-router-dom';

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
                        <NavLink to='/' className={({isActive}) => isActive ? "active" : undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/map' className={({isActive}) => isActive ? "active" : undefined}>Map</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cat-finder' className={({isActive}) => isActive ? "active" : undefined}>Cat Finder</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive}) => isActive ? "active" : undefined}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive}) => isActive ? "active" : undefined}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;