import React, {useContext, useState, useEffect} from 'react';
import {auth} from './firebase'

const AuthContext = React.createContext();

//this export allows us to use the useAuth without importing useContext from the Consumer
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        }); 
        return unsubscriber;            //this will un-subscribe the event listener
    }, []);


    
    function signUp(email, password) {
        console.log(email, password);
        return auth.createUserWithEmailAndPassword(email, password);
    }
    
    //Data being served from the Context Provider
    const value = {
        currentUser,
        signUp
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
      );
}