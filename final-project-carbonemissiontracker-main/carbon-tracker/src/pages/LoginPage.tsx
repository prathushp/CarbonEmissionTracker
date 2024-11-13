// pages/LoginPage.tsx
/************
 * This code segment retrieves the LoginForm component and has a button that links the user to the signup page
 * author: Zehao Song
 ************/

import React from 'react';
import Container from '@mui/material/Container';
import {LoginForm} from '../components/LoginForm';
import '../css/Login.css';
import {Link} from "react-router-dom";

const LoginPage: React.FC = () => {
    return (
        <Container style={{background: 'linear-gradient(to bottom, #abb6ba, #068a32)', backgroundSize: 'cover', minHeight: '100vh', maxWidth: '100%'}}>
            <Container maxWidth="sm">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='container'>
                    <div className="header">
                        <div className="text">Sign In</div>
                        <div className="underline"></div>
                    </div>
                    <LoginForm/>
                    <div className="signup">New User?<span><Link to="/signup">Click to here to Sign up!</Link></span>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default LoginPage;