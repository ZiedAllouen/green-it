import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import Heart from '../../assets/heart.png'
import HeroImg from '../../assets/back-img.png'
import HeroBack from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion';
const Hero = () => {
  const transition={type: 'spring', duration:3}
  const mobile=window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero'>
      <div className='blur hero-blur'></div>
      <div className='left-h'>
        
        <div className='best-ad'>
          <motion.div
          initial={{left: mobile? "148":"185px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
         <span> Don’t be a fool, cover your tool</span>
        </div>

        <div className='hero-text'>
          <div>  
            <span className='stroke-text'>Sex </span>
            <span>  is cleaner with  </span>
            </div> 
            <div> 
              <span>a packaged wiener</span> 
            </div>
            <div >
              <span> We Help You To Protect Your Health, Be a Real Actor Of Your Sexual life and more ...</span>
            </div>
        </div>

{/* figures */}
      <div className='figures' >
        <div>
          <span>
          <NumberCounter end={43} start={20} delay='4' preFix="+" /> 
             </span> 
          <span>Million HIV Infections</span>
        </div>
        <div>
          <span><NumberCounter end={374} start={350} delay='4' preFix="+" /> </span> 
          <span>Million new STI infections/Year</span>
        </div>
        <div>
          <span><NumberCounter end={32} start={20} delay='4' preFix="+" /> </span> 
          <span>Cause Of Infection</span>
        </div>

      </div>
      {/* hero buttons */}
      <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
      </div>
      </div>
      <div className='right-h'>
        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
        className='heart-rate'>
          <img src={Heart} />
          <span>Be conscious    <br/> </span>
          <span>Be aware</span>
          
        </motion.div>
        {/* hero images */}
        <img src={HeroImg} className='hero-image'/>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:"20rem"}}
        transition={transition}
        src={HeroBack} className='hero-image-back'/>

      </div>
    </div>
  )
}

export default Hero