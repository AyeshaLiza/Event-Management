import React, { createContext, useEffect, useState } from 'react';
import { getAuth , GoogleAuthProvider, signInWithPopup ,createUserWithEmailAndPassword, signInWithEmailAndPassword  , onAuthStateChanged , signOut, updateProfile} from "firebase/auth";
import app from './firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const googleSignIn = (value) =>{
    return signInWithPopup(auth, googleProvider)
  };
  const signUp = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn  = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword (auth, email, password)
  }

  useEffect(() =>{
    const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
      setLoading(false)
    }) 
    return() => {
      return unsubscribe()
    }
  })

  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
  }
  
  const AuthInfo  ={ googleSignIn, signUp,loading, signIn, user , logOut, updateProfile}
 return <AuthContext.Provider value={AuthInfo}>
    {children}
   </AuthContext.Provider>
  
 
};

export default AuthProvider;