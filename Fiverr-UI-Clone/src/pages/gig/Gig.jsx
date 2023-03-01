import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  return (
    <div className="gig">
      <div className="gig-container">
        <div className="gig-left">
          <span className="gig-breadcrumbs">FIVERR > GRAPHICS & DESIGN > </span>
          <h1>I will create AI generated art for you</h1>
          <div className="gig-user">
            <img
              className="gig-user-pp"
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <span>John Doe</span>
            <div className="gig-user-star">
              <img src="/assets/star.png" alt="icon" />
              <img src="/assets/star.png" alt="icon" />
              <img src="/assets/star.png" alt="icon" />
              <img src="/assets/star.png" alt="icon" />
              <img src="/assets/star.png" alt="icon" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="gig-slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className="gig-seller">
            <h2>About This Seller</h2>
            <div className="gig-seller-img">
              <img
                src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="user-img"
              />
              <div className="gig-seller-info">
                <span>John Doe</span>
                <div className="gig-user-star">
                  <img src="/assets/star.png" alt="icon" />
                  <img src="/assets/star.png" alt="icon" />
                  <img src="/assets/star.png" alt="icon" />
                  <img src="/assets/star.png" alt="icon" />
                  <img src="/assets/star.png" alt="icon" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="gig-seller-box">
              <div className="gig-seller-box-items">
                <div className="gig-seller-box-item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="gig-seller-box-item">
                  <span className="title">Member Since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="gig-seller-box-item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="gig-seller-box-item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day ago</span>
                </div>
                <div className="gig-seller-box-item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="gig-reviews">
            <h2>Reviews</h2>
            <div className="gig-reviews-item">
              <div className="gig-reviews-user">
                <img
                  className="gig-reviews-user-img"
                  src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt="user-img"
                />
                <div className="gig-reviews-user-info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://th.bing.com/th?id=OIP.S5ju1XFnyRKYRWnyKDl0bQHaD2&w=113&h=113&c=1&vt=10&o=6&pid=5.1"
                      alt="usa-flag"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="gig-user-star">
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/assets/like.png" alt="" />
                <span>Yes</span>
                <img src="/assets/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="gig-reviews-item">
              <div className="gig-reviews-user">
                <img
                  className="gig-reviews-user-img"
                  src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt="user-img"
                />
                <div className="gig-reviews-user-info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://th.bing.com/th?id=OIP.S5ju1XFnyRKYRWnyKDl0bQHaD2&w=113&h=113&c=1&vt=10&o=6&pid=5.1"
                      alt="usa-flag"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="gig-user-star">
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/assets/like.png" alt="" />
                <span>Yes</span>
                <img src="/assets/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="gig-reviews-item">
              <div className="gig-reviews-user">
                <img
                  className="gig-reviews-user-img"
                  src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt="user-img"
                />
                <div className="gig-reviews-user-info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://th.bing.com/th?id=OIP.S5ju1XFnyRKYRWnyKDl0bQHaD2&w=113&h=113&c=1&vt=10&o=6&pid=5.1"
                      alt="usa-flag"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="gig-user-star">
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <img src="/assets/star.png" alt="icon" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/assets/like.png" alt="" />
                <span>Yes</span>
                <img src="/assets/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gig-right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$59.99</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="details">
            <div className="item">
              <img src="/assets/clock.png" alt="clock-icon" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/assets/recycle.png" alt="clock-icon" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/assets/greencheck.png" alt="clock-icon" />
              <span>Promt writing</span>
            </div>
            <div className="item">
              <img src="/assets/greencheck.png" alt="clock-icon" />
              <span>Artwork Delivery</span>
            </div>
            <div className="item">
              <img src="/assets/greencheck.png" alt="clock-icon" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/assets/greencheck.png" alt="clock-icon" />
              <span>Additional Design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
