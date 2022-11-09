import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">SHOP</a>
                <a href="./orders">Orders</a>
                <a href="./inventory">Inventory</a>
                <a href="./about">About us</a>
            </div>
        </nav>
    );
};

export default Header; <h3>This is Header</h3>