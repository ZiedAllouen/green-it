import React,{useState} from 'react';
import './Header.css'
import logo from '../../assets/lg.png'
const Header = () => {
  const mobile=window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] =useState(false)
  return (
    <div className='header'>
      <img src={logo} alt='' className='logo'/>
      
    </div>
  )
}

export default Header