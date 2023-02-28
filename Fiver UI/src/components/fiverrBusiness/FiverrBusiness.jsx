import React from 'react';
import './FiverrBusiness.scss';

const FiverrBusiness = () => {
    return (
        <div className='fiverr-business dark'>
            <div className='fiverr-featuredVideo-container'>
                <div className='fiverr-featuredVideo-item'>
                    <h1>fiverr business</h1>
                    <h1>A business solution designed for teams</h1>
                    <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                    <div className='fiverr-featuredVideo-item-title'>
                        <img src='./assets/check.png' alt='icon' />
                        Connect to freelancers with proven business experience
                    </div>
                    <div className='fiverr-featuredVideo-item-title'>
                        <img src='./assets/check.png' alt='icon' />
                        Get matched with the perfect talent by a customer success manager
                    </div>
                    <div className='fiverr-featuredVideo-item-title'>
                        <img src='./assets/check.png' alt='icon' />
                        Manage teamwork and boost productivity with one powerful workspace
                    </div>
                    <button>Explore Fiverr Business</button>
                </div>
                <div className='fiverr-featuredVideo-item'>
                    <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png' alt='image' />
                </div>
            </div>
        </div>
    )
}

export default FiverrBusiness;
