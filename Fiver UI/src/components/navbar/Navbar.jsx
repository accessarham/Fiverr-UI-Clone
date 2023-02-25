import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {

    const [active, setActive] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);

    const isActive = () => {
        window.scrollY > 2 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    return (
        <div className={active ? 'fiverr-navbar active' : 'fiverr-navbar'}>
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
                    <button className={activeBtn ? 'active' : ''}>Join</button>

                </div>
            </div>

            {
                active &&
                <div className='fiverr-navbar-transition'>
                    <div className='fiverr-navbar-hr'></div>
                    <div className='fiverr-menu'>
                        <div>Test</div>
                        <div>Test</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navbar;
