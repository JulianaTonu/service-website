import React, { createContext, useEffect,useState} from 'react';


import app from './../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,signInWithPopup,GoogleAuthProvider, updateProfile} from 'firebase/auth';
export const AuthContext =createContext()

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading] =useState(true)
    
const googleProvider = new GoogleAuthProvider()
//create user
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    //signIN
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //googlesignIN
    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    //for update profile
const updateUserProfile =(profile)=>{
    return updateProfile(auth.currentUser, profile)
}

  //logout  
    const logout=()=>{
        localStorage.removeItem('mytoken')
     return signOut(auth)
            }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('currentuser',currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authInfo ={createUser,signIn,user,logout,loading,signInWithGoogle,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;