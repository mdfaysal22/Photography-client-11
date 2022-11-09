import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

const auth = getAuth(app)
export const UserAuth = createContext()
const AuthContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const signUpInfo = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInInfo = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUpGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo
        })
        
        
    }
    const logout = () => {
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    } ,[])
    const UserInfo = {user, loading,setLoading, signUpInfo, signInInfo, updateUser, signUpGoogle, logout};

    return (
        <UserAuth.Provider value={UserInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthContext;