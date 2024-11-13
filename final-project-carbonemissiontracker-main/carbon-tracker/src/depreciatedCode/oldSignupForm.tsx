// components/SignupForm.tsx
/************
 * This code segment is the form element that is responsible for handeling the user signup
 * author: Zehao Song
 ************/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Button, LinearProgress } from '@mui/material';
import { TextField } from 'formik-material-ui';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const initialValues = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
};

// this is the validation schema that will be used for Formik to handle the form submission
const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required'),
    firstname: Yup.string()
        .required('First Name is required'),
    lastname: Yup.string()
        .required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    address: Yup.string()
        .required('Address is required'),
});

export const SignupForm: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    // When the form is submitted, use fetch to send a request to server side for processing
                    const response = await fetch('http://localhost:3000/users/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    });

                    if(response.ok){
                        navigate('/login');
                    } else {
                        const error = await response.json();
                        setSubmitting(false);
                        throw new Error(error.message);
                    }
                } catch (error: any) {
                    setError(error.message);  // On error, set the error state
                    console.error("There was an error!", error);
                }
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, submitForm, touched, errors }) => (
                <Form>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Field component={TextField} fullWidth name="username" type="text" label="Username" error={touched.username && !!errors.username} helperText={touched.username && errors.username}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} fullWidth name="password" type="password" label="Password" error={touched.password && !!errors.password} helperText={touched.password && errors.password}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} fullWidth name="firstname" type="text" label="First Name" error={touched.firstname && !!errors.firstname} helperText={touched.firstname && errors.firstname}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} fullWidth name="lastname" type="text" label="Last Name" error={touched.lastname && !!errors.lastname} helperText={touched.lastname && errors.lastname}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} fullWidth name="email" type="email" label="Email" error={touched.email && !!errors.email} helperText={touched.email && errors.email}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} fullWidth name="address" type="text" label="Address" error={touched.address && !!errors.address} helperText={touched.address && errors.address}/>
                        </Grid>
                        <p>{error}</p>
                        {isSubmitting && <LinearProgress/>}
                        <Box mt={2}>
                            <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm} fullWidth>
                                Submit
                            </Button>
                        </Box>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;