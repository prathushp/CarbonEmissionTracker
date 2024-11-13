//pages/SubmitDataPage.tsx
/************
 * This code segment handles the User Data Submission, it will takes the user data uploaded from the form and use fetch to post
 * the data on to the mongoDB
 * author: Zehao Song
 ************/

import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {Navigate} from 'react-router-dom';
import {useUser} from '../contexts/UserContext';

// This function takes the user input data from the form to submit a post request to the server
async function submitData(data: { distance: string; transportation: string; recycledwaste: string; household: string; date: string; }, userId: string | null) {
    const response = await fetch('http://localhost:3000/users/submit/userdata', {
        method: 'POST',
        body: JSON.stringify({userId, ...data}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // handles the response if it is a bad request
    if(!response.ok) {
        throw new Error(`An error has occured: ${response.statusText}`);
    }
    return await response.json();
}

// This is the main display page, it handles rendering of a form, it will accept various user input and call the submitData from above
const SubmitDataPage: React.FC = () => {
    const { user, userId } = useUser();
    // console.log(userId);
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return (
        <Box mt={4} style={{ background: 'linear-gradient(to bottom, #abb6ba, #068a32)', backgroundSize: 'cover', minHeight: '100vh'}}>
            <Formik
                initialValues={{
                    distance: '',
                    transportation: '',
                    recycledwaste: '',
                    household: '',
                    date: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    submitData(values, userId)
                        .then(data => console.log(data))
                        .catch(error => console.log(error))
                        .finally(() => setSubmitting(false));
                }}
            >
                {({touched, errors}) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel id="transportation-label" style={{fontWeight: "bold"}}>Transportation</InputLabel>
                                    <Field
                                        name="transportation"
                                        as={Select}
                                        labelId="transportation-label"
                                        label="Transportation"
                                        inputProps={{
                                            style: { fontWeight: "bold" }
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="car">Car</MenuItem>
                                        <MenuItem value="electric">Electric Car</MenuItem>
                                        <MenuItem value="bus">Bus</MenuItem>
                                        <MenuItem value="subway">Subway</MenuItem>
                                        <MenuItem value= "plane">Plane</MenuItem>
                                        <MenuItem value="bikeorwalk">Bike/Walk</MenuItem>
                                    </Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} xl={6}>
                                <Field
                                    name="distance"
                                    as={TextField}
                                    fullWidth
                                    label="Distance(mi)"
                                    variant="outlined"
                                    helperText={touched.distance && errors.distance}
                                    error={Boolean(touched.distance && errors.distance)}
                                    InputLabelProps={{
                                        style: { fontWeight: "bold" },
                                    }}
                                    inputProps={{
                                        style: { fontWeight: "bold" }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} xl={6}>
                                <Field
                                    name="recycledwaste"
                                    as={TextField}
                                    fullWidth
                                    label="Recycled Waste(Pounds)"
                                    variant="outlined"
                                    helperText={touched.recycledwaste && errors.recycledwaste}
                                    error={Boolean(touched.recycledwaste && errors.recycledwaste)}
                                    InputLabelProps={{
                                        style: { fontWeight: "bold" },
                                    }}
                                    inputProps={{
                                        style: { fontWeight: "bold" }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} xl={6}>
                                <Field
                                    name="household"
                                    as={TextField}
                                    fullWidth
                                    label="Number of People in the HouseHold"
                                    variant="outlined"
                                    helperText={touched.household && errors.household}
                                    error={Boolean(touched.household && errors.household)}
                                    InputLabelProps={{
                                        style: { fontWeight: "bold" },
                                    }}
                                    inputProps={{
                                        style: { fontWeight: "bold" }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} xl={6}>
                                <Field
                                    name="date"
                                    as={TextField}
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontWeight: "bold" }
                                    }}
                                    inputProps={{
                                        style: { fontWeight: "bold" }
                                    }}
                                    helperText={touched.date && errors.date}
                                    error={Boolean(touched.date && errors.date)}
                                />
                            </Grid>
                            <Grid item xs={12} xl={6}>
                                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Box>
);
}

export default SubmitDataPage;