import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.scss';

function Navbar() {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 2 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "John",
        isSeller: true
    }

    return (
        <div className={active || pathname !== '/' ? 'fiverr-navbar active' : 'fiverr-navbar'}>
            <div className='fiverr-container'>
                <div className='fiverr-navbar-logo'>
                    <Link to="/" className='link'>
                        <span className='fiverr-logo'>
                            fiverr
                        </span>
                        <span className='fiverr-dot'>
                            .
                        </span>
                    </Link>
                </div>
                <div className='fiverr-navbar-links'>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>⨁ English</span>
                    <span>PKR</span>
                    {!currentUser.isSeller && <span>Become a seller</span>}
                    <span>Sign In</span>
                    {!currentUser && <button>Join</button>}
                    {
                        currentUser && (
                            <div className='user' onClick={() => setOpen(!open)}>
                                <img src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo" alt='profile' />
                                <span>{currentUser.username}</span>
                                {open && <div className='options'>
                                    {
                                        currentUser.isSeller && (
                                            <>
                                                <Link className='link' to="/mygigs">Gigs</Link>
                                                <Link className='link' to="/addnewgig">Add new Gig</Link>
                                            </>
                                        )
                                    }
                                    <Link className='link' to="/orders">Orders</Link>
                                    <Link className='link' to="/messages">Messages</Link>
                                    <Link className='link'>Logout</Link>
                                </div>}
                            </div>
                        )
                    }
                </div>
            </div>

            {
                (active || pathname !== '/') && (
                    <>
                        <div className='fiverr-navbar-hr'></div>
                        <div className='fiverr-menu'>
                            <Link to='/' className='link'>Graphics & Design</Link>
                            <Link to='/' className='link'>Video & Animation</Link>
                            <Link to='/' className='link'>Writing & Translation</Link>
                            <Link to='/' className='link'>AI Services</Link>
                            <Link to='/' className='link'>Digital Marketing</Link>
                            <Link to='/' className='link'>Music & Audio</Link>
                            <Link to='/' className='link'>Programming & Tech</Link>
                            <Link to='/' className='link'>Business</Link>
                            <Link to='/' className='link'>Lifestyle</Link>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Navbar;
