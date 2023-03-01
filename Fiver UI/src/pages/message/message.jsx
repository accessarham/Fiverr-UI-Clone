import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="message-container">
        <span className="message-breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGE
          </Link>
          > JOHN DOE >
        </span>
        <div className="message-messages">
          <div className="message-item">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
          <div className="message-item message-owner">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
          <div className="message-item">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
          <div className="message-item message-owner">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
          <div className="message-item">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
          <div className="message-item message-owner">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
          <div className="message-item">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
          <div className="message-item message-owner">
            <img
              src="https://yt3.ggpht.com/2s_1CeNUitllfxhKzP_o4adud90fvR5tvoLRTqdLL5GFrSZhsFJWCSxC4CqySMMK85Jhv1Re=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="user-img"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
              sapiente quidem perspiciatis, debitis corrupti iure vel, eligendi
              exercitationem mollitia commodi similique odit officiis aut labore
              quae error ea minima.
            </p>
          </div>
        </div>
        <hr />
        <div className="message-write">
          <textarea name="" placeholder="Write a message...." id=""></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
