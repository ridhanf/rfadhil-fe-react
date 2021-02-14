import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>PORTFOLIO WEBSITE</h1>
      <p>by Ridhan Fadhilah</p>
      <div className="hero-btns">
        <Link to='/resume' className='btn-mobile'>
          <Button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            SEE RESUME
          </Button>
        </Link>
        <Link to='/' className='btn-mobile'>
          <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            PORTFOLIOS
            <i className='far fa-play-circle' />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection;