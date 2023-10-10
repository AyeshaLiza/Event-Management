import React from 'react';
import summerfest from '../../../../assets/summerfest.jpg'
import BookFestive from '../../../../assets/BookFestive.jpg'
import qurancom from '../../../../assets/qurancom.jpg'
const FeaturedEvents = () => {
 return (
  <div  data-aos="fade-right"
  className='w-[90%] mx-auto my-8'>
              <h1 className='text-4xl text-center font-bold text-violet-900'>Featured Events</h1>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7'>
      <div className="card w-96  bg-base-100  shadow-xl">
  <figure><img className='h-[220px] w-96' src={summerfest} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-center text-violet-900">Summer Fest for Kids</h2>
<button className="btn btn-secondary">Visit here</button>
  
  </div>
</div>
     
      <div className="card w-96  bg-base-100  shadow-xl">
  <figure><img className='h-[220px] w-96' src={BookFestive} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-center text-violet-900">Book Fair</h2>
<button className="btn btn-secondary">Visit here</button>

  </div>
</div>
     
     
      <div className="card w-96  bg-base-100  shadow-xl">
  <figure><img className='h-[220px] w-96' src={qurancom} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-center text-violet-900">Quran learning Competition</h2>
<button className="btn btn-secondary">Visit here</button>

  </div>
</div>
  
</div>
<div className='flex justify-center'>

<button className="btn btn-secondary">See More</button>
</div>
</div>
 );
};

export default FeaturedEvents;