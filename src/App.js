import React from 'react'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Coaches from './components/Coaches/Coaches'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      
        <Hero/>
        <Programs/>
        <Reasons/>
        <Coaches/>
        <Join/>

    </div>
  )
}

export default App