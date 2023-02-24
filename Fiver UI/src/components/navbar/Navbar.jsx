import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
    return (
        <div className='fiverr-navbar'>
            <div className='fiverr-container'>
                <div className='fiverr-navbar-logo'>
                    {/* <Link to="/"> */}
                        <span className='fiverr-logo'>
                            fiverr
                        </span>
                        <span className='fiverr-dot'>
                            .
                        </span>
                    {/* </Link> */}
                </div>
                <div className='fiverr-navbar-links'>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>⨁ English</span>
                    <span>PKR</span>
                    <span>Become a seller</span>
                    <span>Sign In</span>
                    <button className='fiverr-join'>Join</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
