import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu-content menu-content-categories">Categories</div>
            <div className="menu-content menu-content-website-builders">Website Builders</div>
            <div className="menu-content menu-content-today-deals">Today's Deals</div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    );
};

export default Navbar;
