import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.scss';

function Navbar() {
    return (
        <div className='fiverr-navbar'>
            <div className='fiverr-container'>
                <div className='fiverr-navbar-logo'>
                    <span className='fiverr-logo'>
                        <img src={logo} alt='Fiverr Logo' />
                    </span>
                </div>
                <div className='fiverr-navbar-links'>
                    <span className='fiverr-'>Fiverr Business</span>
                    <span className='fiverr-'>Explore</span>
                    <span className='fiverr-'>English</span>
                    <span className='fiverr-'>PKR</span>
                    <span className='fiverr-'>Become a seller</span>
                    <span className='fiverr-'>Sign In</span>
                    <button className='fiverr-join'>Join</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
