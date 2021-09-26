import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // Adding a header and styling with Bootstrap 
        <div className="text-center text-white pt-3 pb-2 bg-secondary">
            <h1 className="">Concert For All</h1>
            <p>"Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife"</p>
            <h1>Total Budget: 500 Million</h1>
        </div>
    );
};

export default Header;