import React from'react';

import "styles/layout/_header.scss"

const MainHeader = () => {
    return (
        <header>
            <h1>Catlas</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Cat map</li>
                    <li>Cat search</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;