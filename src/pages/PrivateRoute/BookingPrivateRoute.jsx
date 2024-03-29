import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';

const BookingPrivateRoute = ({children}) => {
 const {user} = useContext(AuthContext);
 console.log(user);

 if (user) {
  return children;
 }

     return <Navigate to ={"/login"} replace></Navigate>

  
 
};

export default BookingPrivateRoute;