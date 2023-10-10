import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetail = () => {
 
 
 const {id} = useParams();
  const [serviceDetail, setServiceDetail] = useState({})
  const details = useLoaderData();
  useEffect(() => {
   
   if (details){
    const foundData = details.find(item =>item.id == id)
    setServiceDetail(foundData)
   }

 },[id, details])
 
 const { price, eventName, image, shortDescription, detailDescription, button} = serviceDetail || {};

 return (
  <div>
      <div className=' w-[80%] lg:w-[80%] mx-auto my-8'>
    
    <div className=''>
      <div className='relative my-5  h-3/4'>
        <img className='w-3/4 h-3/4 ' src={image} alt="" />
       
        <div className='absolute bottom-6 left-7 flex justify-between'>
          <button className=' px-7 py-3 rounded-md bg-sky-400 font-medium text-2xl text-violet-900'>Book Your Event Now at {price}</button>
          
        </div>
      </div>
      
        <h1 className='py-4 font-bold text-3xl text-black'>{eventName}</h1>
        <div className='flex w-3/4 text-justify'>
        <p className='text-gray-600'>{detailDescription}</p>
        </div>
      
    </div>
  </div>
  </div>
 );
};

export default ServiceDetail;