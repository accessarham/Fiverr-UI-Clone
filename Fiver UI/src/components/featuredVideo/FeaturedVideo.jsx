/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './FeaturedVideo.scss';

const FeaturedVideo = () => {
  return (
    <div className='fiverr-featuredVideo'>
      <div className='fiverr-featuredVideo-container'>
        <div className='fiverr-featuredVideo-item'>
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className='fiverr-featuredVideo-item-title'>
            <img src='./assets/check.png' alt='image' />
            The best for every budget
          </div>
          <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
          <div className='fiverr-featuredVideo-item-title'>
            <img src='./assets/check.png' alt='image' />
            Quality work done quickly
          </div>
          <p>Find the right freelancer to begin working on your project within minutes.</p>
          <div className='fiverr-featuredVideo-item-title'>
            <img src='./assets/check.png' alt='image' />
            Protected payments, every time
          </div>
          <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
          <div className='fiverr-featuredVideo-item-title'>
            <img src='./assets/check.png' alt='image' />
            24/7 support
          </div>
          <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
        </div>
        <div className='fiverr-featuredVideo-item'>
          <video src="./assets/video.mp4" controls />
        </div>
      </div>
    </div>
  )
}

export default FeaturedVideo;
