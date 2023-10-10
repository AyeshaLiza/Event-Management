import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';

const SpecialEventPrivateRoute = ({children}) => {
 const {user} = useContext(AuthContext);
 console.log(user);

 if (user) {
  return children;
 }
 return <Navigate to ={"/login"} replace></Navigate>
};

export default SpecialEventPrivateRoute;