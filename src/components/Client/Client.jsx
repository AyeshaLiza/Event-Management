import React from 'react';
import tenminutes from '../../assets/tenminutes.png'
import phero from '../../assets/phero.png'
import DU from '../../assets/DU.png'
import Brac from '../../assets/Brac.png'
import Untitled from '../../assets/Untitled.jpg'
import udemyy from '../../assets/udemy.png'
import gec from '../../assets/gec.jpg'
import GEV from '../../assets/GEV.png'
import ioed from '../../assets/ioed.jpg'


const Client = () => {
 return (
  <div className='w-[90%] mx-auto'>
    <div className=''>
    <h1 className='text-4xl text-center font-bold text-violet-900'>Our Clients Worldwide</h1>
     
     <div className='grid grid-cols-4 my-7'>

       <img src={GEV} alt="" />
       <img src={tenminutes} alt="" />
       <img className='w-52 h-52' src={Untitled} alt="" />
       <img className='w-52 h-52' src={ioed} alt="" />
       <img className='w-52 h-52' src={gec} alt="" />
       <img className='w-52 h-52'  src={DU} alt="" />
       <img className='w-52 h-52'  src={Brac} alt="" />
       <img className='w-52 h-52'  src={udemyy} alt="" />
     </div>
    </div>
  </div>
 );
};

export default Client;