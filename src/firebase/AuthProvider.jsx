import React, { createContext, useEffect, useState } from 'react';
import { getAuth , GoogleAuthProvider, signInWithPopup ,createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged , signOut} from "firebase/auth";
import app from './firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState()

  const googleSignIn = (value) =>{
    return signInWithPopup(auth, googleProvider)
  };
  const signUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn  = (email, password) =>{
    return signInWithEmailAndPassword (auth, email, password)
  }

  useEffect(() =>{
    const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    }) 
    return() => {
      return unsubscribe()
    }
  })

  const logOut = () =>{
    return signOut(auth);
  }

  const AuthInfo  ={ googleSignIn, signUp, signIn, user , logOut}
 return <AuthContext.Provider value={AuthInfo}>
    {children}
   </AuthContext.Provider>
  
 
};

export default AuthProvider;