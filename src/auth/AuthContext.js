import React, {useContext, useState, useEffect} from 'react';
import {auth} from './firebase';
import axiosInstance from "../axios/ServerInstance";

const AuthContext = React.createContext();

//this export allows us to use the useAuth without importing useContext from the Consumer
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    const [currentUser, setCurrentUser] = useState();
    const [currentUserJWT, setCurrentUserJWT] = useState();
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
                createNewUserInPostDB(result.user, username);
                result.user.updateProfile({
                    displayName: username
                }).then(result => resolve(result));
             })
          });
    }
    
    function signIn(email, password) {

        return new Promise((resolve, reject) => {
            auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                fetchAndUpdateUserJWT(result.user);
                resolve();
            });
        })
        
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
        return currentUser.updateProfile({displayName: username});
    }

    function createNewUserInPostDB(newUser, username){
        fetch("http://localhost:8282/user/new", {
            method: "POST",
            body: JSON.stringify({
                UserId: newUser.uid,
                UserName: username
            }),
        })
        .then(response => {
            console.log(response);
        }).catch(error => console.log(error));
    }

    function fetchAndUpdateUserJWT(user){
       const uid = user.uid;
       axiosInstance.get('/user/auth', {

        params: {
            uid: uid
        },

       })
       .then(response => {

        setCurrentUserJWT(response.data);

       }).catch(error => console.log(error));
    }

    //Data being served from the Context Provider
    const value = {
        currentUser,
        currentUserJWT,
        signUp,
        signIn,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateUserName,
        fetchAndUpdateUserJWT
    }
    
    return (
        <AuthContext.Provider value={value}>
            {userLoaded && children}
        </AuthContext.Provider>
      );
}