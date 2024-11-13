import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, ThemeProvider, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 8,
});

const countries = [
    'Select Region', // "Select Region" will be the default value
    'United States',
    'India',
    'Canada',
    'United Kingdom',
    'Australia',
    'New Zealand',
    'China',
    'Japan',


];

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
    },
    submitButton: {
        //margin: theme.spacing(3, 0, 2),
    },
}));

const Subscribe: React.FC = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        region: 'Select Region', // Initialize region field with "Select Region"
    });
    const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.region === 'Select Region') {
            alert('Please select a region');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Subscription successful!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    region: 'Select Region', // Reset region field to "Select Region"
                });
                setSubscriptionSuccess(true);
                setTimeout(() => {
                    setSubscriptionSuccess(false);
                }, 5000); // Clear success message after 5 seconds
            } else {
                const error: Error = await response.json();
                console.error('Failed to subscribe:', error.message);
            }
        } catch (error: any) {
            console.error('Error subscribing:', error.message);
        }
    };

    const isFormValid = () => {
        return (
            formData.firstName !== '' &&
            formData.lastName !== '' &&
            formData.email !== '' &&
            formData.region !== 'Select Region' // Ensure a region is selected
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <br/>
                <br/>
                <br/>
                <br/>
                <div className={classes.formContainer}>
                    <Typography component="h1" variant="h5">
                        Subscribe to our newsletter
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="email"
                                    label="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formData.region}
                                    onChange={(e) => setFormData({...formData, region: e.target.value as string})}
                                    label="Region"
                                >
                                    {countries.map((country, index) => (
                                        <MenuItem key={index} value={country} disabled={country === 'Select Region'}>
                                            {country}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                            disabled={!isFormValid()}
                        >
                            Subscribe
                        </Button>
                        {subscriptionSuccess && (
                            <Typography variant="body1" color="textPrimary">
                                You have successfully subscribed to the newsletter!
                            </Typography>
                        )}
                    </form>
                </div>
                <br/>
                <br/>
            </Container>
        </ThemeProvider>
    );
};

export default Subscribe;