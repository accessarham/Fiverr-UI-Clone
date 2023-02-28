import React from 'react';
import './CategoryCard.scss';
import { Link } from 'react-router-dom';

function CategoryCard({ item }) {
    return (
        <Link to='/gigs?cat=design'>
            <div className='fiverr-categorycard'>
                <img src={item.img} alt={item.title} />
                <span className='fiverr-categorycard-desc'>{item.desc}</span>
                <span className='fiverr-categorycard-title'>{item.title}</span>
            </div>
        </Link>
    )
}

export default CategoryCard;
