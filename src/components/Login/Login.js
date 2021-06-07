import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Login.css';

const Login = () => {
    return (
        <div className="login-wrapper">
            <button className="btn btn-style btn-primary"><FacebookIcon></FacebookIcon> Continue with Facebook</button>
            <br /> <br />
            <button className="btn btn-style btn-success">Continue with Google</button>
        
        </div>
    );
};

export default Login;