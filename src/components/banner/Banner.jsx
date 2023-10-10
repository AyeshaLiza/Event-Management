import React from 'react';
import bookfair from '../../assets/bookfair.jpg'
import qurancom from '../../assets/qurancom.jpg'
import Bannerx from '../../assets/Bannerx.jpg'


const Banner = () => {
 return (
  <div>
    <div className=" carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-96">
    <img src={bookfair} className="w-full h-96 relative" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative h-96 w-full">
    <img src={qurancom} className="w-full h-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img src={Bannerx} className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
<div className='absolute max-w-lg mx-auto text-center text-white top-60 left-96'>
  <h1 className=' text-4xl font-bold'> Future Event</h1>
   <p className=''>A future-oriented educational event management website will offer personalized learning experiences, lifelong learning and skill development, incorporate AI-powered learning assistance, promote gamified learning, prioritize sustainability.</p>
  </div>
 
</div>
  </div>
 );
};

export default Banner;