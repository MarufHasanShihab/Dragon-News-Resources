import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    // login with google
    const googleLogin = ()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // user create with email and password
    const userCreate = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in with email and password
    const userSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out 
    const logout = ()=>{
        return signOut(auth)
    }


    // on auth state change
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
        })
    },[])

    // context value
    const Authentications = {
        googleLogin,
        userCreate,
        userSignIn,
        user,
        logout
    }
    return (
        <AuthContext.Provider value={Authentications}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}

export default AuthProvider;