import React from 'react'
import './Reasons.css';
import image1 from '../../assets/image1.png';

import tick from '../../assets/check-mark.png';

const Reasons = () => {
  return (
    <div className='Reasons' >
        <div className='left-r'>
            <img src={image1} alt={image1} />
        </div>
        <div className='right-r'>
          <span>Some Tools</span>
          <div>
            <span className='stroke-text'>To </span>
            <span> Be Protected</span>
          </div>
          
          
            <div className='details-r'>
            <div>
              <img src={tick} />
              <span>more than 1300 detailed exercise </span>
            </div>

            <div>
              <img src={tick} />
              <span>well-chosen information and advice from international sources.</span>
            </div>

            <div>
              <img src={tick} />
              <span>we suggest to you certified coaches with tons of experience and information </span>
            </div>

            <div>
              <img src={tick} />
              <span>all information about supplements </span>
            </div>

          </div>
          <div className='blur blur-r'></div>
        </div>
    </div>
  )
}

export default Reasons