import React from 'react';
import './GigCard.scss';
import { Link } from 'react-router-dom';

const GigCards = ({ item }) => {
  return (
    <Link to='/gig/123' className='link'>
      <div className='fiver-gigcard'>
        <img src={item.img} alt={item.title} />
        <div className='fiver-gigcard-info'>
          <div className='fiver-gigcard-info-user'>
            <img src={item.pp} alt={item.username} />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className='fiver-gigcard-user-rating'>
            <img src='./assets/star.png' alt='star-icon' />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className='fiver-gigcard-detail'>
          <img src='./assets/heart.png' alt='heart-icon' />
          <div className='fiver-gigcard-detail-price'>
            <span>STARTING AT</span>
            <h2>{item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GigCards;
