import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Define interface for TextBoxProps
interface TextBoxProps {
    title: string;
    content: string;
    buttonText: string;
}

// TextBox component
const TextBox: React.FC<TextBoxProps> = ({ title, content, buttonText }) => {
    const navigate = useNavigate();

    // Handle click event for buttons
    const handleClick = () => {
        // Navigate to different pages based on button text
        if (buttonText === 'Subscribe') {
            navigate("/subscribe"); // Navigate to signup page for Subscribe button
        } else if (buttonText === 'Contact Us') {
            navigate("/contactus"); // Navigate to contact page for Contact Us button
        }
    };

    return (
        <Box p={3}>
            {/* Title */}
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            {/* Content */}
            <Typography variant="body1" gutterBottom>
                {content}
            </Typography>
            {/* Button */}
            <Button variant="contained" color="primary" onClick={handleClick}>
                {buttonText}
            </Button>
        </Box>
    );
};

// StayUpdated component
const StayUpdated = () => (
    <TextBox
        title="Stay Updated"
        content="Receive the latest news, insights and events from the Carbon Trace directly to your inbox"
        buttonText="Subscribe"
    />
);

// ContactUs component
const ContactUs = () => (
    <TextBox
        title="Contact Us"
        content="Get in touch to see how our experts can help you"
        buttonText="Contact Us"
    />
);

// HomePage component
const HomePage = () => (
    <div>
        {/* Display StayUpdated and ContactUs components */}
        <Box mt={5} display="flex" justifyContent="center">
            <StayUpdated />
            <ContactUs />
        </Box>
    </div>
);

export default HomePage;
