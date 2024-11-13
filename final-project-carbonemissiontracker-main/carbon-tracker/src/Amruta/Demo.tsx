/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/
// Importing necessary dependencies from Material-UI and React Router DOM.
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import backImg from '../Images/Demo.jpg';

// Custom styles for the Demo component using Material-UI's makeStyles hook.
const useStyles = makeStyles((theme) => ({
    // Styling for the root container, including background image and layout properties.
    root: {
        backgroundImage: `url(${backImg})` ,// Background image for the container.
        backgroundSize: 'cover', // Ensure the background image covers the entire container.
        backgroundPosition: 'center', // Position the background image at the center.
        display: 'flex', // Display the content as a flex container.
        flexDirection: 'column', // Arrange child elements vertically.
        justifyContent: 'center', // Align child elements vertically at the center.
        alignItems: 'center', // Align child elements horizontally at the center.
        color: '#fff', // Text color.
        textAlign: 'center', // Align text content at the center.
        padding: theme.spacing(0), // Padding around the content.
        height: '100vh', // Set container height to full viewport height.
    },
    // Styling for the container within the root container.
    container: {
        padding: `${theme.spacing(3)}px 0 ${theme.spacing(6)}px`, // Padding for the inner container.
        maxWidth: '100% !important', // Ensure the inner container takes full width.
    },
    // Styling for the button within the container.
    button: {
        marginTop: theme.spacing(30), // Margin from the top of the container for the button.
    },
}));

// Functional component for the Demo page.
export default function Demo() {
    const classes = useStyles(); // Applying custom styles defined above.
    const navigate = useNavigate(); // React Router DOM hook for navigation.

    // Function to handle button click, navigating to the signup page.
    const handleButtonClick = () => {
        navigate('/signup');
    };

    return (
        // Container component with custom styles for the Demo page.
        <Container className={`${classes.root} ${classes.container}`}>
            {/* Button component triggering navigation to the signup page on click. */}
            <Button variant="contained" color="primary" className={classes.button} onClick={handleButtonClick}>
                Request your demo today
            </Button>
        </Container>
    );
}