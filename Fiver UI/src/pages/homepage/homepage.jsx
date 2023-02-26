import React from 'react';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/truestedBy/TrustedBy';
import './homepage.scss';

function homepage() {
  return (
    <div className='homepage'>
      <Featured />
      <TrustedBy />
    </div>
  )
}

export default homepage;
