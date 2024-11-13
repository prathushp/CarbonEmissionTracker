import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import {makeStyles} from "@mui/styles";

// Define the Event interface for the event data
interface Event {
    _id: number;
    title: string;
    description: string;
    EventDate: string; // Assuming EventDate is a string formatted date
}


const useStyles = makeStyles(() => ({
    // other styles...

    header: {
        fontSize: '3em', // Adjust as needed
        textAlign: 'center',
    },
    paragraph: {
        fontSize: '1.5em', // Adjust as needed
        textAlign: 'center',
    },
}));

// Define the FormData interface for the form data
interface FormData {
    eventTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    numOfTickets: string;
    eventDate: string; // Add eventDate to FormData
}

// Define the EventDesc functional component
const EventDesc: React.FC = () => {
    // Get the eventId from the route parameters
    const { eventId } = useParams<{ eventId: string }>();

    // Define state variables
    const [formData, setFormData] = useState<FormData>({
        eventTitle: '',
        firstName: '',
        lastName: '',
        email: '',
        numOfTickets: '',
        eventDate: '', // Initialize eventDate
    });
    const [event, setEvent] = useState<Event | null>(null);
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Fetch event data on component mount
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get<Event>(`http://localhost:3000/Events/${eventId}`);
                setEvent(response.data);
                // Set form data with event title and date
                setFormData((prevData) => ({
                    ...prevData,
                    eventTitle: response.data.title,
                    eventDate: response.data.EventDate // Assuming the field name is EventDate
                }));
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };
        fetchEvent();
    }, [eventId]);

    // Handle input field changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle register button click
    const handleRegisterClick = async () => {
        // Validate form data
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.numOfTickets) {
            alert('Please fill in all the fields');
            return;
        }
        // Perform registration logic
        try {
            await axios.post('http://localhost:3000/Registration', {
                ...formData,
                eventId,
            });
            setSnackbarMessage(`Thank you for registering for '${event ? event.title : ''}'!`);
            setSnackbarOpen(true);
            handleClose();
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    // Open the registration dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Close the registration dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Close the snackbar
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    // Format the event date
    const formatEventDate = (dateString: string) => {
        // Convert the date string to a Date object
        const date = new Date(dateString);
        // Format the date to your desired format, for example:
        return date.toLocaleString(); // This will display the date and time in the user's local timezone
        // return date.toISOString(); // This will display the date and time in UTC format
    };
    const classes = useStyles();
    // Render the component
    return (
        <div>
            <br/>
            <br/>
            <h1 className={classes.header}>{event ? event.title : ''}</h1>

            <p className={classes.paragraph}>Description: {event ? event.description : ''}</p>
            <p className={classes.paragraph}>Event Date: {event ? formatEventDate(event.EventDate) : ''}</p> {/* Display formatted event date */}


            <br/>
            <br/>

            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Register
            </Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>


            {/* Register dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Register for Event</DialogTitle>
                <DialogContent>
                    {/* Display event title in a disabled text field */}
                    <TextField
                        name="eventTitle"
                        label="Event Title"
                        value={formData.eventTitle}
                        disabled
                        fullWidth
                        margin="normal"
                    />
                    {/* Display event date in a disabled text field */}
                    <TextField
                        name="eventDate"
                        label="Event Date"
                        value={formatEventDate(formData.eventDate)}
                        disabled
                        fullWidth
                        margin="normal"
                    />
                    {/* Input fields for user registration */}
                    <TextField
                        name="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="numOfTickets"
                        label="Number of Tickets"
                        type="number"
                        value={formData.numOfTickets}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    {/* Cancel and Register buttons */}
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleRegisterClick} color="primary">
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Snackbar for registration confirmation */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            >
                <MuiAlert onClose={handleSnackbarClose} severity="success" elevation={6} variant="filled">
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default EventDesc;