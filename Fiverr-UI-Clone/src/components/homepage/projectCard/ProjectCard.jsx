import React from 'react';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';

function ProjectCard({ item }) {
    return (
        <Link to='/' className='link'>
            <div className='fiverr-projectcard'>
                <img src={item.img} alt='image' />
                <div className='fiverr-projectcard-info'>
                    <img src={item.pp} alt={item.pp} />
                    <div className='fiverr-projectcard-text'>
                        <h2>{item.cat}</h2>
                        <span>{item.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;
