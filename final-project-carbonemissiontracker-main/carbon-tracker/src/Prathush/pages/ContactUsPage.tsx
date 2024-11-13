import React from 'react';
import { Typography, Box } from '@mui/material';

// ContactUsPage component
const ContactUsPage: React.FC = () => (
    <div>
        <br />
        <br />
        <br />
        {/* Container with padding */}
        <Box p={3}>
            {/* Heading */}
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            {/* Description */}
            <Typography variant="body1" gutterBottom>
                Have questions or feedback? We're here to help!
            </Typography>
            {/* Contact information */}
            <Typography variant="body1" gutterBottom>
                You can reach us via email at: thecarbontrace@gmail.com
            </Typography>
            {/* Office address */}
            <Typography variant="body1" gutterBottom>
                Our office address is: 123 Green Street, Sustainability City, Boston
            </Typography>
            {/* Add more contact information or contact form as needed */}
        </Box>
    </div>
);

export default ContactUsPage;