import React from 'react';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './homepage.scss';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import { cards } from '../../data';
import FeaturedVideo from '../../components/featuredVideo/FeaturedVideo';
import FiverrBusiness from '../../components/fiverrBusiness/FiverrBusiness';
import { projects } from '../../data';
import ProjectCard from '../../components/projectCard/ProjectCard';

const homepage = () => {

  const categoryheading = 'Popular professional services';
  const projectheading = 'Get inspired with projects made by our freelancers';

  return (
    <div className='homepage'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5} heading={categoryheading}>
        {cards.map(card => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <FeaturedVideo />
      <FiverrBusiness />
      <Slide slidesToShow={4} arrowsScroll={4} heading={projectheading}>
        {projects.map(card => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  )
}

export default homepage;
