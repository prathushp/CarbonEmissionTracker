// pages/LoginPage.tsx
/************
 * This code segment retrieves the LoginForm component and has a button that links the user to the signup page
 * author: Zehao Song
 ************/

import React from 'react';
import { Link } from 'react-router-dom';
import {LoginForm} from '../components/LoginForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import pageback from '../assets/overallback.jpg';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import '../css/Login.css';
import '../../src/index.css';
const LoginPage: React.FC = () => {
    return (
        <Container style={{ backgroundImage: `url(${pageback})`, backgroundSize: 'cover', minHeight: '100vh', maxWidth: '100%'}}>
            <Container maxWidth="sm" >
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<Grid container justifyContent="center">*/}
                {/*    <Paper elevation={3}>*/}
                {/*        <Box p={4} mb={2}>*/}
                {/*            <Typography variant="h4" gutterBottom>Welcome!</Typography>*/}
                {/*            <Typography variant="h5">Please sign in to continue.</Typography>*/}
                {/*            <Box my={2}>*/}
                {/*                <LoginForm />*/}
                {/*            </Box>*/}
                {/*            <Box mt={3}>*/}
                {/*                <Button component={Link} to="/signup" variant="text" color="primary">*/}
                {/*                    Don't have an account? Sign Up*/}
                {/*                </Button>*/}
                {/*            </Box>*/}
                {/*        </Box>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}

                <div className='container'>
                    <div className="header">
                        <div className="text">Sign In</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={user_icon} alt=""/>
                            <input type="text" placeholder="UserName" />
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={password_icon} alt=""/>
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="signup">New User?<span>Click to here to Sign up!</span></div>
                    <div className="submit-container">
                        <div className="submit">Log In</div>
                        <div className="submit">Sign Up</div>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default LoginPage;