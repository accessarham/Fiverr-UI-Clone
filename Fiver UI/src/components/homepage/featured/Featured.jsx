import React from 'react';
import './Featured.scss';

function Featured() {
    return (
        <div className='fiverr-featured'>
            <div className='fiverr-container'>
                <div className='fiverr-featured-left'>
                    <h1>Find the perfect <i>freelance</i> services for your business</h1>
                    <div className='fiverr-featured-search'>
                        <div className='fiverr-featured-search-icon'>
                            <img src='./assets/search.png' alt='icon' />
                            <input type='text' placeholder='Try building mobile app' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className='fiverr-featured-tags'>
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className='fiverr-featured-right'>
                    <img src='./assets/man.png' alt='background-img' />
                </div>
            </div>
        </div>
    )
}

export default Featured;
