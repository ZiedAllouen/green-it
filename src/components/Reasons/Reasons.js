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
              <span>Condoms help prevent HIV for higher risk sexual activities like anal or vaginal sex, and for lower risk activities, like oral sex and sharing sex toys. </span>
            </div>

            <div>
              <img src={tick} />
              <span>PrEP prevents the HIV virus from growing and attaching itself as soon as it enters the body.</span>
            </div>

            <div>
              <img src={tick} />
              <span>TasP refers to taking HIV medicine to prevent the sexual transmission of HIV. It is one of the most highly effective options for preventing HIV transmission.</span>
            </div>

            <div>
              <img src={tick} />
              <span>Pep means taking medicine to prevent HIV after a possible exposure. </span>
            </div>

          </div>
          <div className='blur blur-r'></div>
        </div>
    </div>
  )
}

export default Reasons