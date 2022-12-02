import React,{useState} from 'react';
import './Header.css'

const Header = () => {
  const mobile=window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] =useState(false)
  return (
    <div className='header'>

      
    </div>
  )
}

export default Header