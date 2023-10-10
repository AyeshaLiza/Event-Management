import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Root = () => {
 return (
 <div>
   <div className=' mx-auto bg-violet-100'>
   <div className=' bg-violet-200'>
    <div className=' w-[80%] lg:w-[90%] mx-auto'>
    <Navbar></Navbar>
    </div>
   </div>
   <div>
   <Outlet></Outlet>
   </div>
   <div>
    <Footer></Footer>
  </div>
  </div>
 </div>
 );
};

export default Root;