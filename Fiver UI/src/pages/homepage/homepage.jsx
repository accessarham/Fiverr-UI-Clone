import React from 'react';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './homepage.scss';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import { cards } from '../../data';
import FeaturedVideo from '../../components/featuredVideo/FeaturedVideo';
import FiverrBusiness from '../../components/fiverrBusiness/FiverrBusiness';

const homepage = () => {
  return (
    <div className='homepage'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <FeaturedVideo />
      <FiverrBusiness />
    </div>
  )
}

export default homepage;
