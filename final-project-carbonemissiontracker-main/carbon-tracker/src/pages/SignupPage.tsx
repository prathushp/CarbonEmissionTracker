// pages/SignupPage.tsx
/************
 * This code segment retrieves the SignupForm component and has a button that links the user to the login page
 * author: Zehao Song
 ************/

import React from 'react';
import {SignupForm} from "../components/SignupForm.tsx";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
    return (
        <Container style={{background: 'linear-gradient(to bottom, #abb6ba, #068a32)', backgroundSize: 'cover', minHeight: '100vh', maxWidth: '100%'}}>
            <Container maxWidth="sm">
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid container justifyContent="center">
                    <Paper elevation={3}>
                        <Box m={4} p={2}>
                            <Typography variant="h4" gutterBottom>Create an Account</Typography>
                            <SignupForm />
                            <Box mt={2}>
                                <Button component={Link} to="/login" variant="text" color="primary">
                                    Already have an account? Sign In
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Container>
        </Container>
    );
}

export default SignupPage;