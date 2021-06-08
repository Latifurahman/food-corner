import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from '../../firebase.config';


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();




const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { 
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                console.log(displayName, email, photoURL)
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(credential, token, user);
                
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                
                console.log(errorCode, errorMessage, email, credential)
            });
    }

    const handleFacebookSignIn = () =>{
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)

                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;

                console.log(user)

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }

    

    return (
        <div className="login-wrapper">
            <button onClick={handleFacebookSignIn}  className="btn btn-style btn-primary"><FacebookIcon></FacebookIcon> Continue with Facebook</button>
            <br /> <br />
            <button onClick={handleGoogleSignIn} className="btn btn-style btn-success">Continue with Google</button>
            <br /> <br /> <br />

            {
                user.isSignedIn && <h4>Welcome, {user.name}</h4>
            }
        
        </div>
    );
};

export default Login;