import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='fiverr-footer'>
      <div className='fiverr-footer-container'>
        <div className='fiverr-footer-top'>
          <div className='fiverr-footer-top-item'>
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className='fiverr-footer-top-item'>
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className='fiverr-footer-top-item'>
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>
          <div className='fiverr-footer-top-item'>
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className='fiverr-footer-top-item'>
            <h2>More From Fiverr</h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
            <span>Get Inspired</span>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className='fiverr-footer-bottom'>
          <div className='fiverr-footer-bottom-left'>
            <h2>Fiverr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className='fiverr-footer-bottom-right'>
            <div className="fiverr-footer-bottom-social-links">
              <img src="./assets/twitter.png" alt="" />
              <img src="./assets/facebook.png" alt="" />
              <img src="./assets/linkedin.png" alt="" />
              <img src="./assets/pinterest.png" alt="" />
              <img src="./assets/instagram.png" alt="" />
            </div>
            <div className="fiverr-footer-bottom-links">
              <img src="./assets/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="fiverr-footer-bottom-links">
              <img src="./assets/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="./assets/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
