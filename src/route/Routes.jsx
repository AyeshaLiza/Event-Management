import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../pages/home';
import ServiceDetail from '../components/sections/servise-section/ServiceDetail';
import Login from '../components/login/login';
import Register from '../components/regester/Register';
import Error from '../pages/error/Error';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import BookedPrivateRoute from '../pages/PrivateRoute/BookedPrivateRoute';
import BookingPrivateRoute from '../pages/PrivateRoute/BookingPrivateRoute';
import SpecialEventPrivateRoute from '../pages/PrivateRoute/SpecialEventPrivateRoute';
import SpecialEvent from '../pages/SpecialEvent';

const Routes = createBrowserRouter(
 [
  {
   path: '/',
   element: <Root></Root>,
   errorElement: <Error></Error>,
   children:[
    {
     path: '/',
   element: <Home></Home>,
    },
    {
     path: '/login',
   element: <Login></Login>,
    },
    
    {
     path: '/register',
   element: <Register></Register>,
    },
    
    {
      path: "/card/:id",
      element: <PrivateRoute>
           <ServiceDetail></ServiceDetail>
      </PrivateRoute>,
      loader: () =>fetch('/Fakejsondata.json')
     },
     {
      path: '/venue',
    element: <BookingPrivateRoute>
      <BookedPrivateRoute></BookedPrivateRoute>,
    </BookingPrivateRoute>
     },
     {
      path: '/event',
    element: <SpecialEventPrivateRoute>
      <SpecialEvent></SpecialEvent>
    </SpecialEventPrivateRoute>
     },
     
    

   ]
  }
 ]
)



export default Routes;