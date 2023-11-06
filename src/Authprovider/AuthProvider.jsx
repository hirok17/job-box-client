import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] =useState(null);
const [loading, setLoading]=useState(true);

const googleSignUp=()=>{
    return signInWithPopup(auth, googleProvider);
}
const createUser=(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
};

const userLogin=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut=()=>{
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unSubscribe();
    }
},[])
const authInfo ={user, createUser, userLogin, googleSignUp, logOut, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;