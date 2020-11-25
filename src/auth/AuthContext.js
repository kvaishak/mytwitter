import React, {useContext, useState, useEffect} from 'react';
import {auth} from './firebase'

const AuthContext = React.createContext();

//this export allows us to use the useAuth without importing useContext from the Consumer
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    const [currentUser, setCurrentUser] = useState();
    const [userLoaded, setUserLoaded] = useState(false);

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setUserLoaded(true);
        }); 
        return unsubscriber;            //this will un-subscribe the event listener
    }, []);


    
    function signUp(email, password, username) {
    
          return new Promise((resolve, reject) => {
            auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                result.user.updateProfile({
                    displayName: username
                }).then(result => resolve(result));
             })
          });
    }
    
    function signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    function updateUserName(username){
        console.log("Hello there", currentUser);
        return currentUser.updateProfile({displayName: username});
    }

    //Data being served from the Context Provider
    const value = {
        currentUser,
        signUp,
        signIn,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateUserName
    }
    
    return (
        <AuthContext.Provider value={value}>
            {userLoaded && children}
        </AuthContext.Provider>
      );
}