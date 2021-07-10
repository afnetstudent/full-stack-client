import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from '../firebaseConfig';
import { UserContex } from '../../App';
import { useHistory, useLocation } from "react-router-dom";
import { resolvePlugin } from '@babel/core';
import { removeTypeDuplicates } from '@babel/types';

firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [logginUser, setLoggingUser] = useContext(UserContex);
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleBtn = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                const { displayName, email } = result.user;
                const newUser = { name: displayName, email }
                setLoggingUser(newUser)
                history.replace(from)
                
                
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={handleGoogleBtn}> Continue With Google </button>
        </div>
    );
};

export default Login;